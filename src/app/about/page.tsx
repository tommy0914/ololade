import Link from "next/link";
import { Star, ShieldCheck, Tool } from "@/components/Icons";
import styles from "./about.module.css";

export const metadata = {
  title: "About Us | iFix Pro - Certified iPhone Technicians",
  description: "Learn about the craftsmanship, values, and experience of the Apple-certified specialists at iFix Pro. We specialize in microsoldering and precision iPhone screen/battery repairs.",
};

export default function About() {
  return (
    <div>
      {/* Header */}
      <section className={styles.headerSection}>
        <div className="container">
          <h1 className={styles.title}>The Craft Behind the Restoration</h1>
          <p className={styles.subtitle}>
            A passion for Apple engineering, combined with advanced diagnostic expertise, dedicated to extending the lifetime of your iPhone.
          </p>
        </div>
      </section>

      {/* Story Grid */}
      <section className={styles.storySection}>
        <div className="container">
          <div className={styles.grid}>
            <div className={styles.contentCol}>
              <h2 className={styles.sectionHeader}>Our Journey & Standards</h2>
              <p className={styles.text}>
                Founded by an Apple-certified technician, iFix Pro was established to fill a crucial gap: providing the uncompromising precision of Apple Store service, without the premium price tags or weeks of waiting.
              </p>
              
              <p className={styles.highlightText}>
                "We don't just swap parts. We inspect logic boards under digital microscopes, measure voltage rails, and align gaskets to ensure the original water resistance is maintained."
              </p>

              <p className={styles.text}>
                Whether it is a simple screen replacement or advanced micro-soldering on a logic board that won't boot, we treat every device like it's our own. We use specialized, ESD-safe workstations and calibration equipment to guarantee factory specifications.
              </p>

              <div className={styles.statsGrid}>
                <div className={`${styles.statCard} glass-panel`}>
                  <div className={styles.statNumber}>10k+</div>
                  <div className={styles.statLabel}>Devices Fixed</div>
                </div>
                <div className={`${styles.statCard} glass-panel`}>
                  <div className={styles.statNumber}>99.4%</div>
                  <div className={styles.statLabel}>Success Rate</div>
                </div>
                <div className={`${styles.statCard} glass-panel`}>
                  <div className={styles.statNumber}>5-Star</div>
                  <div className={styles.statLabel}>Average Rating</div>
                </div>
              </div>
            </div>

            <div className={styles.imagePlaceholder}>
              <div className={styles.badge}>
                <ShieldCheck size={16} />
                <span>Certified Technician</span>
              </div>
              <Tool size={48} style={{ color: "var(--accent)", margin: "16px 0" }} />
              <h3 className={styles.cardTitle} style={{ color: "var(--text-white)" }}>
                State-of-the-Art Repair Lab
              </h3>
              <p className={styles.cardText}>
                Equipped with thermal cameras for detecting short circuits, micro-soldering stations, and vacuum press laminators for seamless screen bonding.
              </p>
              <div style={{ display: "flex", gap: "8px", marginTop: "16px" }}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} style={{ color: "var(--warning)", fill: "var(--warning)" }} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
