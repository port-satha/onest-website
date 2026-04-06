const values = [
  {
    title: "Intentional",
    desc: "Every product begins with the experience it serves — never the other way around.",
  },
  {
    title: "Plant-Based",
    desc: "Scientifically formulated with natural ingredients, crafted at our Ratchaburi factory.",
  },
  {
    title: "Thai-Made",
    desc: "Rooted in Thai craftsmanship and the quiet pride of making something with care.",
  },
];

export default function Philosophy() {
  return (
    <section id="philosophy" className="py-16 md:py-32">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.15fr] gap-12 md:gap-20 items-center">
          <div className="w-full aspect-[4/5] rounded-sm overflow-hidden relative">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1556760544-74068565f05c?w=800&q=80"
              alt="Crafting natural botanical products"
              className="img-fill"
              referrerPolicy="no-referrer"
            />
          </div>
          <div>
            <h2 className="font-[var(--font-heading)] text-[clamp(2rem,3.5vw,3rem)] font-light leading-[1.2] mb-8 text-soft-black">
              Your home is your<br />recharge station.
            </h2>
            <p className="text-[0.95rem] leading-[1.8] text-charcoal font-light mb-6">
              onest was born during a time when two founders — working, building,
              raising a family — realised their home was the one place that gave them
              energy to keep going.
            </p>
            <p className="text-[0.95rem] leading-[1.8] text-charcoal font-light mb-0">
              We believe that when your home feels right, you go out into the world
              with more to give. onest exists to help purposeful people transform
              daily routines into moments of restoration.
            </p>
            <div className="flex flex-col md:flex-row gap-6 md:gap-8 mt-10 pt-10 border-t border-charcoal/8">
              {values.map((v) => (
                <div key={v.title} className="flex-1">
                  <h4 className="font-[var(--font-heading)] text-[1.2rem] font-normal mb-2 text-pine">
                    {v.title}
                  </h4>
                  <p className="text-[0.78rem] leading-[1.6]">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
