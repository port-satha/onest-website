const values = [
  { title: "Intentional", desc: "Every product begins with the experience it serves — never the other way around." },
  { title: "Plant-Based", desc: "Scientifically formulated with natural ingredients, crafted at our Ratchaburi factory." },
  { title: "Thai-Made", desc: "Rooted in Thai craftsmanship and the quiet pride of making something with care." },
];

export default function Philosophy() {
  return (
    <section id="philosophy" style={{ padding: '8rem 3rem', display: 'grid', gridTemplateColumns: '1fr 1.15fr', gap: '5rem', alignItems: 'center', maxWidth: '1300px', margin: '0 auto' }}>
      <div style={{ width: '100%', aspectRatio: '4/5', borderRadius: '2px', overflow: 'hidden', position: 'relative' }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="https://images.unsplash.com/photo-1556760544-74068565f05c?w=800&q=80" alt="Crafting natural botanical products" className="img-fill" referrerPolicy="no-referrer" />
      </div>
      <div>
        <h2 className="font-heading" style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 300, lineHeight: 1.2, marginBottom: '2rem', color: '#1A1918' }}>
          Your home is your<br />recharge station.
        </h2>
        <p style={{ fontSize: '0.95rem', lineHeight: 1.8, color: '#2C2B28', fontWeight: 300, marginBottom: '1.5rem' }}>
          onest was born during a time when two founders — working, building, raising a family — realised their home was the one place that gave them energy to keep going.
        </p>
        <p style={{ fontSize: '0.95rem', lineHeight: 1.8, color: '#2C2B28', fontWeight: 300, marginBottom: 0 }}>
          We believe that when your home feels right, you go out into the world with more to give. onest exists to help purposeful people transform daily routines into moments of restoration.
        </p>
        <div style={{ display: 'flex', gap: '2rem', marginTop: '2.5rem', paddingTop: '2.5rem', borderTop: '1px solid rgba(44,43,40,0.08)' }}>
          {values.map((v) => (
            <div key={v.title} style={{ flex: 1 }}>
              <h4 className="font-heading" style={{ fontSize: '1.2rem', fontWeight: 400, marginBottom: '0.5rem', color: '#3D5A3A' }}>{v.title}</h4>
              <p style={{ fontSize: '0.78rem', lineHeight: 1.6, marginBottom: 0 }}>{v.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 900px) {
          section {
            grid-template-columns: 1fr !important;
            padding: 4rem 1.5rem !important;
            gap: 3rem !important;
          }
          section > div:last-child > div:last-child {
            flex-direction: column !important;
            gap: 1.5rem !important;
          }
        }
      `}</style>
    </section>
  );
}
