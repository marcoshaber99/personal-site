import localFont from "next/font/local";

export const ppEditorialNew = localFont({
  src: [
    {
      path: "../app/fonts/PPEditorialNew-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../app/fonts/PPEditorialNew-Italic.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../app/fonts/PPEditorialNew-Ultrabold.otf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../app/fonts/PPEditorialNew-UltraboldItalic.otf",
      weight: "800",
      style: "italic",
    },
    {
      path: "../app/fonts/PPEditorialNew-Ultralight.otf",
      weight: "200",
      style: "normal",
    },
  ],
  variable: "--font-pp-editorial-new",
});
