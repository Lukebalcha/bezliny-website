import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Government & Municipal Services — Smart City Drone Cleaning",
  description: "Autonomous drone façade cleaning for government buildings, public infrastructure, and municipal properties. Reduce maintenance costs by 60% with zero-risk drone technology.",
  keywords: ["government building cleaning", "municipal facade maintenance", "smart city drone", "public building cleaning Poland"],
  openGraph: {
    title: "Government Services | Bezliny",
    description: "Smart city drone cleaning for government and municipal buildings in Poland.",
  },
};

export default function GovernmentLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
