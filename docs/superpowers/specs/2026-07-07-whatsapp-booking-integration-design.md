# Design Spec: WhatsApp Booking Integration

**Date**: 2026-07-07  
**Topic**: WhatsApp Booking Integration  
**Status**: Approved  

---

## 1. Objective
Enable the site owner at Ololade Mobile Tech to receive booking and quote details directly via WhatsApp. This replaces the mock client-side success screen with a live WhatsApp redirect, opening a chat with all form inputs prefilled.

---

## 2. User Experience Flow
1. The customer selects a device and service from the pricing estimates or services page, navigating to `/contact?model=...&repair=...`.
2. The [BookingForm](file:///C:/Users/ADMIN/Desktop/ololade/src/app/contact/page.tsx#L32) pre-fills the inquiry inputs.
3. The customer completes their name, email, and description notes.
4. The customer clicks **"Book Repair Appointment"** (or dynamically named equivalent).
5. A new browser tab opens navigating to `https://wa.me/2347071039523?text=...` with the formatted booking details.
6. The primary tab updates to show a confirmation screen informing the user that WhatsApp has been launched, with a manual fallback link in case popups were blocked.

---

## 3. Implementation Details

### Affected Files
* [src/app/contact/page.tsx](file:///C:/Users/ADMIN/Desktop/ololade/src/app/contact/page.tsx)

### Code Changes
We will modify the [handleSubmit](file:///C:/Users/ADMIN/Desktop/ololade/src/app/contact/page.tsx#L55) function and the success UI block:

1. **Construct the WhatsApp URL**:
   * Target Phone Number: `2347071039523` (representing international formatting for `07071039523`).
   * Bold markdown formatting (`*...*`) for message readability in WhatsApp.
   * Proper URI encoding of parameters.

2. **Trigger Redirection**:
   * Use `window.open(url, "_blank", "noopener,noreferrer")` to launch in a new window/tab.

3. **Fallback Link**:
   * Store the generated WhatsApp URL in the local component state so the success card can render a direct fallback link: `[click here to open WhatsApp manually](whatsappUrl)`.

---

## 4. Test Plan
* **Form Prefill Verification**: Verify that landing on the page with query params pre-populates inputs correctly.
* **Redirection Verification**: Submit the form and verify that a new tab is opened with a target URL beginning with `https://wa.me/2347071039523?text=`.
* **Message Encoding Verification**: Confirm that special characters (spaces, line breaks, emojis) are correctly encoded and readable.
* **Fallback Link Verification**: Block popups in the browser settings, submit the form, and confirm that the manual link works as expected.
