import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock } from "./Icons";
import styles from "./Footer.module.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.brandColumn}>
            <div className={styles.logo}>
              <Image
                src="/logo.jpg"
                alt="Ololade Mobile Tech Logo"
                width={36}
                height={36}
                style={{ borderRadius: "50%", border: "1px solid var(--border-color)" }}
              />
              <span>Ololade Mobile Tech</span>
            </div>
            <p className={styles.description}>
              Premium multi-device care and trade center. We fix screens, swap phones, sell certified pre-owned gadgets, and buy used tech at industry-leading values.
            </p>
          </div>

          <div>
            <h3 className={styles.title}>Explore</h3>
            <ul className={styles.list}>
              <li><Link href="/" className={styles.link}>Home</Link></li>
              <li><Link href="/about" className={styles.link}>About Us</Link></li>
              <li><Link href="/services" className={styles.link}>Services</Link></li>
              <li><Link href="/pricing" className={styles.link}>Pricing</Link></li>
              <li><Link href="/contact" className={styles.link}>Book Service</Link></li>
            </ul>
          </div>

          <div>
            <h3 className={styles.title}>Services</h3>
            <ul className={styles.list}>
              <li><Link href="/services" className={styles.link}>Screen Replacement</Link></li>
              <li><Link href="/services" className={styles.link}>Battery Health</Link></li>
              <li><Link href="/services" className={styles.link}>Device Swapping</Link></li>
              <li><Link href="/services" className={styles.link}>Certified Gadget Sales</Link></li>
              <li><Link href="/services" className={styles.link}>Logic Board Repair</Link></li>
            </ul>
          </div>

          <div>
            <h3 className={styles.title}>Contact & Hours</h3>
            <ul className={styles.infoList}>
              <li className={styles.infoItem}>
                <Phone size={16} className={styles.infoIcon} />
                <span>07071039523</span>
              </li>
              <li className={styles.infoItem}>
                <Mail size={16} className={styles.infoIcon} />
                <span>support@ololademobiletech.com</span>
              </li>
              <li className={styles.infoItem}>
                <MapPin size={16} className={styles.infoIcon} />
                <span>Second Awa Hostel, Opposite Emily Hostel, Under G</span>
              </li>
              <li className={styles.infoItem}>
                <Clock size={16} className={styles.infoIcon} />
                <span>
                  Mon - Fri: 8:00 AM - 7:00 PM<br />
                  Sat: 10:00 AM - 4:00 PM<br />
                  Sun: Closed
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>&copy; {currentYear} Ololade Mobile Tech. All rights reserved.</p>
          <div className={styles.bottomLinks}>
            <Link href="/" className={styles.link}>Privacy Policy</Link>
            <Link href="/" className={styles.link}>Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
