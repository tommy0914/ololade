# Design Spec: Google Maps Embed Integration

**Date**: 2026-07-07  
**Topic**: Google Maps Embed Integration  
**Status**: Approved  

---

## 1. Objective
Replace the mock location placeholder on the contact page with a real Google Maps embedded iframe pointing to the physical shop address: `"Second Awa Hostel, Opposite Emily Hostel, Under G, Ogbomoso"`.

---

## 2. User Experience Flow
1. User navigates to the `/contact` page.
2. The user sees a styled dark-themed map in the right-hand column representing the shop location, blending with the Apple-inspired layout.
3. When the user hovers over the map card, it transitions smoothly to full color, allowing full pan/zoom interactions.

---

## 3. Implementation Details

### Affected Files
* [src/app/contact/page.tsx](file:///C:/Users/ADMIN/Desktop/ololade/src/app/contact/page.tsx)
* [src/app/contact/contact.module.css](file:///C:/Users/ADMIN/Desktop/ololade/src/app/contact/contact.module.css)

### Code Changes

1. **[contact/page.tsx](file:///C:/Users/ADMIN/Desktop/ololade/src/app/contact/page.tsx)**:
   * Replace the map placeholder wrapper with a real `iframe`.
   * Set `src` to `https://maps.google.com/maps?q=Second%20Awa%20Hostel%2C%20Opposite%20Emily%20Hostel%2C%20Under%20G%2C%20Ogbomoso&t=&z=15&ie=UTF8&iwloc=&output=embed`.
   * Ensure standard safety features like `loading="lazy"` and `referrerPolicy="no-referrer-when-downgrade"`.

2. **[contact.module.css](file:///C:/Users/ADMIN/Desktop/ololade/src/app/contact/contact.module.css)**:
   * Add styles for `.mapPlaceholder iframe` to implement dark-mode filters (invert, grayscale).
   * Transition filters on hover for high-end feel.
   * Add overflow control to parent wrapper to ensure map borders fit inside the rounded corners.

---

## 4. Test Plan
* **Visual Quality Check**: Confirm that the map is rendered in dark-mode grayscale and matches the web theme.
* **Transition Check**: Verify that hovering over the map triggers a smooth transition to colored map mode.
* **Map Interaction**: Zoom and pan on the map to verify it is fully interactive.
* **Responsive Layout Check**: Verify that the map displays correctly on mobile, tablet, and desktop views.
