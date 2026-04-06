"use client";

import { useState } from "react";

export default function Navbar({ onOpenModal }: { onOpenModal: () => void }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-100 bg-warm-white/92 backdrop-blur-[20px] border-b border-charcoal/6">
      <div className="section-container flex justify-between items-center py-5 !max-w-[1440px]">
        <div className="text-[1.35rem] font-medium tracking-[0.12em] text-soft-black lowercase font-[var(--font-body)]">
          onest
        </div>

        {/* Desktop nav */}
        <div className="hidden md:flex gap-10 items-center">
          <a href="#philosophy" className="nav-link">Our Story</a>
          <a href="#scents" className="nav-link">Kindness Scent</a>
          <a href="#products" className="nav-link">Products</a>
          <a href="#stores" className="nav-link">Visit Us</a>
          <button onClick={onOpenModal} className="nav-link cursor-pointer bg-transparent border-none font-[var(--font-body)]">Join Us</button>
          <a href="#products" className="text-[0.7rem] tracking-[0.12em] uppercase px-6 py-2.5 border border-charcoal text-charcoal hover:bg-soft-black hover:text-warm-white transition-all duration-300">
            Shop Now
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 cursor-pointer bg-transparent border-none p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-px bg-charcoal transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[3.5px]" : ""}`} />
          <span className={`block w-6 h-px bg-charcoal transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-px bg-charcoal transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[3.5px]" : ""}`} />
        </button>
      </div>

      {/* Mobile drawer */}
      {menuOpen && (
        <div className="bg-warm-white/98 backdrop-blur-[20px] border-b border-charcoal/6 flex flex-col items-center gap-6 py-8 md:hidden">
          <a href="#philosophy" className="nav-link" onClick={() => setMenuOpen(false)}>Our Story</a>
          <a href="#scents" className="nav-link" onClick={() => setMenuOpen(false)}>Kindness Scent</a>
          <a href="#products" className="nav-link" onClick={() => setMenuOpen(false)}>Products</a>
          <a href="#stores" className="nav-link" onClick={() => setMenuOpen(false)}>Visit Us</a>
          <button onClick={() => { setMenuOpen(false); onOpenModal(); }} className="nav-link cursor-pointer bg-transparent border-none font-[var(--font-body)]">Join Us</button>
          <a href="#products" className="btn-outline" onClick={() => setMenuOpen(false)}>Shop Now</a>
        </div>
      )}

      <style jsx>{`
        .nav-link {
          font-size: 0.72rem;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--color-charcoal);
          text-decoration: none;
          font-weight: 400;
          position: relative;
          transition: color 0.3s;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 1px;
          background: var(--color-pine);
          transition: width 0.3s ease;
        }
        .nav-link:hover::after {
          width: 100%;
        }
        .nav-link:hover {
          color: var(--color-pine);
        }
      `}</style>
    </nav>
  );
}
