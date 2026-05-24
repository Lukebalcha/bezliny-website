import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Safety & Compliance — Zero Risk Operations",
  description: "Bezliny operates with the highest safety standards in the industry. PANSA registered, ULC certified, EASA compliant, CE marked, ISO 14001 certified. Zero incidents. Zero risk to personnel.",
  keywords: ["drone safety certification", "EASA compliant drone cleaning", "PANSA registered drone", "facade cleaning safety", "zero risk building maintenance"],
};

export default function SafetyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
