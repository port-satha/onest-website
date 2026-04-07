"use client";

import { useState, useEffect } from "react";

const countries = [
  "Singapore", "Japan", "Taiwan", "Hong Kong", "South Korea",
  "Malaysia", "Indonesia", "Vietnam", "Australia", "United States",
  "United Kingdom", "Germany", "France", "Canada", "Other",
];

const inputStyle: React.CSSProperties = {
  padding: '0.75rem 0.9rem',
  border: '1px solid rgba(44,43,40,0.12)',
  background: 'transparent',
  fontFamily: 'var(--font-dm), "DM Sans", sans-serif',
  fontSize: '0.85rem',
  color: '#2C2B28',
  outline: 'none',
  transition: 'border-color 0.3s',
  borderRadius: 0,
  WebkitAppearance: 'none' as const,
  width: '100%',
};

const labelStyle: React.CSSProperties = {
  fontSize: '0.62rem',
  letterSpacing: '0.12em',
  textTransform: 'uppercase',
  color: '#D4C9BC',
  fontWeight: 500,
};

export default function MembershipModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [memberType, setMemberType] = useState<"thai" | "international">("thai");
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    if (isOpen) { document.body.style.overflow = "hidden"; document.addEventListener("keydown", handleEscape); }
    return () => { document.body.style.overflow = ""; document.removeEventListener("keydown", handleEscape); };
  }, [isOpen, onClose]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    const formData = new FormData(e.currentTarget);
    const data = {
      type: memberType,
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      birthday: formData.get("birthday"),
      country: memberType === "international" ? formData.get("country") : "Thailand",
      scentPreference: formData.get("scent"),
      consentMarketing: formData.get("consent") === "on",
      signupDate: new Date().toISOString(),
      source: "homepage",
    };
    try {
      const res = await fetch("/api/membership", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
      if (res.ok) { setSuccess(true); setTimeout(() => { setSuccess(false); onClose(); }, 3000); }
    } catch { /* silently handle */ } finally { setSubmitting(false); }
  };

  if (!isOpen) return null;

  return (
    <div
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
      style={{ display: 'flex', position: 'fixed', inset: 0, zIndex: 1000, background: 'rgba(26,25,24,0.6)', backdropFilter: 'blur(6px)', WebkitBackdropFilter: 'blur(6px)', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}
    >
      <div style={{ background: '#FEFCF9', maxWidth: '520px', width: '100%', padding: '3rem', position: 'relative', maxHeight: '90vh', overflowY: 'auto', animation: 'modalIn 0.3s ease' }}>
        <button onClick={onClose} style={{ position: 'absolute', top: '1.2rem', right: '1.5rem', background: 'none', border: 'none', fontSize: '1.2rem', cursor: 'pointer', color: '#D4C9BC', transition: 'color 0.3s', padding: '0.5rem' }} aria-label="Close">&times;</button>

        {success ? (
          <div style={{ textAlign: 'center', padding: '3rem 0' }}>
            <h3 className="font-heading" style={{ fontSize: '1.8rem', fontWeight: 300, marginBottom: '1rem', color: '#1A1918' }}>Welcome to the circle</h3>
            <p style={{ fontSize: '0.85rem', color: '#D4C9BC', fontWeight: 300, lineHeight: 1.6 }}>We&apos;ll be in touch with scent stories and member-only moments.</p>
          </div>
        ) : (
          <>
            <h3 className="font-heading" style={{ fontSize: '1.8rem', fontWeight: 300, marginBottom: '0.5rem', color: '#1A1918' }}>Join the onest circle</h3>
            <p style={{ fontSize: '0.82rem', color: '#D4C9BC', fontWeight: 300, marginBottom: '2rem', lineHeight: 1.6 }}>
              Free membership. Scent stories, early access, birthday rewards, and invitations — delivered to you wherever you are.
            </p>

            <div style={{ display: 'flex', gap: 0, marginBottom: '2rem', border: '1px solid rgba(44,43,40,0.12)' }}>
              {(["thai", "international"] as const).map(type => (
                <button key={type} type="button" onClick={() => setMemberType(type)}
                  className="font-body"
                  style={{ flex: 1, padding: '0.7rem', border: 'none', fontSize: '0.72rem', letterSpacing: '0.1em', textTransform: 'uppercase', cursor: 'pointer', transition: 'all 0.3s', fontWeight: 400, background: memberType === type ? '#3D5A3A' : 'transparent', color: memberType === type ? '#FEFCF9' : '#D4C9BC' }}
                >{type === "thai" ? "Thailand" : "International"}</button>
              ))}
            </div>

            <form onSubmit={handleSubmit}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                  <label style={labelStyle}>First Name</label>
                  <input name="firstName" type="text" required placeholder={memberType === "thai" ? "Somchai" : "John"} style={inputStyle} onFocus={e => e.currentTarget.style.borderColor = '#3D5A3A'} onBlur={e => e.currentTarget.style.borderColor = 'rgba(44,43,40,0.12)'} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                  <label style={labelStyle}>Last Name</label>
                  <input name="lastName" type="text" required placeholder={memberType === "thai" ? "Rak-dee" : "Doe"} style={inputStyle} onFocus={e => e.currentTarget.style.borderColor = '#3D5A3A'} onBlur={e => e.currentTarget.style.borderColor = 'rgba(44,43,40,0.12)'} />
                </div>
              </div>

              <div style={{ marginBottom: '1rem' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                  <label style={labelStyle}>Email</label>
                  <input name="email" type="email" required placeholder="you@email.com" style={inputStyle} onFocus={e => e.currentTarget.style.borderColor = '#3D5A3A'} onBlur={e => e.currentTarget.style.borderColor = 'rgba(44,43,40,0.12)'} />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                  <label style={labelStyle}>{memberType === "thai" ? "Phone / LINE ID" : "Phone (with country code)"}</label>
                  <input name="phone" type="tel" placeholder={memberType === "thai" ? "08X-XXX-XXXX" : "+1 555-123-4567"} style={inputStyle} onFocus={e => e.currentTarget.style.borderColor = '#3D5A3A'} onBlur={e => e.currentTarget.style.borderColor = 'rgba(44,43,40,0.12)'} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                  <label style={labelStyle}>Birthday</label>
                  <input name="birthday" type="date" style={inputStyle} onFocus={e => e.currentTarget.style.borderColor = '#3D5A3A'} onBlur={e => e.currentTarget.style.borderColor = 'rgba(44,43,40,0.12)'} />
                </div>
              </div>

              {memberType === "international" && (
                <div style={{ marginBottom: '1rem' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                    <label style={labelStyle}>Country</label>
                    <select name="country" style={{ ...inputStyle, cursor: 'pointer' }}>
                      <option value="">Select your country</option>
                      {countries.map(c => <option key={c} value={c}>{c}</option>)}
                    </select>
                  </div>
                </div>
              )}

              <div style={{ marginBottom: '1rem' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                  <label style={labelStyle}>Your Favourite Scent (optional)</label>
                  <select name="scent" style={{ ...inputStyle, cursor: 'pointer' }}>
                    <option value="">I&apos;d like to discover</option>
                    <option value="everpine">Everpine — Forest &amp; grounding</option>
                    <option value="chalene-rose">Chalene Rose — Rose &amp; warm wood</option>
                    <option value="neroli-garden">Neroli Garden — Citrus &amp; green</option>
                    <option value="white-tea-retreat">White Tea Retreat — Clean &amp; calm</option>
                    <option value="cotton-musk">Cotton Musk — Soft &amp; familiar</option>
                    <option value="wild-mint">Wild Mint — Fresh &amp; bright</option>
                    <option value="serene-tea">Serene Tea — Calm &amp; balanced</option>
                  </select>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', margin: '1.5rem 0', fontSize: '0.75rem', color: '#D4C9BC', lineHeight: 1.5 }}>
                <input type="checkbox" name="consent" id="consent" style={{ marginTop: '0.2rem', accentColor: '#3D5A3A', width: '14px', height: '14px', flexShrink: 0 }} />
                <label htmlFor="consent">I&apos;d like to receive scent stories, new arrivals, and member-only offers from onest. You can unsubscribe anytime.</label>
              </div>

              <button type="submit" disabled={submitting} className="font-body"
                style={{ width: '100%', padding: '0.9rem', background: '#3D5A3A', color: '#FEFCF9', border: '1px solid #3D5A3A', fontSize: '0.72rem', letterSpacing: '0.15em', textTransform: 'uppercase', cursor: 'pointer', transition: 'all 0.3s', fontWeight: 400, opacity: submitting ? 0.5 : 1 }}
                onMouseEnter={e => { e.currentTarget.style.background = '#1A1918'; e.currentTarget.style.borderColor = '#1A1918'; }}
                onMouseLeave={e => { e.currentTarget.style.background = '#3D5A3A'; e.currentTarget.style.borderColor = '#3D5A3A'; }}
              >
                {submitting ? "Joining..." : "Join the Circle"}
              </button>
              <p style={{ fontSize: '0.65rem', color: '#D4C9BC', textAlign: 'center', marginTop: '1rem', lineHeight: 1.5 }}>No spam, ever. Just the things that matter.</p>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
