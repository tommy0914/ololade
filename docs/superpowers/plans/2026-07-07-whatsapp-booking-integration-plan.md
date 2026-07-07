# WhatsApp Booking Integration Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Implement a WhatsApp redirection flow when submitting the service/quote request form.

**Architecture:** Update `handleSubmit` in `contact/page.tsx` to generate a formatted message, url-encode it, open a WhatsApp link in a new tab, and transition the UI to show a success state with a fallback manual link.

**Tech Stack:** Next.js (App Router, Client Component), React.

---

### Task 1: Update BookingForm State and Redirection Logic

**Files:**
- Modify: `src/app/contact/page.tsx`

- [ ] **Step 1: Modify `BookingForm` component state and redirection logic**

Update the component's imports and inner logic in [src/app/contact/page.tsx](file:///C:/Users/ADMIN/Desktop/ololade/src/app/contact/page.tsx) to store `whatsappUrl` in state and handle redirecting to WhatsApp.

Replace the lines:
```typescript
  const [submitted, setSubmitted] = useState(false);

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
    setSubmitted(true);
  };
```

With:
```typescript
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
    
    // Find human-readable repair name
    const selectedRepair = REPAIRS.find(r => r.id === formData.repair)?.name || formData.repair;
    
    // Format message
    const message = `*New Service Booking / Quote Request*

*Name:* ${formData.name}
*Email:* ${formData.email}
*Device:* ${formData.model}
*Inquiry Type:* ${selectedRepair}
*Details/Notes:* ${formData.notes || "None"}`;

    const phone = "2347071039523";
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    
    setWhatsappUrl(url);
    setSubmitted(true);
    
    // Redirect to WhatsApp in a new tab
    window.open(url, "_blank", "noopener,noreferrer");
  };
```

- [ ] **Step 2: Update Success Message in UI**

Update the success message display in [src/app/contact/page.tsx](file:///C:/Users/ADMIN/Desktop/ololade/src/app/contact/page.tsx) to provide a fallback link to the user.

Replace lines 66-73:
```tsx
      {submitted ? (
        <div className={styles.successMessage}>
          <CheckCircle size={24} style={{ flexShrink: 0 }} />
          <div>
            <strong style={{ display: "block", marginBottom: "4px" }}>Request Submitted!</strong>
            We have registered your details and will email you shortly with a personalized offer/schedule confirmation.
          </div>
        </div>
      ) : (
```

With:
```tsx
      {submitted ? (
        <div className={styles.successMessage}>
          <CheckCircle size={24} style={{ flexShrink: 0 }} />
          <div>
            <strong style={{ display: "block", marginBottom: "4px" }}>Request Initiated!</strong>
            We have opened WhatsApp to send your service request. If the chat did not open automatically, please <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "underline", color: "var(--accent)" }}>click here to open WhatsApp manually</a>.
          </div>
        </div>
      ) : (
```

- [ ] **Step 3: Run typescript check and linter to verify changes are correct**

Run the build script to ensure Next.js compiles the changed code without errors.
Run: `npm run build`
Expected: Successful compilation without TypeScript or bundling issues.

- [ ] **Step 4: Commit changes to Git**

Run:
```bash
git add src/app/contact/page.tsx
git commit -m "feat: integrate WhatsApp booking redirection"
```
