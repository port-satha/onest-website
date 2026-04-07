const items = [
  "Plant-Based",
  "Thai-Crafted",
  "Kindness Scent",
  "Own Factory in Ratchaburi",
  "✈ Worldwide Shipping",
];

export default function BrandBar() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '3.5rem', padding: '1.8rem 3rem', background: '#1A1918', color: 'rgba(212,201,188,0.45)', fontSize: '0.6rem', letterSpacing: '0.22em', textTransform: 'uppercase' }}>
      {items.map((item, i) => (
        <span key={item} style={{ display: 'flex', alignItems: 'center', gap: '3.5rem' }}>
          {i > 0 && (
            <span style={{ width: '3px', height: '3px', borderRadius: '50%', background: 'rgba(212,201,188,0.25)', flexShrink: 0 }} />
          )}
          <span>{item}</span>
        </span>
      ))}

      <style jsx>{`
        @media (max-width: 900px) {
          div {
            gap: 1rem !important;
            font-size: 0.45rem !important;
            flex-wrap: wrap;
            padding: 1.2rem 1.5rem !important;
          }
          div > span { gap: 1rem !important; }
        }
      `}</style>
    </div>
  );
}
