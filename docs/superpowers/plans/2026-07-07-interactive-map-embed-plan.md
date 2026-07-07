# Google Maps Embed Integration Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Embed an interactive, dark-filtered Google Maps iframe on the contact page pointing to the shop location.

**Architecture:** Update the map placeholder markup in `contact/page.tsx` with a standard Google Maps embed iframe and add styling transitions in `contact.module.css` to blend the map layout with the visual theme.

**Tech Stack:** Next.js, CSS.

---

### Task 1: Integrate Google Maps Iframe & Hover Styles

**Files:**
- Modify: `src/app/contact/page.tsx`
- Modify: `src/app/contact/contact.module.css`

- [ ] **Step 1: Replace map mockup placeholder in contact/page.tsx**

Update [src/app/contact/page.tsx](file:///C:/Users/ADMIN/Desktop/ololade/src/app/contact/page.tsx) to render a live `iframe` element instead of the static mockup text block.

Replace the lines 226-232:
```tsx
              {/* Map Mockup */}
              <div className={styles.mapPlaceholder}>
                <div style={{ textAlign: "center" }}>
                  <MapPin size={32} style={{ color: "var(--accent)", marginBottom: "8px" }} />
                  <span>Map: Cupertino Smart Device Lab</span>
                </div>
              </div>
```

With:
```tsx
              {/* Map Embed */}
              <div className={styles.mapPlaceholder} style={{ padding: 0, overflow: "hidden" }}>
                <iframe
                  src="https://maps.google.com/maps?q=Second%20Awa%20Hostel%2C%20Opposite%20Emily%20Hostel%2C%20Under%20G%2C%20Ogbomoso&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Second Awa Hostel Map"
                ></iframe>
              </div>
```

- [ ] **Step 2: Add CSS filter styles in contact.module.css**

Add styles for `.mapPlaceholder iframe` and its hover state in [src/app/contact/contact.module.css](file:///C:/Users/ADMIN/Desktop/ololade/src/app/contact/contact.module.css) to support dark mode blending and transition effects.

Append these rules below `.mapPlaceholder:hover`:
```css
.mapPlaceholder iframe {
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 15px;
  filter: grayscale(1) invert(0.9) contrast(1.2) opacity(0.85);
  transition: all 0.3s ease;
}

.mapPlaceholder:hover iframe {
  filter: grayscale(0) invert(0) contrast(1) opacity(1);
}
```

- [ ] **Step 3: Run build check to verify compilation**

Verify that Next.js compilation succeeds without errors.
Run: `npm run build`
Expected: Compiled successfully.

- [ ] **Step 4: Commit all modifications to Git**

Commit the map implementation.
Run:
```bash
git add src/app/contact/page.tsx src/app/contact/contact.module.css
git commit -m "feat: embed interactive Google Maps iframe with dark-mode hover styles"
```
