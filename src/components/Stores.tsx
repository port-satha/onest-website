const stores = [
  {
    name: "Song Wat",
    type: "Flagship",
    address: "1198 Song Wat Road,\nSamphanthawong, Bangkok",
    hours: "Daily 11:00 — 19:00",
    image:
      "https://images.unsplash.com/photo-1604709177225-055f99402ea3?w=600&q=80",
  },
  {
    name: "Talat Noi",
    type: "Neighbourhood",
    address: "Soi Wanit 2,\nSamphanthawong, Bangkok",
    hours: "Sat — Sun 10:00 — 18:00",
    image:
      "https://images.unsplash.com/photo-1615874959474-d609969a20ed?w=600&q=80",
  },
  {
    name: "Siam Discovery",
    type: "Retail Partner",
    address: "Siam Discovery, 2F\nPathum Wan, Bangkok",
    hours: "Daily 10:00 — 22:00",
    image:
      "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=600&q=80",
  },
];

export default function Stores() {
  return (
    <section id="stores" className="py-16 md:py-32">
      <div className="section-container">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 md:mb-16 gap-4">
          <h2 className="font-[var(--font-heading)] text-[clamp(2rem,3.5vw,3rem)] font-light">
            Visit Our Homes
          </h2>
          <a href="#" className="btn-outline">
            View All Locations
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stores.map((s) => (
            <div
              key={s.name}
              className="transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="w-full aspect-[4/3] mb-6 rounded-sm overflow-hidden relative">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={s.image}
                  alt={`${s.name} store`}
                  className="img-fill"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="text-[0.6rem] tracking-[0.15em] uppercase text-deep-sage mb-2 font-medium">
                {s.type}
              </div>
              <div className="font-[var(--font-heading)] text-[1.4rem] font-normal mb-3">
                {s.name}
              </div>
              <div className="text-[0.82rem] leading-[1.6] text-charcoal font-light mb-2 whitespace-pre-line">
                {s.address}
              </div>
              <div className="text-[0.75rem] text-stone">{s.hours}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
