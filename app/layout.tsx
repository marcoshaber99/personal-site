import { Analytics } from "@vercel/analytics/react";
import type { Metadata, Viewport } from "next";
import "./globals.css";
import "./prism-theme.css";
import { ThemeProvider } from "@/providers/theme-provider";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { ppEditorialNew, calSans } from "@/lib/fonts";
import { Header } from "@/components/header";
import Footer from "@/components/footer";
import { Background } from "@/components/bg-gradient";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.marcohaber.dev"),
  title: {
    default: "Marco Haber - Portfolio",
    template: "%s | Marco Haber",
  },
  description: "Personal portfolio and blog of Marco Haber",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.marcohaber.dev",
    siteName: "Marco Haber",
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable} ${ppEditorialNew.variable} ${calSans.variable} font-sans scroll-smooth`}
    >
      <body className="flex flex-col min-h-screen antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <Background />
          <div className="relative z-10 flex-grow">
            <div className="mx-auto max-w-4xl px-6 py-8 sm:px-8">
              <Header />
              <main>{children}</main>
            </div>
          </div>
          <Footer />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
