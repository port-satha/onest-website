"use client";

const scents = [
  {
    number: "01",
    moment: "Evening Wind-Down",
    name: "Everpine",
    desc: "Forest floor after rain. For grounding your evening, letting the day dissolve into stillness.",
    gradient: "rgba(61,90,58,.35)",
  },
  {
    number: "02",
    moment: "Gentle Beginnings",
    name: "Chalene Rose",
    desc: "Soft rose and warm wood. For mornings that start without urgency, with quiet confidence.",
    gradient: "rgba(232,213,206,.25)",
  },
  {
    number: "03",
    moment: "Bright Clarity",
    name: "Neroli Garden",
    desc: "Citrus blossom and green leaf. For moments when you need lightness and fresh perspective.",
    gradient: "rgba(229,212,176,.25)",
  },
  {
    number: "04",
    moment: "Deep Restoration",
    name: "White Tea Retreat",
    desc: "Clean white tea and linen. For washing away everything and starting completely new.",
    gradient: "rgba(168,181,160,.25)",
  },
];

export default function Scents() {
  return (
    <section id="scents" className="bg-soft-black text-cream">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_1.2fr] max-w-[1920px] mx-auto">
        <div className="px-6 md:px-16 lg:px-24 py-16 md:py-24 flex flex-col justify-center">
          <h2 className="font-[var(--font-heading)] text-[clamp(2rem,3.5vw,3rem)] font-light leading-[1.2] mb-6">
            The Kindness Scent<br />Collection
          </h2>
          <p className="text-[0.85rem] leading-[1.7] max-w-[380px] font-light text-stone">
            Each scent is designed for a specific moment of recharge — not just
            to smell good, but to shift how you feel in your space.
          </p>
        </div>
        <div className="min-h-[320px] md:min-h-[420px] overflow-hidden relative">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=900&q=80"
            alt="Botanical fragrance ingredients"
            className="img-fill"
            style={{ objectPosition: "center 40%" }}
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-px bg-white/5 max-w-[1920px] mx-auto">
        {scents.map((scent) => (
          <div
            key={scent.number}
            className="group flex-1 px-6 md:px-10 py-8 md:py-12 relative overflow-hidden transition-all duration-500 cursor-pointer min-h-[180px] md:min-h-[300px] flex flex-col justify-end hover:bg-white/2"
          >
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{
                background: `linear-gradient(180deg, transparent, ${scent.gradient})`,
              }}
            />
            <span className="font-[var(--font-heading)] text-[4rem] font-light text-white/5 absolute top-8 left-6 md:left-10">
              {scent.number}
            </span>
            <div className="text-[0.6rem] tracking-[0.16em] uppercase text-golden mb-4 relative z-1">
              {scent.moment}
            </div>
            <div className="font-[var(--font-heading)] text-[1.6rem] font-normal mb-2 relative z-1">
              {scent.name}
            </div>
            <p className="text-[0.82rem] leading-[1.7] text-stone font-light relative z-1 md:max-h-0 md:opacity-0 md:group-hover:max-h-[100px] md:group-hover:opacity-100 transition-all duration-500 overflow-hidden">
              {scent.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
