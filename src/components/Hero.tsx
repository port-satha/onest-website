export default function Hero({ onOpenModal }: { onOpenModal: () => void }) {
  return (
    <section className="min-h-screen bg-cream" style={{ display: 'grid', gridTemplateColumns: '1fr 1.1fr' }}>
      <div className="flex flex-col justify-end" style={{ padding: '0 4rem 5rem' }}>
        <div
          className="animate-fade-up"
          style={{ fontSize: '0.65rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: '#7A8E70', marginBottom: '2rem', fontWeight: 500, animationDelay: '0.3s' }}
        >
          Crafted Home &amp; Body Care
        </div>
        <h1
          className="font-heading animate-fade-up"
          style={{ fontSize: 'clamp(3rem, 5vw, 4.5rem)', fontWeight: 300, lineHeight: 1.1, color: '#1A1918', marginBottom: '2rem', animationDelay: '0.5s' }}
        >
          Come home.<br />
          Feel <em style={{ fontStyle: 'italic', color: '#3D5A3A' }}>elevated</em>.
        </h1>
        <p
          className="animate-fade-up"
          style={{ fontSize: '1rem', lineHeight: 1.7, color: '#2C2B28', maxWidth: '420px', fontWeight: 300, marginBottom: '2.5rem', animationDelay: '0.7s' }}
        >
          Plant-based home and body care, thoughtfully crafted in Thailand. For
          those who believe everyday rituals deserve more intention.
        </p>
        <div
          className="flex items-center animate-fade-up"
          style={{ gap: '1rem', animationDelay: '0.9s' }}
        >
          <a href="#products" className="btn-primary">Explore Collection</a>
          <button onClick={onOpenModal} className="btn-outline">Become a Member</button>
        </div>
      </div>
      <div className="relative overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1616046229478-9901c5536a45?w=1200&q=80"
          alt="Warm minimalist home with natural light"
          className="img-fill"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(90deg, #F6F1EB 0%, transparent 25%)', zIndex: 1 }} />
      </div>

      <style jsx>{`
        @media (max-width: 900px) {
          section {
            grid-template-columns: 1fr !important;
            min-height: auto !important;
          }
          section > div:first-child {
            padding: 8rem 1.5rem 3rem !important;
          }
          section > div:last-child {
            aspect-ratio: 4/3;
          }
          section > div:last-child > div {
            background: linear-gradient(180deg, #F6F1EB 0%, transparent 30%) !important;
          }
        }
      `}</style>
    </section>
  );
}
