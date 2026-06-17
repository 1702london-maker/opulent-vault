import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AIConciergeWidget from "@/components/AIConciergeWidget";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Opulent Vault | Excellence in Luxury Living",
  description:
    "Opulent Vault curates the world's finest luxury properties, chauffeur services, private aviation, security, and bespoke concierge experiences across the UK and Europe.",
  keywords: ["luxury properties", "private jet", "chauffeur", "concierge", "OPV"],
  openGraph: {
    title: "Opulent Vault",
    description: "Excellence in Luxury Living",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} scroll-smooth`}>
      <body className="bg-surface text-on-surface font-sans antialiased overflow-x-hidden">
        {/* Material Symbols loaded via globals.css @import */}
        <Header />
        <main>{children}</main>
        <Footer />
        <AIConciergeWidget />
      </body>
    </html>
  );
}
