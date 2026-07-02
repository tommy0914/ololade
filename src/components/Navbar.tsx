"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "./Icons";
import styles from "./Navbar.module.css";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Pricing", href: "/pricing" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.container}>
          <Link href="/" className={styles.logo} onClick={closeMenu}>
            <Image
              src="/logo.jpg"
              alt="Ololade Mobile Tech Logo"
              width={32}
              height={32}
              style={{ borderRadius: "50%", border: "1px solid var(--border-color)" }}
            />
            <span>Ololade Mobile Tech</span>
          </Link>

          <div className={styles.links}>
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`${styles.link} ${isActive ? styles.activeLink : ""}`}
                >
                  {link.name}
                </Link>
              );
            })}
            <Link href="/contact" className="btn-primary" style={{ padding: '6px 16px', fontSize: '12px' }}>
              Book Repair / Swap
            </Link>
          </div>

          <button className={styles.menuButton} onClick={toggleMenu} aria-label="Toggle menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Navigation */}
      {isOpen && (
        <div className={styles.mobileMenu} onClick={closeMenu}>
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`${styles.mobileLink} ${isActive ? styles.mobileActiveLink : ""}`}
              >
                {link.name}
              </Link>
            );
          })}
          <Link
            href="/contact"
            className="btn-primary"
            style={{ width: "100%", textAlign: "center", padding: "14px", marginTop: "24px", fontSize: "16px" }}
          >
            Book Repair Now
          </Link>
        </div>
      )}
    </>
  );
}
