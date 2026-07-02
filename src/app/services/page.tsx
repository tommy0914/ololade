import Link from "next/link";
import { Smartphone, Zap, Tool, Clock, Check, Star, ShieldCheck } from "@/components/Icons";
import styles from "./services.module.css";

export const metadata = {
  title: "Services | Repairs, Device Swaps, Pre-Owned Sales | iFix Pro",
  description: "Explore our expert solutions: screen & battery replacements for iPhone & Android, certified pre-owned gadget sales, and instant phone swapping trade-ins.",
};

const SERVICES = [
  {
    title: "Screen & Display Calibration",
    description: "Flawless touch response, color precision, and refresh rates. We program and calibrate replacement display panels to preserve native features (like TrueTone and Adaptive Refresh) on iPhone, Samsung Galaxy, and Google Pixel.",
    icon: <Smartphone size={24} />,
    features: [
      "TrueTone & Refresh rate reprogramming",
      "AMOLED, OLED & Super Retina XDR compatibility",
      "FaceID / In-display fingerprint alignment",
      "Scratch-resistant glass with high-grade oleophobic coat",
    ],
    time: "30 - 45 Minutes",
    price: "From $99",
  },
  {
    title: "Battery Health Restoration",
    description: "Reclaim peak daily battery life and safety. We install high-density, zero-cycle power cells tested for heat management and energy retention across all smartphones and tablets.",
    icon: <Zap size={24} />,
    features: [
      "Grade-A high-density cells",
      "Thermal runaway & overcharge safeguards",
      "Battery controller health calibration",
      "Sourced to match or exceed factory capacity",
    ],
    time: "20 - 30 Minutes",
    price: "From $59",
  },
  {
    title: "Instant Device Swapping",
    description: "Ready for an upgrade or want to trade in a faulty phone? Walk in with your current device (iPhone or Android), get an instant evaluation, and swap/top-up for an upgrade in minutes.",
    icon: <Tool size={24} />,
    features: [
      "Fair, transparent market-rate valuation",
      "Accepting both fully operational and damaged units",
      "Secure data wiping & device transferring help",
      "Instant top-up and walk-out upgrades",
    ],
    time: "15 - 20 Minutes Evaluation",
    price: "Top-up values vary",
  },
  {
    title: "Certified Pre-Owned Gadgets",
    description: "Purchase premium pre-owned smartphones, tablets, and smartwatches. Every device undergoes a strict 40-point hardware & software inspection and is backed by warranty.",
    icon: <ShieldCheck size={24} />,
    features: [
      "Strict 40-point system & battery diagnostics",
      "Sanitized and cosmetically pristine grading",
      "100% unlocked for any network carrier",
      "Included 6-month functionality warranty",
    ],
    time: "Instantly Available",
    price: "Contact for stock list",
  },
  {
    title: "Microsoldering & Logic Board",
    description: "Advanced repairs for issues like non-booting, charging faults, audio IC failures, and display glitches. We swap chips and traces under microscope.",
    icon: <Clock size={24} />,
    features: [
      "Audio IC, Touch IC, and power IC replacement",
      "FPC connector and board trace repair",
      "Thermal imaging short-circuit tracking",
      "Data retrieval from severely damaged motherboards",
    ],
    time: "1 - 3 Business Days",
    price: "From $129",
  },
  {
    title: "Liquid Damage Diagnostics",
    description: "Dropped your gadget? Our ultrasonic cleaning tanks and chemical solvent baths dry out and clean logic board corrosion before permanent damage occurs.",
    icon: <Star size={24} />,
    features: [
      "Chemical ultrasonic logic board sweep",
      "Complete corrosion inspection and removal",
      "Under-microscope circuit pathway testing",
      "Highly successful boot recovery rate",
    ],
    time: "24 - 48 Hours",
    price: "From $69",
  },
];

export default function Services() {
  return (
    <div>
      {/* Header */}
      <section className={styles.headerSection}>
        <div className="container">
          <h1 className={styles.title}>Repairs, Trade-Ins & Premium Gadget Sales</h1>
          <p className={styles.subtitle}>
            From screen replacements and motherboard microsoldering to certified pre-owned sales and quick device swaps.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className={styles.servicesSection}>
        <div className="container">
          <div className={styles.grid}>
            {SERVICES.map((service, index) => (
              <div key={index} className={`${styles.serviceCard} glass-panel`}>
                <div className={styles.iconHeader}>
                  <div className={styles.iconWrapper}>{service.icon}</div>
                  <h2 className={styles.cardTitle}>{service.title}</h2>
                </div>
                
                <p className={styles.cardText}>{service.description}</p>
                
                <ul className={styles.pointsList}>
                  {service.features.map((feat, i) => (
                    <li key={i} className={styles.pointItem}>
                      <Check size={16} className={styles.pointIcon} />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                <div className={styles.metaInfo}>
                  <span>Process Time: <strong>{service.time}</strong></span>
                  <span className={styles.priceHighlight}>{service.price}</span>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: "32px" }}>
            <Link href="/contact" className="btn-primary" style={{ padding: "14px 32px", fontSize: "16px" }}>
              Request Trade-in Value or Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
