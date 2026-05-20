import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CursorFollower from "@/components/CursorFollower";
import PageLoader from "@/components/PageLoader";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
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
      <body className="bg-[#09090b] text-white font-sans antialiased grain">
        <PageLoader />
        <CursorFollower />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
