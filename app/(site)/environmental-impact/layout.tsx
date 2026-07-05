import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Environmental Impact — Chemical-Free, Carbon-Neutral Cleaning",
  description: "Bezliny's drone cleaning technology uses zero chemicals, recycles 90% of water, and operates carbon-neutral. Every building we clean is a step toward sustainable infrastructure.",
  keywords: ["eco-friendly building cleaning", "chemical-free facade maintenance", "sustainable drone cleaning", "green building services Poland", "carbon neutral cleaning"],
};

export default function EnvironmentalLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
