const stores = [
  { name: "Song Wat", type: "Flagship", address: "1198 Song Wat Road,\nSamphanthawong, Bangkok", hours: "Daily 11:00 — 19:00", image: "/images/store-songwat.jpg" },
  { name: "Talat Noi", type: "Neighbourhood", address: "Soi Wanit 2,\nSamphanthawong, Bangkok", hours: "Sat — Sun 10:00 — 18:00", image: "/images/store-talatnoi.jpg" },
  { name: "Siam Discovery", type: "Retail Partner", address: "Siam Discovery, 2F\nPathum Wan, Bangkok", hours: "Daily 10:00 — 22:00", image: "/images/store-siam.jpg" },
];

export default function Stores() {
  return (
    <section id="stores" style={{ padding: '8rem 3rem', maxWidth: '1300px', margin: '0 auto' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '4rem' }}>
        <h2 className="font-heading" style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 300 }}>Visit Our Homes</h2>
        <a href="#" className="btn-outline">View All Locations</a>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
        {stores.map((s) => (
          <div key={s.name} style={{ transition: 'transform 0.3s ease', cursor: 'pointer' }} onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-4px)'} onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}>
            <div style={{ width: '100%', aspectRatio: '4/3', marginBottom: '1.5rem', borderRadius: '2px', overflow: 'hidden', position: 'relative' }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={s.image} alt={`${s.name} store`} className="img-fill" />
            </div>
            <div style={{ fontSize: '0.6rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#7A8E70', marginBottom: '0.5rem', fontWeight: 500 }}>{s.type}</div>
            <div className="font-heading" style={{ fontSize: '1.4rem', fontWeight: 400, marginBottom: '0.8rem' }}>{s.name}</div>
            <div style={{ fontSize: '0.82rem', lineHeight: 1.6, color: '#2C2B28', fontWeight: 300, marginBottom: '0.5rem', whiteSpace: 'pre-line' }}>{s.address}</div>
            <div style={{ fontSize: '0.75rem', color: '#D4C9BC' }}>{s.hours}</div>
          </div>
        ))}
      </div>

      <style jsx>{`
        @media (max-width: 900px) {
          section { padding: 4rem 1.5rem !important; }
          section > div:first-child { flex-direction: column !important; align-items: flex-start !important; gap: 1rem !important; }
          section > div:last-child { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
