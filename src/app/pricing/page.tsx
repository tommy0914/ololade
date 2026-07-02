"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { ShieldCheck } from "@/components/Icons";
import styles from "./pricing.module.css";

const MODELS = [
  "iPhone 15 Pro Max",
  "iPhone 15 Pro",
  "Galaxy S24 Ultra",
  "Galaxy S23 Ultra",
  "Pixel 8 Pro",
  "Pixel 7 Pro",
  "iPhone 14 Pro Max",
  "iPhone 14 Pro",
  "iPhone 13 Pro Max",
  "iPhone 13",
];

const REPAIRS = [
  { id: "screen", name: "Screen Replacement (OEM Quality)" },
  { id: "battery", name: "Battery Replacement" },
  { id: "backglass", name: "Rear Glass Repair" },
  { id: "charging", name: "Charging Port Fix" },
  { id: "diagnostics", name: "Diagnostics Review" },
  { id: "swap", name: "Swap / Trade-in Valuation (Up to)" },
];

const PRICING_DATABASE: Record<string, Record<string, number>> = {
  "iPhone 15 Pro Max": { screen: 329, battery: 99, backglass: 189, charging: 99, diagnostics: 69, swap: 850 },
  "iPhone 15 Pro": { screen: 299, battery: 99, backglass: 169, charging: 89, diagnostics: 69, swap: 750 },
  "Galaxy S24 Ultra": { screen: 289, battery: 89, backglass: 129, charging: 89, diagnostics: 59, swap: 780 },
  "Galaxy S23 Ultra": { screen: 249, battery: 89, backglass: 119, charging: 79, diagnostics: 59, swap: 580 },
  "Pixel 8 Pro": { screen: 249, battery: 79, backglass: 119, charging: 69, diagnostics: 49, swap: 450 },
  "Pixel 7 Pro": { screen: 219, battery: 79, backglass: 99, charging: 59, diagnostics: 49, swap: 300 },
  "iPhone 14 Pro Max": { screen: 299, battery: 89, backglass: 169, charging: 89, diagnostics: 59, swap: 680 },
  "iPhone 14 Pro": { screen: 279, battery: 89, backglass: 149, charging: 79, diagnostics: 59, swap: 620 },
  "iPhone 13 Pro Max": { screen: 269, battery: 79, backglass: 139, charging: 79, diagnostics: 49, swap: 480 },
  "iPhone 13": { screen: 199, battery: 79, backglass: 99, charging: 69, diagnostics: 49, swap: 350 },
};

export default function Pricing() {
  const [calcModel, setCalcModel] = useState(MODELS[0]);
  const [calcRepair, setCalcRepair] = useState(REPAIRS[0].id);
  const [searchQuery, setSearchQuery] = useState("");

  const calculatedPrice = useMemo(() => {
    return PRICING_DATABASE[calcModel]?.[calcRepair] || 0;
  }, [calcModel, calcRepair]);

  const filteredModels = useMemo(() => {
    return MODELS.filter((model) =>
      model.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  const isSwap = calcRepair === "swap";

  return (
    <div>
      {/* Header */}
      <section className={styles.headerSection}>
        <div className="container">
          <h1 className={styles.title}>Repairs & Trade-in Valuations</h1>
          <p className={styles.subtitle}>
            Upfront, transparent pricing catalog. Check screen, battery, and board repairs or see how much credit you can get by swapping your device.
          </p>
        </div>
      </section>

      <section className={styles.pricingSection}>
        <div className="container">
          {/* Calculator Card */}
          <div className={`${styles.calculatorCard} glass-panel`}>
            <div className={styles.calcGrid}>
              <div className={styles.selectGroup}>
                <h3 className={styles.label}>1. Select Your Device</h3>
                <select
                  value={calcModel}
                  onChange={(e) => setCalcModel(e.target.value)}
                  className={styles.select}
                >
                  {MODELS.map((model) => (
                    <option key={model} value={model}>
                      {model}
                    </option>
                  ))}
                </select>

                <h3 className={styles.label} style={{ marginTop: "12px" }}>
                  2. Select Transaction Type
                </h3>
                <select
                  value={calcRepair}
                  onChange={(e) => setCalcRepair(e.target.value)}
                  className={styles.select}
                >
                  {REPAIRS.map((rep) => (
                    <option key={rep.id} value={rep.id}>
                      {rep.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className={styles.estimateCard}>
                <div>
                  <span className={styles.estimateTitle}>
                    {isSwap ? "Max Swap Credit" : "Estimated Cost"}
                  </span>
                  <div className={styles.price}>${calculatedPrice}</div>
                  <div
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "8px",
                      fontSize: "13px",
                      color: "var(--success)",
                    }}
                  >
                    <ShieldCheck size={16} />
                    <span>{isSwap ? "Immediate Trade-in Credit" : "Warranty and Calibration Included"}</span>
                  </div>
                </div>

                <div style={{ marginTop: "24px" }}>
                  <Link
                    href={`/contact?model=${encodeURIComponent(
                      calcModel
                    )}&repair=${encodeURIComponent(calcRepair)}`}
                    className="btn-primary"
                    style={{ width: "100%", padding: "12px" }}
                  >
                    {isSwap ? "Request Device Swap Offer" : "Book This Estimate"}
                  </Link>
                  <p className={styles.disclaimer}>
                    {isSwap
                      ? "Swap credit is subject to screen scratches, battery health, and functional checks upon drop-off."
                      : "Estimates include parts and assembly. Multi-repair discounts are calculated during physical diagnostics."}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Pricing Table Section */}
          <div className={styles.tableSection}>
            <div className={styles.tableHeader}>
              <h2 className={styles.label} style={{ fontSize: "18px" }}>
                Full Pricing & Valuation Matrix
              </h2>
              <input
                type="text"
                placeholder="Search device model..."
                className={styles.searchBar}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <div className={styles.tableWrapper}>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th className={styles.th}>Model</th>
                    <th className={styles.th}>Screen Swap</th>
                    <th className={styles.th}>Battery Swap</th>
                    <th className={styles.th}>Back Glass</th>
                    <th className={styles.th}>Port Repair</th>
                    <th className={styles.th}>Trade Value (Up to)</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredModels.map((model) => {
                    const prices = PRICING_DATABASE[model];
                    return (
                      <tr key={model} className={styles.tr}>
                        <td className={styles.td} style={{ fontWeight: 600, color: "var(--text-white)" }}>
                          {model}
                        </td>
                        <td className={styles.td}>${prices?.screen}</td>
                        <td className={styles.td}>${prices?.battery}</td>
                        <td className={styles.td}>${prices?.backglass}</td>
                        <td className={styles.td}>${prices?.charging}</td>
                        <td className={styles.td} style={{ color: "var(--success)", fontWeight: "600" }}>
                          ${prices?.swap}
                        </td>
                      </tr>
                    );
                  })}
                  {filteredModels.length === 0 && (
                    <tr>
                      <td colSpan={6} className={styles.td} style={{ textAlign: "center", padding: "32px" }}>
                        No models found matching your search. Contact us for custom Android/iOS swap or repair quotes.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
