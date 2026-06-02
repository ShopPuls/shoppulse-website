import Image from "next/image";
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

const productShots = [
  {
    title: "Revenue dashboard",
    copy: "Month-by-month revenue and job status at a glance.",
    image: "/product/dashboard-revenue.png",
  },
  {
    title: "Job control",
    copy: "Search, filter, open and clean up test jobs from one table.",
    image: "/product/jobs-list.png",
  },
  {
    title: "Company branding",
    copy: "Upload and control dashboard and PDF logos per workspace.",
    image: "/product/branding-settings.png",
  },
  {
    title: "Revenue reports",
    copy: "Review revenue by month, year and client without spreadsheet cleanup.",
    image: "/product/reports-revenue.png",
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
          <div className="browser-shell hero-screenshot-shell">
            <div className="browser-bar">
              <span />
              <span />
              <span />
              <strong>app.shoppulse.co.za</strong>
            </div>
            <div className="hero-live-frame">
              <Image
                src="/product/dashboard-revenue.png"
                alt="ShopPulse dashboard showing monthly revenue and job status"
                width={1900}
                height={900}
                priority
              />
              <div className="floating-insight insight-one">
                <small>Current month</small>
                <strong>Revenue tracked</strong>
              </div>
              <div className="floating-insight insight-two">
                <small>Status</small>
                <strong>Live workshop view</strong>
              </div>
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

      <section className="live-product-section">
        <div className="live-product-copy">
          <p className="eyebrow">Live Product Views</p>
          <h2>Show clients the actual system before they even sign in.</h2>
          <p>
            Instead of a video placeholder, the website now uses real ShopPulse screens with a subtle
            animated showcase. It feels polished now, and we can still add a proper intro video later.
          </p>
          <div className="hero-actions">
            <Link className="button button-light" href="/demo">
              Request a Walkthrough
            </Link>
          </div>
        </div>
        <div className="screenshot-orbit" aria-label="ShopPulse product screenshots">
          {productShots.map((shot, index) => (
            <article className={`screenshot-card shot-${index + 1}`} key={shot.title}>
              <div className="screenshot-image">
                <Image
                  src={shot.image}
                  alt={`ShopPulse ${shot.title.toLowerCase()} screen`}
                  width={1900}
                  height={900}
                />
              </div>
              <div>
                <h3>{shot.title}</h3>
                <p>{shot.copy}</p>
              </div>
            </article>
          ))}
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
