const zones = [
  { icon: "🇹🇭", title: "Thailand", lines: ["Free shipping over ฿1,500", "Delivery in 2–3 days"] },
  { icon: "🌏", title: "Asia Pacific", lines: ["Singapore, Taiwan, Japan, HK", "Delivery in 5–7 days"] },
  { icon: "✈️", title: "Worldwide", lines: ["We ship to 50+ countries", "Delivery in 7–14 days"] },
];

export default function ShippingBanner() {
  return (
    <div style={{ padding: '3rem', background: '#F6F1EB', display: 'flex', justifyContent: 'center', gap: '4rem', alignItems: 'center' }}>
      {zones.map((z) => (
        <div key={z.title} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div style={{ width: '44px', height: '44px', border: '1.5px solid #3D5A3A', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.1rem', flexShrink: 0 }}>
            {z.icon}
          </div>
          <div>
            <h4 className="font-heading" style={{ fontSize: '1rem', fontWeight: 500, marginBottom: '0.15rem', color: '#1A1918' }}>{z.title}</h4>
            {z.lines.map(line => (
              <p key={line} style={{ fontSize: '0.72rem', color: '#D4C9BC', fontWeight: 300, lineHeight: 1.4, margin: 0 }}>{line}</p>
            ))}
          </div>
        </div>
      ))}

      <style jsx>{`
        @media (max-width: 900px) {
          div:first-child { flex-direction: column !important; gap: 1.5rem !important; padding: 2rem 1.5rem !important; }
        }
      `}</style>
    </div>
  );
}
