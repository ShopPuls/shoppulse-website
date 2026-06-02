import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="page-shell">
      <section className="page-hero">
        <p className="eyebrow">About ShopPulse</p>
        <h1>Built for workshops that take their work seriously.</h1>
        <p>
          ShopPulse is designed around real repair flow: job cards, measurements, quotes, invoices,
          client history and the operational details that decide whether a workshop feels in control.
        </p>
      </section>

      <section className="split-section">
        <div>
          <h2>Why it exists</h2>
          <p>
            Many workshops run excellent technical teams but still depend on spreadsheets, paper
            forms and scattered client communication. ShopPulse gives those teams a focused,
            professional platform without forcing them into generic accounting software.
          </p>
        </div>
        <div className="feature-card premium-card">
          <h3>Our direction</h3>
          <p>
            Premium workshop software for hydraulic, engineering, CNC and repair businesses across
            South Africa and beyond.
          </p>
          <Link className="button button-primary" href="/demo">
            Book a Demo
          </Link>
        </div>
      </section>
    </main>
  );
}
