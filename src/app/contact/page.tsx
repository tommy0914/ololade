"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Phone, Mail, MapPin, Clock, CheckCircle } from "@/components/Icons";
import styles from "./contact.module.css";

const MODELS = [
  "iPhone 15 Pro Max",
  "iPhone 15 Pro",
  "Galaxy S24 Ultra",
  "Galaxy S23 Ultra",
  "Pixel 8 Pro",
  "Pixel 7 Pro",
  "iPhone 14 Pro",
  "iPad / Tablet",
  "MacBook / Laptop",
  "Other / Not Sure",
];

const REPAIRS = [
  { id: "screen", name: "Screen Replacement" },
  { id: "battery", name: "Battery Replacement" },
  { id: "backglass", name: "Rear Glass Repair" },
  { id: "charging", name: "Charging Port Fix" },
  { id: "diagnostics", name: "Diagnostics Review" },
  { id: "swap", name: "Device Swap / Trade-in Quote" },
  { id: "purchase", name: "Buy Refurbished Gadget" },
  { id: "other", name: "Other Issue" },
];

function BookingForm() {
  const searchParams = useSearchParams();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    model: MODELS[0],
    repair: REPAIRS[0].id,
    notes: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [whatsappUrl, setWhatsappUrl] = useState("");

  useEffect(() => {
    const modelParam = searchParams.get("model");
    const repairParam = searchParams.get("repair");

    if (modelParam && MODELS.includes(modelParam)) {
      setFormData((prev) => ({ ...prev, model: modelParam }));
    }
    if (repairParam && REPAIRS.some((r) => r.id === repairParam)) {
      setFormData((prev) => ({ ...prev, repair: repairParam }));
    }
  }, [searchParams]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const repairItem = REPAIRS.find((r) => r.id === formData.repair);
    const inquiryType = repairItem ? repairItem.name : formData.repair;
    const message = `*New Service Booking / Quote Request*

*Name:* ${formData.name}
*Email:* ${formData.email}
*Device:* ${formData.model}
*Inquiry Type:* ${inquiryType}
*Details/Notes:* ${formData.notes}`;

    const url = `https://wa.me/2347071039523?text=${encodeURIComponent(message)}`;
    setWhatsappUrl(url);
    setSubmitted(true);
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const isSwapTransaction = formData.repair === "swap";
  const isPurchaseTransaction = formData.repair === "purchase";

  return (
    <div className={`${styles.formCard} glass-panel`}>
      <h2 className={styles.formTitle}>Book Service / Request Quote</h2>
      {submitted ? (
        <div className={styles.successMessage}>
          <CheckCircle size={24} style={{ flexShrink: 0 }} />
          <div>
            <strong style={{ display: "block", marginBottom: "4px" }}>Request Initiated!</strong>
            We have opened WhatsApp to send your service request. If the chat did not open automatically, please <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "underline", color: "var(--accent)" }}>click here to open WhatsApp manually</a>.
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className={styles.row}>
            <div className={styles.formGroup}>
              <label className={styles.label}>Your Name</label>
              <input
                type="text"
                required
                className={styles.input}
                placeholder="John Doe"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label}>Email Address</label>
              <input
                type="email"
                required
                className={styles.input}
                placeholder="john@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.formGroup}>
              <label className={styles.label}>
                {isPurchaseTransaction ? "Model to Purchase" : "Your Device Model"}
              </label>
              <select
                className={styles.select}
                value={formData.model}
                onChange={(e) => setFormData({ ...formData, model: e.target.value })}
              >
                {MODELS.map((m) => (
                  <option key={m} value={m}>
                    {m}
                  </option>
                ))}
              </select>
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label}>Inquiry Type</label>
              <select
                className={styles.select}
                value={formData.repair}
                onChange={(e) => setFormData({ ...formData, repair: e.target.value })}
              >
                {REPAIRS.map((r) => (
                  <option key={r.id} value={r.id}>
                    {r.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>
              {isSwapTransaction
                ? "Describe condition of phone to swap (Scratches, faults, storage size, carrier lock)..."
                : isPurchaseTransaction
                ? "Specify model preferences, budget, or items you wish to buy..."
                : "Describe device issue or details for booking..."}
            </label>
            <textarea
              className={styles.textarea}
              placeholder={
                isSwapTransaction
                  ? "e.g., iPhone 13 128GB, fully functional display, minor rear scratches, battery health 82%..."
                  : isPurchaseTransaction
                  ? "e.g., Looking for a refurbished S23 Ultra 256GB in pristine condition, under $500..."
                  : "Please detail symptoms, drop-off time, or general questions..."
              }
              value={formData.notes}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
            />
          </div>

          <button type="submit" className="btn-primary" style={{ width: "100%", padding: "14px" }}>
            {isSwapTransaction
              ? "Request Trade-in Appraisal"
              : isPurchaseTransaction
              ? "Submit Inventory Inquiry"
              : "Book Repair Appointment"}
          </button>
        </form>
      )}
    </div>
  );
}

export default function Contact() {
  return (
    <div>
      {/* Header */}
      <section className={styles.headerSection}>
        <div className="container">
          <h1 className={styles.title}>Repairs, Trade-Ins & Sales</h1>
          <p className={styles.subtitle}>
            Book a same-day diagnostic fix, request an instant phone swap value appraisal, or inquire about pre-owned stock availability.
          </p>
        </div>
      </section>

      {/* Main Grid */}
      <section className={styles.contactSection}>
        <div className="container">
          <div className={styles.grid}>
            {/* Booking Form Wrap */}
            <Suspense fallback={<div className="glass-panel" style={{ padding: "40px", textAlign: "center" }}>Loading form categories...</div>}>
              <BookingForm />
            </Suspense>

            {/* Info Column */}
            <div className={styles.infoCol}>
              <div className={styles.infoBlock}>
                <h3 className={styles.blockTitle}>Direct Assistance</h3>
                <div className={styles.blockContent} style={{ display: "flex", flexDirection: "column", gap: "12px", marginTop: "8px" }}>
                  <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                    <Phone size={18} style={{ color: "var(--accent)" }} />
                    <span>07071039523</span>
                  </div>
                  <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                    <Mail size={18} style={{ color: "var(--accent)" }} />
                    <span>support@ololademobiletech.com</span>
                  </div>
                </div>
              </div>

              <div className={styles.infoBlock}>
                <h3 className={styles.blockTitle}>Location & Hours</h3>
                <div className={styles.blockContent} style={{ display: "flex", gap: "10px", marginTop: "8px" }}>
                  <MapPin size={18} style={{ color: "var(--accent)", flexShrink: 0 }} />
                  <span>
                    Second Awa Hostel, <br />
                    Opposite Emily Hostel, Under G
                  </span>
                </div>
                <div className={styles.blockContent} style={{ display: "flex", gap: "10px", marginTop: "8px" }}>
                  <Clock size={18} style={{ color: "var(--accent)", flexShrink: 0 }} />
                  <span>
                    Mon - Fri: 8:00 AM - 7:00 PM<br />
                    Sat: 10:00 AM - 4:00 PM<br />
                    Sun: Closed
                  </span>
                </div>
              </div>

              {/* Map Mockup */}
              <div className={styles.mapPlaceholder}>
                <div style={{ textAlign: "center" }}>
                  <MapPin size={32} style={{ color: "var(--accent)", marginBottom: "8px" }} />
                  <span>Map: Cupertino Smart Device Lab</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
