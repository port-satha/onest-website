const images = [
  { src: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600&q=80", alt: "Warm home evening" },
  { src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80", alt: "Minimal interior" },
  { src: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&q=80", alt: "Self-care ritual" },
];

export default function Lifestyle() {
  return (
    <section style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', minHeight: '480px' }}>
      {images.map((img) => (
        <div key={img.alt} style={{ overflow: 'hidden', position: 'relative' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={img.src} alt={img.alt} className="img-fill" referrerPolicy="no-referrer" />
        </div>
      ))}

      <style jsx>{`
        @media (max-width: 900px) {
          section { grid-template-columns: 1fr !important; }
          section > div { min-height: 280px; }
        }
      `}</style>
    </section>
  );
}
