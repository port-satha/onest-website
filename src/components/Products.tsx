const products = [
  {
    name: "Ambient Parfum",
    type: "Home Fragrance",
    price: "฿1,490",
    tag: "Bestseller",
    image:
      "https://images.unsplash.com/photo-1629198688000-71f23e745571?w=500&q=80",
  },
  {
    name: "Body Cleanser",
    type: "Everpine",
    price: "฿690",
    tag: "Personal Care",
    image:
      "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?w=500&q=80",
  },
  {
    name: "Perfume Balm",
    type: "Signature Collection",
    price: "฿949",
    tag: "New",
    image:
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=500&q=80",
  },
  {
    name: "Fabric Fragrance",
    type: "Textile Care",
    price: "฿590",
    tag: "Home Care",
    image:
      "https://images.unsplash.com/photo-1600857544200-b2f666a9a2ec?w=500&q=80",
  },
];

export default function Products() {
  return (
    <section id="products" className="px-6 md:px-12 py-16 md:py-32 max-w-[1300px] mx-auto">
      <div className="text-center mb-12 md:mb-20">
        <h2 className="font-[var(--font-heading)] text-[clamp(2rem,3.5vw,3rem)] font-light mb-4">
          Essentials for Elevated Living
        </h2>
        <p className="text-[0.85rem] text-charcoal font-light max-w-[500px] mx-auto leading-[1.7]">
          Home care that feels like self-care. Body care that honours your
          ritual. Every product designed for a specific recharge moment.
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
        {products.map((p) => (
          <div
            key={p.name}
            className="cursor-pointer transition-transform duration-300 hover:-translate-y-1"
          >
            <div className="aspect-[3/4] mb-5 rounded-sm relative overflow-hidden bg-cream">
              <span className="absolute top-3 left-3 text-[0.55rem] tracking-[0.14em] uppercase text-warm-white bg-soft-black/50 backdrop-blur-[8px] px-3 py-1 z-3">
                {p.tag}
              </span>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={p.image} alt={p.name} />
            </div>
            <div className="font-[var(--font-heading)] text-[1.15rem] font-normal mb-1">
              {p.name}
            </div>
            <div className="text-[0.72rem] text-stone tracking-[0.08em] mb-2">
              {p.type}
            </div>
            <div className="text-[0.85rem] font-medium">{p.price}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
