import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Ololade Mobile Tech | Premium Phone Repair, Gadget Sales & Swapping",
  description: "Certified iPhone & Android repair specialists. We specialize in screen replacement, battery health, certified pre-owned gadget sales, and instant phone swapping/trade-ins with top-up values and warranty.",
  keywords: ["Phone Repair", "iPhone Repair", "Android Repair", "Samsung Repair", "Pixel Repair", "Phone Swapping", "Device Trade-in", "Gadget Sales", "Ololade Mobile Tech"],
  openGraph: {
    title: "Ololade Mobile Tech | Premium Phone Repair, Gadget Sales & Swapping",
    description: "Certified iPhone & Android repairs, pre-owned gadget sales, and fast phone swapping with warranty.",
    type: "website",
  },
};

export default function RootLayout({
  children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <html lang="en">
        <body>
          <Navbar />
          <main style={{ paddingTop: 'var(--nav-height)' }}>{children}</main>
          <Footer />
        </body>
      </html>
    );
}
