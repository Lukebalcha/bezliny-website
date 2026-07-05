import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Drone Cleaning Services — Façade, Window & Industrial",
  description: "Professional autonomous drone cleaning services for high-rise buildings, glass facades, windows, solar panels, and industrial structures. No scaffolding required. Zero risk. Operating in Warsaw and across Poland.",
  keywords: ["drone cleaning services", "facade cleaning Warsaw", "window cleaning drone", "high-rise cleaning Poland", "commercial building maintenance"],
  openGraph: {
    title: "Drone Cleaning Services | Bezliny",
    description: "Professional autonomous drone cleaning for high-rise buildings. No scaffolding, zero risk, 99.7% precision.",
    url: "https://bezliny.com/services",
  },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
