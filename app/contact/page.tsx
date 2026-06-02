import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="page-shell">
      <section className="page-hero">
        <p className="eyebrow">Contact</p>
        <h1>Let us talk about your workshop.</h1>
        <p>
          Tell us what kind of workshop you run and what you want to improve first. We will help you
          find the right setup.
        </p>
      </section>

      <section className="contact-card">
        <h2>Start the conversation</h2>
        <p>Email us at:</p>
        <a href="mailto:info@shoppulse.co.za">info@shoppulse.co.za</a>
        <div className="hero-actions">
          <Link className="button button-primary" href="/demo">
            Book a Demo
          </Link>
          <a className="button button-secondary" href="https://app.shoppulse.co.za/signup">
            Start Trial
          </a>
        </div>
      </section>
    </main>
  );
}
