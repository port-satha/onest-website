export default function Ritual() {
  return (
    <section className="py-16 md:py-24 bg-warm-white text-center">
      <div className="section-container">
        <div className="max-w-[700px] mx-auto">
          <div className="text-[0.6rem] tracking-[0.25em] uppercase text-deep-sage mb-8 font-medium">
            The Evening Ritual
          </div>
          <h2 className="font-[var(--font-heading)] text-[clamp(2rem,4vw,3.5rem)] font-light leading-[1.25] mb-8 text-soft-black">
            Recharge tonight.<br />Create tomorrow.
          </h2>
          <p className="text-[0.95rem] leading-[1.8] text-charcoal font-light mb-10">
            The most productive thing you can do is rest well. onest helps you turn
            your evening wind-down into a ritual that restores your energy — so you
            wake up ready to build, create, and give.
          </p>
          <a href="#" className="btn-primary">
            Discover Your Ritual
          </a>
        </div>
      </div>
    </section>
  );
}
