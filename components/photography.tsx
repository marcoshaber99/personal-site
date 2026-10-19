"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type KeyboardEvent,
  type MouseEvent,
  type PointerEvent,
} from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { photographs } from "@/data/content";
import { Container } from "./container";
import { cn } from "@/lib/utils";

/*
 * A full-bleed film strip. The browser does the scrolling (touch, trackpad,
 * momentum), so it stays smooth and cheap. A mouse can drag the strip and
 * fling it; arrows and arrow keys step one photo at a time. Clicking a photo
 * opens it large.
 */

// Strip photos are 14rem tall on phones and 20rem from the sm breakpoint; width follows the ratio.
const stripSizes = (ratio: number) =>
  `(min-width: 640px) ${Math.round(320 * ratio)}px, ${Math.round(224 * ratio)}px`;
const largeSizes = "(min-width: 640px) 60vw, 100vw";

export default function Photography() {
  const strip = useRef<HTMLDivElement>(null);
  const [edges, setEdges] = useState({ start: true, end: false });
  const [open, setOpen] = useState<number | null>(null);

  // --- Strip navigation -----------------------------------------------------

  const itemOffsets = useCallback(() => {
    const el = strip.current;
    if (!el) return [];
    const gutter = parseFloat(getComputedStyle(el).paddingLeft) || 0;
    return Array.from(el.children)
      .filter((c): c is HTMLElement => c instanceof HTMLElement && c.tagName === "FIGURE")
      .map((c) => c.offsetLeft - gutter);
  }, []);

  const step = useCallback(
    (dir: 1 | -1) => {
      const el = strip.current;
      if (!el) return;
      const offsets = itemOffsets();
      const x = el.scrollLeft;
      const target =
        dir === 1
          ? offsets.find((o) => o > x + 2)
          : [...offsets].reverse().find((o) => o < x - 2);
      el.scrollTo({ left: target ?? (dir === 1 ? el.scrollWidth : 0), behavior: "smooth" });
    },
    [itemOffsets]
  );

  useEffect(() => {
    const el = strip.current;
    if (!el) return;
    const update = () => {
      const max = el.scrollWidth - el.clientWidth;
      setEdges({ start: el.scrollLeft <= 1, end: el.scrollLeft >= max - 1 });
    };
    update();
    el.addEventListener("scroll", update, { passive: true });
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => {
      el.removeEventListener("scroll", update);
      ro.disconnect();
    };
  }, []);

  // --- Mouse drag with a light fling ---------------------------------------

  const drag = useRef<{
    x: number;
    left: number;
    moved: boolean;
    samples: { x: number; t: number }[];
  } | null>(null);
  const fling = useRef(0);
  const suppressClick = useRef(false);

  const onPointerDown = (e: PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== "mouse" || e.button !== 0) return;
    cancelAnimationFrame(fling.current);
    drag.current = {
      x: e.clientX,
      left: e.currentTarget.scrollLeft,
      moved: false,
      samples: [{ x: e.clientX, t: performance.now() }],
    };
  };

  const onPointerMove = (e: PointerEvent<HTMLDivElement>) => {
    const d = drag.current;
    if (!d) return;
    const dx = e.clientX - d.x;
    if (!d.moved) {
      if (Math.abs(dx) < 4) return;
      d.moved = true;
      e.currentTarget.setPointerCapture(e.pointerId);
      e.currentTarget.dataset.dragging = "";
    }
    e.currentTarget.scrollLeft = d.left - dx;
    d.samples.push({ x: e.clientX, t: performance.now() });
    if (d.samples.length > 5) d.samples.shift();
  };

  const onPointerUp = (e: PointerEvent<HTMLDivElement>) => {
    const d = drag.current;
    if (!d) return;
    drag.current = null;
    const el = e.currentTarget;
    delete el.dataset.dragging;
    if (!d.moved) return;

    suppressClick.current = true;
    setTimeout(() => (suppressClick.current = false), 0);

    // Carry on with the pointer's speed, then ease out.
    const first = d.samples[0];
    const last = d.samples[d.samples.length - 1];
    const dt = Math.max(last.t - first.t, 1);
    let v = (-(last.x - first.x) / dt) * 16; // px per frame
    if (Math.abs(v) < 1) return;
    const tick = () => {
      el.scrollLeft += v;
      v *= 0.94;
      if (Math.abs(v) > 0.4) fling.current = requestAnimationFrame(tick);
    };
    fling.current = requestAnimationFrame(tick);
  };

  const onClickCapture = (e: MouseEvent<HTMLDivElement>) => {
    if (suppressClick.current) {
      e.preventDefault();
      e.stopPropagation();
    }
  };

  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      step(1);
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      step(-1);
    }
  };

  useEffect(() => () => cancelAnimationFrame(fling.current), []);

  // --- Lightbox -------------------------------------------------------------

  const close = useCallback(() => setOpen(null), []);
  const show = useCallback(
    (dir: 1 | -1) =>
      setOpen((i) => (i === null ? i : (i + dir + photographs.length) % photographs.length)),
    []
  );

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: globalThis.KeyboardEvent) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowRight") show(1);
      else if (e.key === "ArrowLeft") show(-1);
    };
    window.addEventListener("keydown", onKey);
    const scrollbar = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = "hidden";
    document.body.style.paddingRight = `${scrollbar}px`;
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    };
  }, [open, close, show]);

  const current = open !== null ? photographs[open] : null;
  // Which large images have finished loading, so the sharp one fades over the cached preview.
  const [loaded, setLoaded] = useState<Record<number, boolean>>({});
  const neighbours =
    open === null
      ? []
      : [-1, 1].map((d) => photographs[(open + d + photographs.length) % photographs.length]);

  return (
    <section aria-labelledby="photography-label">
      <Container>
        <div className="flex items-end justify-between gap-6">
          <h2
            id="photography-label"
            className="font-display text-2xl leading-none tracking-tight text-foreground"
          >
            Photography
          </h2>
          <div className="flex gap-2">
            <NavButton label="Previous photo" disabled={edges.start} onClick={() => step(-1)}>
              <ArrowLeft className="h-4 w-4" strokeWidth={1.5} />
            </NavButton>
            <NavButton label="Next photo" disabled={edges.end} onClick={() => step(1)}>
              <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
            </NavButton>
          </div>
        </div>

      <div
        ref={strip}
        tabIndex={0}
        aria-label="Photographs. Use the arrow keys to move between them."
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        onClickCapture={onClickCapture}
        onKeyDown={onKeyDown}
        className="no-scrollbar -mx-6 mt-6 flex select-none gap-2.5 overflow-x-auto overscroll-x-contain px-6 py-1 focus-visible:ring-0 focus-visible:ring-offset-0 data-[dragging]:cursor-grabbing data-[dragging]:[&_*]:pointer-events-none"
      >
        {photographs.map((photo, i) => {
          const ratio = photo.width / photo.height;
          return (
            <figure key={photo.id} className="shrink-0">
              <button
                type="button"
                onClick={() => setOpen(i)}
                aria-label={`Open “${photo.alt}”`}
                style={{ aspectRatio: `${photo.width} / ${photo.height}` }}
                className="relative block h-[14rem] overflow-hidden rounded-[3px] bg-muted sm:h-[20rem]"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  draggable={false}
                  sizes={stripSizes(ratio)}
                  loading={i < 3 ? "eager" : "lazy"}
                  className="object-cover"
                />
              </button>
            </figure>
          );
        })}
      </div>
      </Container>

      <AnimatePresence>
        {current && open !== null && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={current.alt}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex flex-col bg-background/95 backdrop-blur-sm"
            onClick={close}
          >
            <div className="flex items-center justify-between px-6 py-5 text-sm text-muted-foreground">
              <span className="tabular-nums">
                {open + 1} / {photographs.length}
              </span>
              <button
                type="button"
                onClick={close}
                aria-label="Close"
                className="-mr-2 inline-flex h-8 w-8 items-center justify-center rounded-full transition-colors hover:text-foreground"
              >
                <X className="h-4 w-4" strokeWidth={1.5} />
              </button>
            </div>

            <div className="flex min-h-0 flex-1 items-center justify-center px-6">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, scale: 0.985 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                className="flex h-full w-full max-w-5xl items-center justify-center"
                onClick={(e) => e.stopPropagation()}
              >
                <div
                  className="relative max-w-full"
                  style={{
                    width: `min(100%, calc(78vh * ${current.width / current.height}))`,
                    aspectRatio: `${current.width} / ${current.height}`,
                  }}
                >
                  {/* The strip's own image: already in cache, so it shows at once. */}
                  <Image
                    src={current.src}
                    alt=""
                    aria-hidden="true"
                    fill
                    sizes={stripSizes(current.width / current.height)}
                    className="rounded-[3px] object-contain"
                  />
                  <Image
                    src={current.src}
                    alt={current.alt}
                    fill
                    sizes={largeSizes}
                    priority
                    onLoad={() => setLoaded((l) => ({ ...l, [current.id]: true }))}
                    className={cn(
                      "rounded-[3px] object-contain transition-opacity duration-300",
                      loaded[current.id] ? "opacity-100" : "opacity-0"
                    )}
                  />
                </div>
              </motion.div>
            </div>

            <div
              className="flex items-center justify-center gap-3 px-6 py-5"
              onClick={(e) => e.stopPropagation()}
            >
              <NavButton label="Previous photo" onClick={() => show(-1)}>
                <ArrowLeft className="h-4 w-4" strokeWidth={1.5} />
              </NavButton>
              <NavButton label="Next photo" onClick={() => show(1)}>
                <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
              </NavButton>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {neighbours.length > 0 && (
        <div aria-hidden="true" className="pointer-events-none fixed -left-px -top-px h-px w-px overflow-hidden opacity-0">
          {neighbours.map((p) => (
            <Image
              key={p.id}
              src={p.src}
              alt=""
              width={p.width}
              height={p.height}
              sizes={largeSizes}
              loading="eager"
            />
          ))}
        </div>
      )}
    </section>
  );
}

function NavButton({
  label,
  disabled,
  onClick,
  children,
}: {
  label: string;
  disabled?: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      disabled={disabled}
      onClick={onClick}
      className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-foreground/40 hover:text-foreground disabled:cursor-default disabled:opacity-30 disabled:hover:border-border disabled:hover:text-muted-foreground"
    >
      {children}
    </button>
  );
}
