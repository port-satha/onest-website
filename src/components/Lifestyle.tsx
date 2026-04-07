const images = [
  { src: "/images/lifestyle-evening.jpg", alt: "Warm home evening" },
  { src: "/images/lifestyle-interior.jpg", alt: "Minimal interior" },
  { src: "/images/lifestyle-selfcare.jpg", alt: "Self-care ritual" },
];

export default function Lifestyle() {
  return (
    <section style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', minHeight: '480px' }}>
      {images.map((img) => (
        <div key={img.alt} style={{ overflow: 'hidden', position: 'relative' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={img.src} alt={img.alt} className="img-fill" />
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
