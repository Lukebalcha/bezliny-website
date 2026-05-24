import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Enterprise & Investment — Scale With Us",
  description: "Bezliny is scaling autonomous drone façade cleaning across Europe. Strategic partnership and investment opportunities for visionary capital.",
  keywords: ["drone cleaning investment", "autonomous cleaning startup", "prop-tech investment Poland", "building maintenance technology"],
};

export default function InvestorsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
