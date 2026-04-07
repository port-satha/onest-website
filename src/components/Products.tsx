const products = [
  { name: "Ambient Parfum", type: "Home Fragrance", price: "฿1,490", tag: "Bestseller", image: "https://images.unsplash.com/photo-1602928321679-560bb453f190?w=500&q=80" },
  { name: "Body Cleanser", type: "Everpine", price: "฿690", tag: "Personal Care", image: "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?w=500&q=80" },
  { name: "Perfume Balm", type: "Signature Collection", price: "฿949", tag: "New", image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=500&q=80" },
  { name: "Fabric Fragrance", type: "Textile Care", price: "฿590", tag: "Home Care", image: "https://images.unsplash.com/photo-1600857544200-b2f666a9a2ec?w=500&q=80" },
];

export default function Products() {
  return (
    <section id="products" style={{ padding: '8rem 3rem', maxWidth: '1300px', margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
        <h2 className="font-heading" style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 300, marginBottom: '1rem' }}>
          Essentials for Elevated Living
        </h2>
        <p style={{ fontSize: '0.85rem', color: '#2C2B28', fontWeight: 300, maxWidth: '500px', margin: '0 auto', lineHeight: 1.7 }}>
          Home care that feels like self-care. Body care that honours your ritual. Every product designed for a specific recharge moment.
        </p>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2rem' }}>
        {products.map((p) => (
          <div key={p.name} style={{ cursor: 'pointer', transition: 'transform 0.3s ease' }} onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-4px)'} onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}>
            <div style={{ aspectRatio: '3/4', marginBottom: '1.2rem', borderRadius: '2px', position: 'relative', overflow: 'hidden', background: '#F6F1EB' }}>
              <span style={{ position: 'absolute', top: '0.8rem', left: '0.8rem', fontSize: '0.55rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#FEFCF9', background: 'rgba(26,25,24,0.5)', backdropFilter: 'blur(8px)', padding: '0.3rem 0.7rem', zIndex: 3 }}>
                {p.tag}
              </span>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={p.image} alt={p.name} className="img-fill" referrerPolicy="no-referrer" />
            </div>
            <div className="font-heading" style={{ fontSize: '1.15rem', fontWeight: 400, marginBottom: '0.3rem' }}>{p.name}</div>
            <div style={{ fontSize: '0.72rem', color: '#D4C9BC', letterSpacing: '0.08em', marginBottom: '0.5rem' }}>{p.type}</div>
            <div style={{ fontSize: '0.85rem', fontWeight: 500 }}>{p.price}</div>
          </div>
        ))}
      </div>

      <style jsx>{`
        @media (max-width: 900px) {
          section { padding: 4rem 1.5rem !important; }
          section > div:last-child { grid-template-columns: repeat(2, 1fr) !important; gap: 1.5rem !important; }
        }
      `}</style>
    </section>
  );
}
