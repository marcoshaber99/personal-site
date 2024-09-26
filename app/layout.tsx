import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import "./globals.css";
import "./prism-theme.css";
import { ThemeProvider } from "@/providers/theme-provider";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Header } from "@/components/header";
import Footer from "@/components/footer";
import { Background } from "@/components/bg-gradient";

export const metadata: Metadata = {
  title: {
    default: "Marco Haber - Portfolio",
    template: "%s | Marco Haber",
  },
  description: "Personal portfolio and blog of Marco Haber",
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
          <Background />
          <div className="relative z-10 flex-grow">
            <div className="layout max-w-2xl mx-auto px-5 md:px-0">
              <Header />
              <main className="my-10">{children}</main>
            </div>
          </div>
          <Footer />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
