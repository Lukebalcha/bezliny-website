import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Technology — AI-Powered Drone Cleaning Platform",
  description: "Our autonomous drone platform combines AI pathfinding, LiDAR mapping, high-pressure nozzle arrays, and real-time quality control. 150m altitude capability, 360° coverage, 99.7% precision.",
  keywords: ["drone cleaning technology", "AI facade cleaning", "autonomous building maintenance", "LiDAR drone mapping", "drone cleaning platform"],
  openGraph: {
    title: "Technology | Bezliny Drone Platform",
    description: "AI-powered autonomous drone platform for facade cleaning. LiDAR mapping, 99.7% precision, 150m altitude.",
    url: "https://bezliny.com/technology",
  },
};

export default function TechnologyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
