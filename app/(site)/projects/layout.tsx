import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects — Industrial Drone Cleaning Portfolio",
  description: "See Bezliny's autonomous drone cleaning in action. Real footage of JTC-10 drones cleaning high-rise facades, glass towers, and industrial structures across Warsaw and Poland.",
  keywords: ["drone cleaning projects", "facade cleaning portfolio", "drone cleaning video", "building cleaning results Warsaw"],
  openGraph: {
    title: "Projects | Bezliny",
    description: "Watch autonomous drones clean high-rise buildings. Real project footage from Warsaw.",
  },
};

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
