import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Bezliny — Engineering the Future of Building Maintenance",
  description: "Bezliny is Europe's leading autonomous drone façade cleaning company. Founded in Warsaw, we're revolutionizing how the world maintains its buildings — zero risk, zero chemicals, maximum precision.",
  keywords: ["about bezliny", "drone cleaning company Poland", "autonomous cleaning technology", "facade maintenance innovation"],
  openGraph: {
    title: "About Bezliny | Autonomous Drone Technology",
    description: "Europe's leading autonomous drone façade cleaning company. Engineering the future of building maintenance.",
    url: "https://bezliny.com/about",
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
