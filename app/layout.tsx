import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { LangProvider } from "@/lib/LangContext";
import PWARegister from "@/components/PWARegister";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  title: {
    default: "Bezliny | Autonomous Drone Façade Cleaning — Warsaw & Europe",
    template: "%s | Bezliny",
  },
  description: "Europe's leading autonomous drone façade cleaning company. Zero-risk, chemical-free building exterior maintenance for high-rise commercial properties. 99.7% precision. Operating 24/7 in Warsaw and across Poland.",
  keywords: [
    "drone facade cleaning Warsaw",
    "autonomous building cleaning Poland",
    "drone window cleaning Europe",
    "high-rise facade maintenance",
    "commercial building cleaning drone",
    "bezliny drone cleaning",
    "facade cleaning without scaffolding",
    "rope access alternative",
    "building exterior cleaning Warsaw",
    "drone cleaning service Poland",
    "autonomous facade maintenance",
    "high-rise window cleaning drone",
    "industrial drone cleaning",
    "zero-risk building cleaning",
    "eco-friendly facade cleaning",
  ],
  authors: [{ name: "Bezliny", url: "https://bezliny.com" }],
  creator: "Bezliny",
  publisher: "Bezliny",
  metadataBase: new URL("https://bezliny.com"),
  alternates: {
    canonical: "/",
    languages: {
      "en": "/",
      "pl": "/?lang=pl",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: "pl_PL",
    url: "https://bezliny.com",
    siteName: "Bezliny",
    title: "Bezliny | Autonomous Drone Façade Cleaning",
    description: "Europe's leading autonomous drone façade cleaning company. Zero-risk, chemical-free, 99.7% precision. Serving Warsaw and all of Poland.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Bezliny - Autonomous Drone Façade Cleaning",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bezliny | Autonomous Drone Façade Cleaning",
    description: "Zero-risk, chemical-free building exterior maintenance. 99.7% precision drone technology.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // google: "ADD_VERIFICATION_CODE_AFTER_REGISTERING_WITH_GOOGLE_SEARCH_CONSOLE",
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#09090b" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <link rel="apple-touch-icon" href="/icon-192.svg" />
        <link rel="canonical" href="https://bezliny.com" />
        {/* Structured Data - Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Bezliny",
              url: "https://bezliny.com",
              logo: "https://bezliny.com/icon-192.svg",
              description: "Europe's leading autonomous drone façade cleaning company",
              foundingDate: "2024",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Warsaw",
                addressCountry: "PL",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+48-579-366-868",
                contactType: "sales",
                email: "contact@bezliny.com",
                availableLanguage: ["English", "Polish"],
              },
              sameAs: [],
              areaServed: {
                "@type": "GeoCircle",
                geoMidpoint: {
                  "@type": "GeoCoordinates",
                  latitude: 52.2297,
                  longitude: 21.0122,
                },
                geoRadius: "500000",
              },
            }),
          }}
        />
        {/* Structured Data - Local Business */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "https://bezliny.com/#business",
              name: "Bezliny - Drone Façade Cleaning",
              image: "https://bezliny.com/og-image.png",
              telephone: "+48579366868",
              email: "contact@bezliny.com",
              url: "https://bezliny.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Warsaw",
                addressLocality: "Warsaw",
                addressRegion: "Mazovia",
                postalCode: "00-001",
                addressCountry: "PL",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 52.2297,
                longitude: 21.0122,
              },
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                opens: "00:00",
                closes: "23:59",
              },
              priceRange: "$$$$",
              serviceArea: {
                "@type": "GeoCircle",
                geoMidpoint: { "@type": "GeoCoordinates", latitude: 52.2297, longitude: 21.0122 },
                geoRadius: "100000",
              },
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Drone Cleaning Services",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Autonomous Drone Façade Cleaning",
                      description: "High-rise building exterior cleaning using autonomous drones. Zero scaffolding, zero risk to personnel.",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Drone Window Cleaning",
                      description: "Precision window cleaning for commercial high-rises using AI-guided drone technology.",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Building Inspection & Survey",
                      description: "Automated aerial inspection and condition assessment of building facades.",
                    },
                  },
                ],
              },
            }),
          }}
        />
        {/* Structured Data - Service */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              name: "Autonomous Drone Façade Cleaning",
              provider: {
                "@type": "Organization",
                name: "Bezliny",
              },
              serviceType: "Building Exterior Cleaning",
              areaServed: {
                "@type": "Country",
                name: "Poland",
              },
              description: "Revolutionary autonomous drone technology for high-rise façade cleaning. No scaffolding, no rope access, no chemicals. 99.7% precision coverage with zero risk to human personnel.",
              offers: {
                "@type": "Offer",
                availability: "https://schema.org/InStock",
                priceSpecification: {
                  "@type": "PriceSpecification",
                  priceCurrency: "PLN",
                },
              },
            }),
          }}
        />
      </head>
      <body className="bg-[#09090b] text-white font-sans antialiased grain">
        <LangProvider>
          <PWARegister />
          {children}
        </LangProvider>
      </body>
    </html>
  );
}
