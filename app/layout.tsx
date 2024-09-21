import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-provider";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Header } from "@/components/header";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Marco Haber - Portfolio",
  description: "Personal portfolio of Marco Haber",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable} font-sans`}
    >
      <body className="flex flex-col min-h-screen">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {/* Background grid and gradient */}
          <div className="fixed inset-0 bg-grid-small-black/[0.1] dark:bg-grid-small-white/[0.1] -z-10" />
          <div className="fixed inset-0 bg-white dark:bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] -z-10" />

          {/* Main content */}
          <div className="relative z-10 flex-grow">
            <div className="layout max-w-2xl mx-auto px-5 md:px-0">
              <Header />
              <main className="my-10">{children}</main>
            </div>
          </div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
