import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us — Get a Free Assessment",
  description: "Request a free building assessment from Bezliny. Our drone cleaning experts will evaluate your property and provide a custom solution. 24h response guaranteed.",
  keywords: ["contact bezliny", "drone cleaning quote", "facade cleaning assessment Warsaw", "building cleaning consultation"],
  openGraph: {
    title: "Contact Bezliny | Free Building Assessment",
    description: "Get a free assessment for your building. Our team responds within 24 hours.",
    url: "https://bezliny.com/contact",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
