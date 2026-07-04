# Cyber Glassmorphism Design Refinement Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Refine the design of the iPhone/Android repair website to implement a Cyber Glassmorphism theme using Matrix Green & Cyber Lime accents.

**Architecture:** Update variables at the `:root` level in `globals.css` to centralize the color scheme, borders, glows, and keyframe animations. Apply these theme variables across page and component module CSS files, ensuring seamless responsiveness and zero hardcoded style values.

**Tech Stack:** Next.js 16.2.10, React 19.2.4, Vanilla CSS Modules

---

### Task 1: Update globals.css with Cyber Glassmorphic Tokens

**Files:**
- Modify: `src/app/globals.css`

- [x] **Step 1: Replace :root custom properties in globals.css**

Update `src/app/globals.css` from line 3 to 40 to define the new slate background, green accents, and glow variables.

```css
:root {
  /* Colors */
  --bg-primary: #030712;
  --bg-secondary: #080c16;
  --bg-card: rgba(10, 15, 26, 0.65);
  --bg-card-hover: rgba(14, 22, 38, 0.85);
  --border-color: rgba(57, 255, 20, 0.12);
  --border-color-hover: rgba(57, 255, 20, 0.35);
  
  --accent: #39ff14;
  --accent-hover: #00ff66;
  --accent-glow: rgba(57, 255, 20, 0.25);
  
  --text-primary: #f5f5f7;
  --text-secondary: #86868b;
  --text-tertiary: #636366;
  --text-white: #ffffff;
  
  --success: #30d158;
  --warning: #ff9f0a;
  --error: #ff453a;

  /* Typography */
  --font-sans: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-mono: 'Courier New', Courier, monospace;

  /* Spacing */
  --nav-height: 48px;
  --max-width: 1100px;
  
  /* Glassmorphism */
  --glass-bg: rgba(6, 10, 20, 0.7);
  --glass-blur: blur(24px);
  --glass-border: rgba(57, 255, 20, 0.12);
  
  /* Color Scheme */
  color-scheme: dark;
}
```

- [x] **Step 2: Add digital circuit grid and glow keyframe definitions**

Add the following animations and global background styling utility code at the end of `src/app/globals.css`.

```css
/* Custom Tech Animations */
@keyframes techPulse {
  0%, 100% { border-color: rgba(57, 255, 20, 0.15); box-shadow: 0 0 10px rgba(57, 255, 20, 0.05); }
  50% { border-color: rgba(57, 255, 20, 0.45); box-shadow: 0 0 20px rgba(57, 255, 20, 0.25); }
}

@keyframes scanlineSweep {
  0% { transform: translateY(-100%); }
  100% { transform: translateY(100%); }
}

@keyframes flashLED {
  0%, 100% { opacity: 0.3; }
  50% { opacity: 1; }
}

.tech-grid-bg {
  background-image: 
    linear-gradient(to right, rgba(57, 255, 20, 0.04) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(57, 255, 20, 0.04) 1px, transparent 1px);
  background-size: 40px 40px;
}

.glow-text-green {
  text-shadow: 0 0 10px rgba(57, 255, 20, 0.4);
}

.led-indicator {
  display: inline-block;
  width: 8px;
  height: 8px;
  background-color: var(--accent);
  border-radius: 50%;
  box-shadow: 0 0 8px var(--accent);
  animation: flashLED 1.5s infinite;
}
```

- [x] **Step 3: Verify style compilation**

Run a next lint check command to make sure there are no errors in our styling definitions.

Run: `npx next lint`
Expected: Done without errors.

---

### Task 2: Refine Header & Footer Glassmorphic Style

**Files:**
- Modify: `src/components/Navbar.module.css`
- Modify: `src/components/Footer.module.css`

- [x] **Step 1: Refine Navbar styling module**

Modify `src/components/Navbar.module.css` to update the background blur and transition to the green theme.

```css
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: var(--nav-height);
  background-color: var(--glass-bg);
  backdrop-filter: var(--glass-blur);
  -webkit-backdrop-filter: var(--glass-blur);
  border-bottom: 1px solid var(--glass-border);
  z-index: 1000;
  transition: all 0.3s ease;
}

.logo {
  font-family: var(--font-sans);
  font-weight: 700;
  font-size: 16px;
  letter-spacing: -0.5px;
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--text-white);
  cursor: pointer;
}

.logo span {
  text-shadow: 0 0 8px rgba(57, 255, 20, 0.2);
}

.link {
  font-size: 12px;
  font-weight: 500;
  color: var(--text-secondary);
  letter-spacing: -0.1px;
  transition: color 0.2s ease, text-shadow 0.2s ease;
}

.link:hover {
  color: var(--accent);
  text-shadow: 0 0 6px rgba(57, 255, 20, 0.4);
}

.activeLink {
  color: var(--accent);
  font-weight: 600;
  text-shadow: 0 0 8px rgba(57, 255, 20, 0.5);
}
```

- [x] **Step 2: Refine Footer styling module**

Open `src/components/Footer.module.css` and update the borders and links colors to inherit the lime green accent colors.

```css
.footer {
  background-color: var(--bg-secondary);
  border-top: 1px solid var(--border-color);
  padding: 64px 0 32px 0;
  color: var(--text-secondary);
  font-size: 13px;
}

.title {
  color: var(--text-white);
  font-weight: 600;
  margin-bottom: 16px;
  font-size: 14px;
}

.link:hover {
  color: var(--accent);
}
```

- [x] **Step 3: Run Next compilation to verify shell components build successfully**

Run: `npm run build --webpack`
Expected: Next build succeeds.

---

### Task 3: Refine Homepage Layout Elements

**Files:**
- Modify: `src/app/page.tsx`
- Modify: `src/app/page.module.css`

- [x] **Step 1: Update Homepage Main elements with circuit background & scanline overlays**

Edit `src/app/page.tsx` and add classes `tech-grid-bg` and styling elements on the sections.

```tsx
// Insert grid backgrounds to Hero section
<section className={`${styles.hero} tech-grid-bg`}>
```

Update `src/app/page.module.css` to implement the custom grid backgrounds and ambient glows:

```css
.hero {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 140px 24px 100px 24px;
  overflow: hidden;
}

.heroBackground {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 700px;
  height: 700px;
  background: radial-gradient(circle, rgba(57, 255, 20, 0.08) 0%, rgba(0, 0, 0, 0) 70%);
  z-index: -1;
  pointer-events: none;
}
```

- [x] **Step 2: Modify Interactive Device Selector Active states & brackets**

Update `src/app/page.tsx` selector display container. Apply corner brackets wrapper around the image showcase:

```tsx
// Inside detailsWrapper of src/app/page.tsx
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
```

- [x] **Step 3: Update CSS modules for device selector brackets and pulsing states**

Add the corner brackets and selector styling inside `src/app/page.module.css`:

```css
.bracketContainer {
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 320px;
  border-radius: 12px;
  border: 1px solid rgba(57, 255, 20, 0.15);
  overflow: hidden;
}

.bracketTopLeft, .bracketTopRight, .bracketBottomLeft, .bracketBottomRight {
  position: absolute;
  width: 16px;
  height: 16px;
  border: 2px solid var(--accent);
  z-index: 2;
  pointer-events: none;
}

.bracketTopLeft { top: 8px; left: 8px; border-right: none; border-bottom: none; }
.bracketTopRight { top: 8px; right: 8px; border-left: none; border-bottom: none; }
.bracketBottomLeft { bottom: 8px; left: 8px; border-right: none; border-top: none; }
.bracketBottomRight { bottom: 8px; right: 8px; border-left: none; border-top: none; }

.modelCardActive {
  border-color: var(--accent) !important;
  background-color: rgba(57, 255, 20, 0.05) !important;
  box-shadow: 0 0 15px rgba(57, 255, 20, 0.2) !important;
}

.repairItemActive {
  border-color: var(--accent) !important;
  background-color: rgba(57, 255, 20, 0.05) !important;
  box-shadow: 0 4px 15px rgba(57, 255, 20, 0.12) !important;
}

.visualOverlayContainer {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 20px;
  background: linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0) 100%);
  display: flex;
  flex-direction: column;
}

.diagnosticLabel {
  font-size: 11px;
  color: var(--accent);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  display: flex;
  align-items: center;
}

.diagnosticValue {
  font-size: 14px;
  color: var(--text-white);
  font-weight: 500;
}
```

- [x] **Step 4: Update Video grid tech scanlines overlays**

Modify `src/app/page.module.css` for video overlays to include tech-grade diagnostics overlays.

```css
.videoCard {
  overflow: hidden;
  border-radius: 16px;
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  position: relative;
  transition: all 0.3s ease;
  height: 300px;
}

.videoCard:hover {
  transform: translateY(-4px);
  border-color: var(--accent);
  box-shadow: 0 0 15px rgba(57, 255, 20, 0.15);
}

.videoCard::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background: linear-gradient(to right, transparent, var(--accent), transparent);
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease;
}

.videoCard:hover::after {
  opacity: 1;
  animation: scanlineSweep 2s linear infinite;
}

.videoOverlay {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 16px;
  background: linear-gradient(to top, rgba(3, 7, 18, 0.95) 0%, rgba(0,0,0,0) 100%);
  z-index: 3;
}

.videoTitle {
  font-family: var(--font-mono);
  font-size: 13px;
  font-weight: 600;
  color: var(--accent);
}

.videoDesc {
  font-family: var(--font-sans);
  font-size: 11px;
  color: var(--text-secondary);
  margin-top: 4px;
}
```

---

### Task 4: Ensure Stylistic Cohesion across Subpages

**Files:**
- Modify: `src/app/about/about.module.css`
- Modify: `src/app/pricing/pricing.module.css`
- Modify: `src/app/services/services.module.css`
- Modify: `src/app/contact/contact.module.css`

- [x] **Step 1: Refine About page styles**

Edit `src/app/about/about.module.css` to update accent colors and glass border components:

```css
.card {
  background: var(--bg-card);
  backdrop-filter: var(--glass-blur);
  -webkit-backdrop-filter: var(--glass-blur);
  border: 1px solid var(--border-color);
  border-radius: 16px;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  border-color: var(--accent);
  box-shadow: 0 0 15px rgba(57, 255, 20, 0.12);
}
```

- [x] **Step 2: Refine Pricing table borders**

Edit `src/app/pricing/pricing.module.css` to apply lime green active glows:

```css
.pricingRowActive {
  border: 1px solid var(--accent);
  background-color: rgba(57, 255, 20, 0.05);
  box-shadow: inset 0 0 12px rgba(57, 255, 20, 0.1);
}
```

- [x] **Step 3: Refine Services grid list items**

Edit `src/app/services/services.module.css` to inherit green properties:

```css
.serviceIcon {
  color: var(--accent);
  background-color: rgba(57, 255, 20, 0.08);
}
```

- [x] **Step 4: Refine Contact/Booking page form inputs**

Edit `src/app/contact/contact.module.css` to update focuses to green:

```css
.input:focus, .textarea:focus {
  border-color: var(--accent);
  box-shadow: 0 0 8px rgba(57, 255, 20, 0.25);
  outline: none;
}
```

---

### Task 5: Final Validation & Build Verification

- [x] **Step 1: Compile application builder check**

Run: `npm run build --webpack`
Expected: Compile finishes successfully with no issues.
