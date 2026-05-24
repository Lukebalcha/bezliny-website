import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Brand Guidelines — Standards & Policy",
  description: "Bezliny brand guidelines, operational standards, and partnership policies. Strict adherence to quality, safety, and environmental protocols.",
};

export default function BrandLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
