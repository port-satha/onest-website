export default function Footer() {
  return (
    <footer style={{ padding: '3rem', background: '#1A1918', display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: 'rgba(212,201,188,0.4)', fontSize: '0.7rem', letterSpacing: '0.08em' }}>
      <span style={{ fontWeight: 500, letterSpacing: '0.12em', color: 'rgba(212,201,188,0.6)' }}>onest</span>
      <span>Crafted Home &amp; Body Care for Elevated Living</span>
      <span>&copy; 2026 Kind Collective Co., Ltd.</span>

      <style jsx>{`
        @media (max-width: 900px) {
          footer { flex-direction: column !important; gap: 1rem !important; text-align: center !important; padding: 2rem 1.5rem !important; }
        }
      `}</style>
    </footer>
  );
}
