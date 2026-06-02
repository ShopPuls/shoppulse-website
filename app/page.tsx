import Link from "next/link";

const appUrl = "https://app.shoppulse.co.za";

const industries = [
  "Hydraulic workshops",
  "Engineering teams",
  "CNC shops",
  "Repair centres",
  "Field-service workshops",
];

const outcomes = [
  {
    value: "1 system",
    label: "for jobs, clients, quotes and invoices",
  },
  {
    value: "7 days",
    label: "free trial before billing starts",
  },
  {
    value: "R 499+",
    label: "monthly plans for growing workshops",
  },
];

const productCards = [
  {
    eyebrow: "Workshop Control",
    title: "Know exactly where every job stands.",
    copy: "Track inspection, repair, quote, invoice and collection stages from one clean operating view.",
  },
  {
    eyebrow: "Client-Ready Documents",
    title: "Send premium quotes and invoices.",
    copy: "Generate branded PDFs with VAT, totals and clean work summaries without exposing internal markup.",
  },
  {
    eyebrow: "Team Access",
    title: "Give each role the right view.",
    copy: "Owners, admins, managers, technicians and viewers get access that matches the way your workshop works.",
  },
];

const features = [
  "Job cards with repair lines",
  "Client database and imports",
  "Custom job stages",
  "Quote and invoice exports",
  "Company branding",
  "Role-based permissions",
  "Monthly revenue reporting",
  "Billing and subscription status",
  "Support assistant bubble",
];

const workflow = [
  "Create the job card",
  "Assign the client and job type",
  "Capture measurements and repairs",
  "Approve quote and invoice",
  "Track status through collection",
];

const plans = [
  { name: "Starter", price: "R 499", users: "3 users", jobs: "100 jobs/month" },
  { name: "Workshop Pro", price: "R 999", users: "10 users", jobs: "Unlimited jobs" },
  { name: "Enterprise", price: "R 1 999", users: "25 users", jobs: "Unlimited jobs" },
];

export default function HomePage() {
  return (
    <main>
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Premium Workshop Management SaaS</p>
          <h1>Turn workshop chaos into a clean operating system.</h1>
          <p className="hero-text">
            ShopPulse helps hydraulic, engineering, CNC and repair workshops manage job cards,
            clients, quotes, invoices, stages, teams and revenue from one polished platform.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href={`${appUrl}/signup`}>
              Start 7-Day Trial
            </a>
            <Link className="button button-secondary" href="/demo">
              Book a Demo
            </Link>
          </div>
          <div className="hero-proof">
            {outcomes.map((item) => (
              <div key={item.value}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="app-showcase" aria-label="ShopPulse product preview">
          <div className="showcase-glow" />
          <div className="browser-shell">
            <div className="browser-bar">
              <span />
              <span />
              <span />
              <strong>app.shoppulse.co.za</strong>
            </div>
            <div className="product-frame">
              <aside className="mock-sidebar">
                <div className="mock-logo">SP</div>
                <span className="active" />
                <span />
                <span />
                <span />
              </aside>
              <section className="mock-main">
                <div className="mock-header">
                  <div>
                    <small>Workshop Job</small>
                    <h2>SP-1042</h2>
                  </div>
                  <button>Save Job</button>
                </div>
                <div className="metric-row">
                  <div>
                    <small>Stage</small>
                    <strong>Ready for Collection</strong>
                  </div>
                  <div>
                    <small>Status</small>
                    <strong>Completed</strong>
                  </div>
                  <div>
                    <small>Total</small>
                    <strong>R 12 480</strong>
                  </div>
                </div>
                <div className="job-table">
                  <div className="table-head">
                    <span>No</span>
                    <span>Description</span>
                    <span>Repairs</span>
                    <span>Total</span>
                  </div>
                  {[
                    ["1", "Barrel - ID x OD x L", "Chrome", "R 3 200"],
                    ["2", "Gland seal land", "Machining", "R 1 850"],
                    ["3", "Shaft - OD x L", "Strip and polish", "R 2 900"],
                  ].map((row) => (
                    <div className="table-row" key={row[0]}>
                      {row.map((cell) => (
                        <span key={cell}>{cell}</span>
                      ))}
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>

      <section className="logo-strip" aria-label="Workshop types">
        <span>Built for</span>
        {industries.map((industry) => (
          <strong key={industry}>{industry}</strong>
        ))}
      </section>

      <section className="section product-section" id="features">
        <div className="section-heading center-heading">
          <p className="eyebrow">Why ShopPulse</p>
          <h2>The front office, workshop floor and billing view finally speak the same language.</h2>
          <p>
            Replace scattered spreadsheets and paper job cards with a system that looks professional,
            protects company data and makes daily workshop work easier to follow.
          </p>
        </div>
        <div className="product-card-grid">
          {productCards.map((card) => (
            <article className="product-card" key={card.title}>
              <p className="card-eyebrow">{card.eyebrow}</p>
              <h3>{card.title}</h3>
              <p>{card.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="dark-feature-band">
        <div>
          <p className="eyebrow">Product Walkthrough</p>
          <h2>A premium system your clients can feel in every quote.</h2>
          <p>
            Add your introduction video here when it is ready. For launch, this section already shows
            buyers what ShopPulse does: structure the work, present the brand and keep the business
            moving.
          </p>
          <div className="hero-actions">
            <Link className="button button-light" href="/demo">
              Request a Walkthrough
            </Link>
          </div>
        </div>
        <div className="video-card">
          <button className="play-button" aria-label="Play ShopPulse introduction video">
            Play
          </button>
          <div className="video-lines">
            <span />
            <span />
            <span />
          </div>
        </div>
      </section>

      <section className="split-section">
        <div>
          <p className="eyebrow">Workshop Flow</p>
          <h2>From first inspection to final invoice.</h2>
          <p>
            A job can move from inspection to repair, quote approval, invoice status and collection
            without losing the context your team needs.
          </p>
        </div>
        <ol className="timeline">
          {workflow.map((item, index) => (
            <li key={item}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              {item}
            </li>
          ))}
        </ol>
      </section>

      <section className="section">
        <div className="section-heading center-heading">
          <p className="eyebrow">Feature Set</p>
          <h2>Everything a serious repair-driven workshop needs to get organised.</h2>
        </div>
        <div className="pill-grid">
          {features.map((feature) => (
            <span key={feature}>{feature}</span>
          ))}
        </div>
      </section>

      <section className="pricing-preview" id="pricing">
        <div className="section-heading">
          <p className="eyebrow">Pricing</p>
          <h2>Start lean. Upgrade as your workshop grows.</h2>
          <p>Every plan starts with a 7-day trial and can be managed from the ShopPulse billing page.</p>
        </div>
        <div className="pricing-preview-grid">
          {plans.map((plan) => (
            <article className="pricing-mini" key={plan.name}>
              <h3>{plan.name}</h3>
              <strong>{plan.price}<span>/mo</span></strong>
              <p>{plan.users} included. {plan.jobs}.</p>
            </article>
          ))}
        </div>
        <div className="hero-actions">
          <Link className="button button-secondary" href="/pricing">
            View Plans
          </Link>
          <a className="button button-primary" href={`${appUrl}/signup`}>
            Start Free Trial
          </a>
        </div>
      </section>

      <section className="cta-panel">
        <p className="eyebrow">Ready To Launch Your Workshop OS</p>
        <h2>Give your team a sharper way to run jobs, clients and documents.</h2>
        <p>
          Start with the trial, test it with real job cards, and bring your workshop into one clean
          system.
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href={`${appUrl}/signup`}>
            Start 7-Day Trial
          </a>
          <a className="button button-secondary" href={`${appUrl}/login`}>
            App Login
          </a>
        </div>
      </section>
    </main>
  );
}
