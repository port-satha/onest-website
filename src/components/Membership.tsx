export default function Membership({
  onOpenModal,
}: {
  onOpenModal: () => void;
}) {
  return (
    <section id="membership" className="px-6 md:px-12 py-16 md:py-24 bg-pine text-cream text-center">
      <div className="max-w-[600px] mx-auto">
        <h2 className="font-[var(--font-heading)] text-[clamp(1.8rem,3vw,2.5rem)] font-light mb-4">
          Join the onest circle
        </h2>
        <p className="text-[0.85rem] leading-[1.7] font-light text-sage mb-4">
          Be the first to know about new scents, member-only offers, and
          invitations to evenings at Song Wat. Wherever you are in the world.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-3 md:gap-10 mb-10 text-[0.68rem] tracking-[0.1em] uppercase text-sage/70 items-center">
          <span className="flex items-center gap-1.5">
            <span className="text-golden text-[0.8rem]">✓</span> Early access
            to launches
          </span>
          <span className="flex items-center gap-1.5">
            <span className="text-golden text-[0.8rem]">✓</span> Birthday
            rewards
          </span>
          <span className="flex items-center gap-1.5">
            <span className="text-golden text-[0.8rem]">✓</span> Members-only
            events
          </span>
        </div>
        <button
          onClick={onOpenModal}
          className="inline-block px-12 py-4 bg-cream text-pine border-none font-[var(--font-body)] text-[0.72rem] tracking-[0.15em] uppercase cursor-pointer transition-all duration-300 font-medium mb-12 hover:bg-golden hover:text-soft-black"
        >
          Become a Member — Free
        </button>
        <div className="w-10 h-px bg-sage/25 mx-auto mb-8" />
        <div className="flex justify-center gap-8">
          <a
            href="https://www.instagram.com/onest.care/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[0.7rem] tracking-[0.12em] uppercase text-sage no-underline transition-colors duration-300 hover:text-cream"
          >
            Instagram
          </a>
          <a
            href="https://www.facebook.com/onest.thailand/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[0.7rem] tracking-[0.12em] uppercase text-sage no-underline transition-colors duration-300 hover:text-cream"
          >
            Facebook
          </a>
          <a
            href="https://www.tiktok.com/@onest.care"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[0.7rem] tracking-[0.12em] uppercase text-sage no-underline transition-colors duration-300 hover:text-cream"
          >
            TikTok
          </a>
          <a
            href="#"
            className="text-[0.7rem] tracking-[0.12em] uppercase text-sage no-underline transition-colors duration-300 hover:text-cream"
          >
            LINE
          </a>
        </div>
      </div>
    </section>
  );
}
