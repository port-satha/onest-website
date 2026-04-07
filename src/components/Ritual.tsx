export default function Ritual() {
  return (
    <section style={{ padding: '6rem 3rem', background: '#FEFCF9', textAlign: 'center' }}>
      <div style={{ maxWidth: '700px', margin: '0 auto' }}>
        <div style={{ fontSize: '0.6rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: '#7A8E70', marginBottom: '2rem', fontWeight: 500 }}>
          The Evening Ritual
        </div>
        <h2 className="font-heading" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 300, lineHeight: 1.25, marginBottom: '2rem', color: '#1A1918' }}>
          Recharge tonight.<br />Create tomorrow.
        </h2>
        <p style={{ fontSize: '0.95rem', lineHeight: 1.8, color: '#2C2B28', fontWeight: 300, marginBottom: '2.5rem' }}>
          The most productive thing you can do is rest well. onest helps you turn your evening wind-down into a ritual that restores your energy — so you wake up ready to build, create, and give.
        </p>
        <a href="#" className="btn-primary">Discover Your Ritual</a>
      </div>

      <style jsx>{`
        @media (max-width: 900px) {
          section { padding: 4rem 1.5rem !important; }
        }
      `}</style>
    </section>
  );
}
