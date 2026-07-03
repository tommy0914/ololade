# Cyber Glassmorphism Design Refinement Specification

* **Date:** 2026-07-03
* **Status:** Approved
* **Theme:** Cyber Glassmorphism & Diagnostic Precision
* **Accents:** Matrix Green & Cyber Lime

---

## 1. Executive Summary
The goal of this design refinement is to transform the existing multi-brand smartphone repair website into a premium, high-tech, Apple-inspired tech diagnostic laboratory website. By adopting a **Cyber Glassmorphism** theme, the interface will evoke precision engineering, clean room micro-soldering labs, and cutting-edge device diagnostics.

---

## 2. Core Design Tokens (globals.css)

### 2.1 Color Palette
* **Base Background:** `#030712` (Deep Space Slate Black)
* **Secondary Background:** `#090d16` (Deep Tech Gray)
* **Glass Panel Background:** `rgba(10, 15, 26, 0.65)`
* **Primary Accent:** `#39ff14` (Cyber Lime / Terminal Green)
* **Secondary Accent:** `#00e676` (Neon Green / Active Status)
* **Accents (Dimmed):** `rgba(57, 255, 20, 0.3)`
* **Standard Text:** `#f5f5f7` (Apple Silver-Gray)
* **Muted Text:** `#86868b` (Apple Charcoal)
* **Border Color (Standard):** `rgba(255, 255, 255, 0.08)`
* **Border Color (Tech Accent):** `rgba(57, 255, 20, 0.15)`

### 2.2 Glassmorphism & Effects
* **Backdrop Filter Blur:** `blur(24px)`
* **Card Glow Shadow:** `0 0 20px rgba(57, 255, 20, 0.15)`
* **Text Glow Shadow:** `0 0 8px rgba(57, 255, 20, 0.4)`
* **Linear Gradients:**
  * Background glow gradient: radial-gradient at top center, reflecting a green ambient diagnostic light source.
  * Border gradient: linear-gradient of lime to transparent.

### 2.3 Typography
* **Sans Font:** `Inter`, system-ui, BlinkMacSystemFont, sans-serif
* **Monospace Font (Diagnostic details):** `Courier New`, Courier, monospace

---

## 3. UI Component Specifications

### 3.1 Global Navigation Header & Footer
* **Backdrop Blur Navbar:** The navbar is stuck to the top with a `1px` bottom border colored `rgba(57, 255, 20, 0.1)`.
* **Glow Logo:** Logo uses a text-glow effect in green.
* **Frosted Footer:** Glass card style footer containing structured columns, copyright, and subtle green terminal-style symbols.

### 3.2 Hero Banner
* **Animated Tech Grid Background:** A custom grid pattern background with slow moving light blobs.
* **Heading Text:** Uses a gradient from bright white to Cyber Lime.
* **Primary CTA Button:** Pulsing lime-green background button with scale transforms.

### 3.3 Features Grid
* **Translucent Glass Cards:** High blur, inner shadow, and border offset.
* **Hover State:** Elevate `translateY(-4px)` with increased border opacity and a neon glow effect.

### 3.4 Interactive Device Valuation Selector
* **Active Selectors:** The active model button is highlighted with a solid lime border, green shadow, and green text.
* **Diagnostic Screen Container:** The preview image container is styled with diagnostic corner brackets (`::before`/`::after` absolute borders) and a blinking status indicator LED.

### 3.5 See Our Lab Videos Section
* **Grid Layout:** Distinct border frames separating each video.
* **Technician Overlay:** Hovering on a video overlays the technical description in monospace green text with scanline lines.

---

## 4. Implementation Steps
1. **Refine globals.css:** Update all core custom properties, setup animations, background grids, and utility classes.
2. **Update Navbar & Footer:** Update styles to implement the frosted glass bar.
3. **Refine Homepage Layout:** Rewrite `src/app/page.tsx` elements to apply features like tech corner brackets, scanlines, and glow offsets.
4. **Cohesive Layouts across Subpages:** Update About, Services, Pricing, and Booking pages CSS modules to use the CSS variable token names.
