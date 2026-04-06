const images = [
  {
    src: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600&q=80",
    alt: "Warm home evening",
  },
  {
    src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80",
    alt: "Minimal interior",
  },
  {
    src: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&q=80",
    alt: "Self-care ritual",
  },
];

export default function Lifestyle() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 max-w-[1920px] mx-auto">
      {images.map((img) => (
        <div key={img.alt} className="overflow-hidden relative aspect-[16/10]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={img.src}
            alt={img.alt}
            className="img-fill"
            referrerPolicy="no-referrer"
          />
        </div>
      ))}
    </section>
  );
}
