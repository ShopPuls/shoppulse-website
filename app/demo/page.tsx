export default function DemoPage() {
  return (
    <main className="page-shell">
      <section className="page-hero">
        <p className="eyebrow">Book Demo</p>
        <h1>See ShopPulse with your workshop flow in mind.</h1>
        <p>
          A short demo is the best way to map ShopPulse to your job cards, quoting process, team
          roles and client handover.
        </p>
      </section>

      <section className="contact-card">
        <h2>Request a demo</h2>
        <p>
          Send your name, company and workshop type to{" "}
          <a href="mailto:info@shoppulse.co.za">info@shoppulse.co.za</a>.
        </p>
        <p>We will come back to you with the next available demo slot.</p>
        <a className="button button-primary" href="mailto:info@shoppulse.co.za?subject=ShopPulse demo request">
          Email Demo Request
        </a>
      </section>
    </main>
  );
}
