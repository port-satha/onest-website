"use client";

const scents = [
  { number: "01", moment: "Evening Wind-Down", name: "Everpine", desc: "Forest floor after rain. For grounding your evening, letting the day dissolve into stillness.", gradient: "rgba(61,90,58,.35)" },
  { number: "02", moment: "Gentle Beginnings", name: "Chalene Rose", desc: "Soft rose and warm wood. For mornings that start without urgency, with quiet confidence.", gradient: "rgba(232,213,206,.25)" },
  { number: "03", moment: "Bright Clarity", name: "Neroli Garden", desc: "Citrus blossom and green leaf. For moments when you need lightness and fresh perspective.", gradient: "rgba(229,212,176,.25)" },
  { number: "04", moment: "Deep Restoration", name: "White Tea Retreat", desc: "Clean white tea and linen. For washing away everything and starting completely new.", gradient: "rgba(168,181,160,.25)" },
];

export default function Scents() {
  return (
    <section id="scents" style={{ background: '#1A1918', color: '#F6F1EB' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr' }}>
        <div style={{ padding: '6rem 4rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <h2 className="font-heading" style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 300, lineHeight: 1.2, marginBottom: '1.5rem' }}>
            The Kindness Scent<br />Collection
          </h2>
          <p style={{ fontSize: '0.85rem', lineHeight: 1.7, maxWidth: '380px', fontWeight: 300, color: '#D4C9BC' }}>
            Each scent is designed for a specific moment of recharge — not just to smell good, but to shift how you feel in your space.
          </p>
        </div>
        <div style={{ minHeight: '420px', overflow: 'hidden', position: 'relative' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=900&q=80" alt="Botanical fragrance ingredients" className="img-fill" style={{ objectPosition: 'center 40%' }} referrerPolicy="no-referrer" />
        </div>
      </div>

      <div style={{ display: 'flex', gap: '1px', background: 'rgba(255,255,255,0.05)' }}>
        {scents.map((scent) => (
          <div
            key={scent.number}
            className="group"
            style={{ flex: 1, padding: '3rem 2.5rem', position: 'relative', overflow: 'hidden', transition: 'all 0.5s ease', cursor: 'pointer', minHeight: '300px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}
            onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.02)'; const overlay = e.currentTarget.querySelector('.scent-overlay') as HTMLElement; if (overlay) overlay.style.opacity = '1'; const desc = e.currentTarget.querySelector('.scent-desc') as HTMLElement; if (desc) { desc.style.maxHeight = '100px'; desc.style.opacity = '1'; } }}
            onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; const overlay = e.currentTarget.querySelector('.scent-overlay') as HTMLElement; if (overlay) overlay.style.opacity = '0'; const desc = e.currentTarget.querySelector('.scent-desc') as HTMLElement; if (desc) { desc.style.maxHeight = '0'; desc.style.opacity = '0'; } }}
          >
            <div className="scent-overlay" style={{ position: 'absolute', inset: 0, opacity: 0, transition: 'opacity 0.5s ease', background: `linear-gradient(180deg, transparent, ${scent.gradient})`, pointerEvents: 'none' }} />
            <span className="font-heading" style={{ fontSize: '4rem', fontWeight: 300, color: 'rgba(255,255,255,0.05)', position: 'absolute', top: '2rem', left: '2.5rem' }}>
              {scent.number}
            </span>
            <div style={{ fontSize: '0.6rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: '#C4A97D', marginBottom: '1rem', position: 'relative', zIndex: 1 }}>
              {scent.moment}
            </div>
            <div className="font-heading" style={{ fontSize: '1.6rem', fontWeight: 400, marginBottom: '0.5rem', position: 'relative', zIndex: 1 }}>
              {scent.name}
            </div>
            <p className="scent-desc" style={{ fontSize: '0.82rem', lineHeight: 1.7, color: '#D4C9BC', fontWeight: 300, position: 'relative', zIndex: 1, maxHeight: 0, overflow: 'hidden', transition: 'max-height 0.5s ease, opacity 0.5s ease', opacity: 0 }}>
              {scent.desc}
            </p>
          </div>
        ))}
      </div>

      <style jsx>{`
        @media (max-width: 900px) {
          section > div:first-child { grid-template-columns: 1fr !important; }
          section > div:first-child > div:first-child { padding: 4rem 1.5rem !important; }
          section > div:first-child > div:last-child { min-height: 280px !important; }
          section > div:last-child { flex-direction: column !important; }
          section > div:last-child > div { min-height: 180px !important; padding: 2rem 1.5rem !important; }
          .scent-desc { max-height: unset !important; opacity: 1 !important; }
        }
      `}</style>
    </section>
  );
}
