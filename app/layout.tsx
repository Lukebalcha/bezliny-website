import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { LangProvider } from "@/lib/LangContext";
import PWARegister from "@/components/PWARegister";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  title: "Bezliny | Industrial Drone Technology",
  description: "Global leader in drone-based cleaning, inspection, and surface treatment for high-rise facades, bridges, oil platforms, and industrial infrastructure.",
  keywords: "drone cleaning, facade cleaning, industrial drone, inspection, surface treatment, Bezliny",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#10b981" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <link rel="apple-touch-icon" href="/icon-192.svg" />
      </head>
      <body className="bg-[#09090b] text-white font-sans antialiased grain">
        <LangProvider>
          <PWARegister />
          {children}
        </LangProvider>
      </body>
    </html>
  );
}
