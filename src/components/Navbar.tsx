"use client";

import { useState } from "react";

export default function Navbar({ onOpenModal }: { onOpenModal: () => void }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100]" style={{ background: 'rgba(254,252,249,0.92)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', borderBottom: '1px solid rgba(44,43,40,0.06)' }}>
      <div className="max-w-[1440px] mx-auto flex justify-between items-center" style={{ padding: '1.5rem 3rem' }}>
        <div className="font-body" style={{ fontSize: '1.35rem', fontWeight: 500, letterSpacing: '0.12em', color: '#1A1918', textTransform: 'lowercase' as const }}>
          onest
        </div>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center" style={{ gap: '2.5rem' }}>
          <a href="#philosophy" className="nav-link">Our Story</a>
          <a href="#scents" className="nav-link">Kindness Scent</a>
          <a href="#products" className="nav-link">Products</a>
          <a href="#stores" className="nav-link">Visit Us</a>
          <button onClick={onOpenModal} className="nav-link">Join Us</button>
          <a href="#products" className="nav-link" style={{ fontSize: '0.7rem', letterSpacing: '0.12em', padding: '0.6rem 1.6rem', border: '1px solid #2C2B28', transition: 'all 0.3s ease' }} onMouseEnter={e => { e.currentTarget.style.background = '#1A1918'; e.currentTarget.style.color = '#FEFCF9'; }} onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#2C2B28'; }}>
            Shop Now
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col cursor-pointer bg-transparent border-none p-2"
          style={{ gap: '6px' }}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className="block bg-charcoal transition-all duration-300" style={{ width: '24px', height: '1px', transform: menuOpen ? 'rotate(45deg) translateY(3.5px)' : 'none' }} />
          <span className="block bg-charcoal transition-all duration-300" style={{ width: '24px', height: '1px', opacity: menuOpen ? 0 : 1 }} />
          <span className="block bg-charcoal transition-all duration-300" style={{ width: '24px', height: '1px', transform: menuOpen ? 'rotate(-45deg) translateY(-3.5px)' : 'none' }} />
        </button>
      </div>

      {/* Mobile drawer */}
      {menuOpen && (
        <div className="flex flex-col items-center py-8 md:hidden" style={{ gap: '1.5rem', background: 'rgba(254,252,249,0.98)', backdropFilter: 'blur(20px)', borderBottom: '1px solid rgba(44,43,40,0.06)' }}>
          <a href="#philosophy" className="nav-link" onClick={() => setMenuOpen(false)}>Our Story</a>
          <a href="#scents" className="nav-link" onClick={() => setMenuOpen(false)}>Kindness Scent</a>
          <a href="#products" className="nav-link" onClick={() => setMenuOpen(false)}>Products</a>
          <a href="#stores" className="nav-link" onClick={() => setMenuOpen(false)}>Visit Us</a>
          <button onClick={() => { setMenuOpen(false); onOpenModal(); }} className="nav-link">Join Us</button>
          <a href="#products" className="btn-outline" onClick={() => setMenuOpen(false)}>Shop Now</a>
        </div>
      )}
    </nav>
  );
}
