"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ShieldCheck, Cpu, Zap, ArrowRight } from "@/components/Icons";
import styles from "./page.module.css";

const MODELS = [
  {
    id: "iphone15promax",
    name: "iPhone 15 Pro Max",
    imageAlt: "Titanium iPhone 15 Pro Max",
    repairs: [
      { name: "Screen Replacement (OEM Quality)", cost: "$329", type: "screen" },
      { name: "Battery Replacement", cost: "$99", type: "battery" },
      { name: "Back Glass Repair", cost: "$189", type: "back" },
      { name: "Phone Swap / Trade-in Value", cost: "Up to $850", type: "working" },
      { name: "Diagnostics check", cost: "$69", type: "screen" },
    ],
  },
  {
    id: "s24ultra",
    name: "Galaxy S24 Ultra",
    imageAlt: "Titanium Gray Galaxy S24 Ultra",
    repairs: [
      { name: "Screen Replacement (OEM Quality)", cost: "$289", type: "screen" },
      { name: "Battery Replacement", cost: "$89", type: "battery" },
      { name: "Back Glass Repair", cost: "$129", type: "back" },
      { name: "Phone Swap / Trade-in Value", cost: "Up to $780", type: "working" },
      { name: "Diagnostics check", cost: "$59", type: "screen" },
    ],
  },
  {
    id: "pixel8pro",
    name: "Pixel 8 Pro",
    imageAlt: "Obsidian Pixel 8 Pro",
    repairs: [
      { name: "Screen Replacement (OEM Quality)", cost: "$249", type: "screen" },
      { name: "Battery Replacement", cost: "$79", type: "battery" },
      { name: "Back Glass Repair", cost: "$119", type: "back" },
      { name: "Phone Swap / Trade-in Value", cost: "Up to $450", type: "working" },
      { name: "Diagnostics check", cost: "$49", type: "screen" },
    ],
  },
  {
    id: "iphone14pro",
    name: "iPhone 14 Pro",
    imageAlt: "Space Black iPhone 14 Pro",
    repairs: [
      { name: "Screen Replacement (OEM Quality)", cost: "$279", type: "screen" },
      { name: "Battery Replacement", cost: "$89", type: "battery" },
      { name: "Back Glass Repair", cost: "$149", type: "back" },
      { name: "Phone Swap / Trade-in Value", cost: "Up to $620", type: "working" },
      { name: "Diagnostics check", cost: "$59", type: "screen" },
    ],
  },
];

const VIDEOS = [
  {
    src: "/VID-20260702-WA0020.mp4",
    title: "Logic Board Diagnostics",
    desc: "Detailed micro-soldering and trace repair checks under microscope."
  },
  {
    src: "/VID-20260702-WA0021.mp4",
    title: "Screen Calibration & Testing",
    desc: "Testing display touch feedback and TrueTone reprogramming calibration."
  },
  {
    src: "/VID-20260702-WA0022.mp4",
    title: "Battery Health Inspection",
    desc: "Removing damaged cells and swapping in brand new original grade-A cells."
  },
  {
    src: "/VID-20260702-WA0023.mp4",
    title: "Clean Lab Assembly & Swaps",
    desc: "Finalizing device alignment, water-seal gaskets, and quality control."
  }
];

export default function Home() {
  const [selectedModel, setSelectedModel] = useState(MODELS[0]);
  const [activeRepairIndex, setActiveRepairIndex] = useState(0);

  const activeRepair = selectedModel.repairs[activeRepairIndex] || selectedModel.repairs[0];

  // Map transaction types to real user uploaded images
  const getDisplayImage = () => {
    switch (activeRepair.type) {
      case "screen":
        return "/brokenscreen.jpg";
      case "back":
        return "/backbroken.jpg";
      case "battery":
      case "working":
      default:
        return "/working-phone.jpg";
    }
  };

  const getDisplayLabel = () => {
    switch (activeRepair.type) {
      case "screen":
        return "Severe Screen Crack Diagnostic Photo";
      case "back":
        return "Rear Back Glass Crack Diagnostic Photo";
      case "battery":
      case "working":
      default:
        return "Fully Restored Grade-A Working Device";
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section className={`${styles.hero} tech-grid-bg`}>
        <div className={styles.heroBackground} />
        <div className="container animate-fade-in">
          <p className={styles.heroTagline}>Certified Repairs, Sales & Trade-ins</p>
          <h1 className={styles.heroTitle}>
            Your Smart Devices, <span className="text-gradient-green">Upgraded & Restored</span>.
          </h1>
          <p className={styles.heroSubtitle}>
            Premium multi-brand repair (iPhone & Android), certified pre-owned gadget sales, and instant phone swaps. Experience elite tech services built to uncompromising standards.
          </p>
          <div className={styles.heroButtons}>
            <Link href="/contact" className="btn-primary">
              Book a Swap / Repair <ArrowRight size={16} style={{ marginLeft: "8px" }} />
            </Link>
            <Link href="/services" className="btn-secondary">
              Explore Offerings
            </Link>
          </div>
        </div>
      </section>

      {/* Features Grid Section */}
      <section className={styles.featuresSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Precision, Quality & Convenience</h2>
            <p className={styles.sectionSubtitle}>
              Whether fixing, purchasing, or upgrading your gadget, we guarantee premium care.
            </p>
          </div>

          <div className={styles.grid}>
            <div className={`${styles.featureCard} glass-panel`}>
              <div className={styles.iconWrapper}>
                <Cpu size={24} />
              </div>
              <h3 className={styles.cardTitle}>Grade-A Repairs</h3>
              <p className={styles.cardText}>
                We use original-specification screens, cells, and connectors to preserve native performance, color accuracy, and device lifespan.
              </p>
            </div>

            <div className={`${styles.featureCard} glass-panel`}>
              <div className={styles.iconWrapper}>
                <Zap size={24} />
              </div>
              <h3 className={styles.cardTitle}>Instant Phone Swaps</h3>
              <p className={styles.cardText}>
                Ready for an upgrade? Trade in your current phone (iPhone or Android), get an instant evaluation, and top-up to leave with your new gadget.
              </p>
            </div>

            <div className={`${styles.featureCard} glass-panel`}>
              <div className={styles.iconWrapper}>
                <ShieldCheck size={24} />
              </div>
              <h3 className={styles.cardTitle}>Certified Pre-Owned Sales</h3>
              <p className={styles.cardText}>
                Shop fully tested, sanitized, and certified pre-owned iPhones, Androids, and tablets. Backed by our warranty for complete peace of mind.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Device Selector Section */}
      <section className={styles.selectorSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Instant Pricing & Valuation</h2>
            <p className={styles.sectionSubtitle}>
              Select a popular model to see repair rates or estimated trade-in swap valuations.
            </p>
          </div>

          <div className={styles.modelGrid}>
            {MODELS.map((model) => (
              <button
                key={model.id}
                onClick={() => {
                  setSelectedModel(model);
                  setActiveRepairIndex(0); // Reset repair index on model switch
                }}
                className={`${styles.modelCard} ${
                  selectedModel.id === model.id ? styles.modelCardActive : ""
                }`}
              >
                <span className={styles.modelName}>{model.name}</span>
              </button>
            ))}
          </div>

          <div className={styles.detailsWrapper}>
            {/* Real photos display based on dynamic selection */}
            <div className={styles.imagePlaceholder} style={{ background: "none", padding: 0 }}>
              <div className={styles.bracketContainer}>
                <div className={styles.bracketTopLeft}></div>
                <div className={styles.bracketTopRight}></div>
                <div className={styles.bracketBottomLeft}></div>
                <div className={styles.bracketBottomRight}></div>
                <Image
                  src={getDisplayImage()}
                  alt={getDisplayLabel()}
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, 500px"
                  priority
                />
                <div className={styles.visualOverlayContainer}>
                  <span className={styles.diagnosticLabel}>
                    <span className="led-indicator" style={{ marginRight: '6px' }}></span>
                    Visual Condition Check
                  </span>
                  <span className={styles.diagnosticValue}>
                    {getDisplayLabel()}
                  </span>
                </div>
              </div>
            </div>

            <div className={styles.repairList}>
              <h3 className={styles.cardTitle} style={{ marginBottom: "8px" }}>
                Services & Trade values for {selectedModel.name}
              </h3>
              <p style={{ fontSize: "12px", color: "var(--text-secondary)", marginBottom: "16px" }}>
                Hover or click an option below to preview device status conditions:
              </p>
              {selectedModel.repairs.map((repair, i) => (
                <div
                  key={i}
                  className={`${styles.repairItem} ${activeRepairIndex === i ? styles.repairItemActive : ""}`}
                  onMouseEnter={() => setActiveRepairIndex(i)}
                  onClick={() => setActiveRepairIndex(i)}
                  style={{ cursor: "pointer" }}
                >
                  <span className={styles.repairName}>{repair.name}</span>
                  <span className={styles.repairCost}>{repair.cost}</span>
                </div>
              ))}
              <div style={{ marginTop: "16px" }}>
                <Link href="/contact" className="btn-primary" style={{ width: "100%" }}>
                  Inquire / Book This Option
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Videos Section - See Our Lab In Action */}
      <section className={styles.videoSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>See Our Lab In Action</h2>
            <p className={styles.sectionSubtitle}>
              Watch our Apple & Android certified technicians perform precision micro-soldering, battery swaps, and device calibration.
            </p>
          </div>

          <div className={styles.videoGrid}>
            {VIDEOS.map((video, idx) => (
              <div key={idx} className={styles.videoCard}>
                <video
                  className={styles.video}
                  src={video.src}
                  muted
                  loop
                  autoPlay
                  playsInline
                />
                <div className={styles.videoOverlay}>
                  <div className={styles.videoTitle}>{video.title}</div>
                  <div className={styles.videoDesc}>{video.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className="container">
          <div className={styles.ctaBox}>
            <h2 className={styles.ctaTitle}>Upgrade or Restore Your Gadget</h2>
            <p className={styles.ctaText}>
              Find your next device from our certified inventory or swap your current device for a premium upgrade. We offer top valuation rates.
            </p>
            <div style={{ display: "flex", gap: "16px", justifyContent: "center" }}>
              <Link href="/contact" className="btn-primary">
                Book a Device Swap
              </Link>
              <Link href="/pricing" className="btn-secondary" style={{ border: "1px solid var(--accent)", color: "var(--accent)" }}>
                View Full Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
