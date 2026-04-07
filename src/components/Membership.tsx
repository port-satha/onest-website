export default function Membership({ onOpenModal }: { onOpenModal: () => void }) {
  return (
    <section id="membership" style={{ padding: '6rem 3rem', background: '#3D5A3A', color: '#F6F1EB', textAlign: 'center' }}>
      <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        <h2 className="font-heading" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 300, marginBottom: '1rem' }}>
          Join the onest circle
        </h2>
        <p style={{ fontSize: '0.85rem', lineHeight: 1.7, fontWeight: 300, color: '#A8B5A0', marginBottom: '1rem' }}>
          Be the first to know about new scents, member-only offers, and invitations to evenings at Song Wat. Wherever you are in the world.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '2.5rem', marginBottom: '2.5rem', fontSize: '0.68rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(168,181,160,0.7)' }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <span style={{ color: '#C4A97D', fontSize: '0.8rem' }}>✓</span> Early access to launches
          </span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <span style={{ color: '#C4A97D', fontSize: '0.8rem' }}>✓</span> Birthday rewards
          </span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <span style={{ color: '#C4A97D', fontSize: '0.8rem' }}>✓</span> Members-only events
          </span>
        </div>
        <button
          onClick={onOpenModal}
          className="font-body"
          style={{ display: 'inline-block', padding: '0.95rem 3rem', background: '#F6F1EB', color: '#3D5A3A', border: 'none', fontSize: '0.72rem', letterSpacing: '0.15em', textTransform: 'uppercase', cursor: 'pointer', transition: 'all 0.3s', fontWeight: 500, marginBottom: '3rem' }}
          onMouseEnter={e => { e.currentTarget.style.background = '#C4A97D'; e.currentTarget.style.color = '#1A1918'; }}
          onMouseLeave={e => { e.currentTarget.style.background = '#F6F1EB'; e.currentTarget.style.color = '#3D5A3A'; }}
        >
          Become a Member — Free
        </button>
        <div style={{ width: '40px', height: '1px', background: 'rgba(168,181,160,0.25)', margin: '0 auto 2rem' }} />
        <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem' }}>
          {[
            { label: "Instagram", href: "https://www.instagram.com/onest.care/" },
            { label: "Facebook", href: "https://www.facebook.com/onest.thailand/" },
            { label: "TikTok", href: "https://www.tiktok.com/@onest.care" },
            { label: "LINE", href: "#" },
          ].map(link => (
            <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer"
              style={{ fontSize: '0.7rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#A8B5A0', textDecoration: 'none', transition: 'color 0.3s' }}
              onMouseEnter={e => e.currentTarget.style.color = '#F6F1EB'}
              onMouseLeave={e => e.currentTarget.style.color = '#A8B5A0'}
            >{link.label}</a>
          ))}
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 900px) {
          section { padding: 4rem 1.5rem !important; }
          section > div > div:nth-child(3) { flex-direction: column !important; gap: 0.8rem !important; align-items: center !important; }
        }
      `}</style>
    </section>
  );
}
