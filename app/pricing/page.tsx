const plans = [
  {
    name: "Starter",
    price: "R 499",
    description: "For small workshops getting job cards and clients under control.",
    features: ["3 users included", "100 jobs/month", "Client database", "Quote and invoice PDFs", "Core reporting"],
  },
  {
    name: "Workshop Pro",
    price: "R 999",
    description: "For growing teams that need stronger reporting, branding and photos.",
    featured: true,
    features: [
      "10 users included",
      "Unlimited jobs",
      "Custom branding",
      "Job photos",
      "Custom stages",
      "Diagnostics assistant",
    ],
  },
  {
    name: "Enterprise",
    price: "R 1 999",
    description: "For larger workshops and multi-branch operations.",
    features: [
      "25 users included",
      "Unlimited jobs",
      "Advanced reporting",
      "Multi-branch ready",
      "Priority onboarding",
      "Premium support",
    ],
  },
];

export default function PricingPage() {
  return (
    <main className="page-shell">
      <section className="page-hero">
        <p className="eyebrow">Pricing</p>
        <h1>Plans that scale with the workshop.</h1>
        <p>
          Start with a 7-day trial, choose the plan that fits your team, and manage billing from the
          ShopPulse app.
        </p>
      </section>

      <section className="pricing-cards">
        {plans.map((plan) => (
          <article className={plan.featured ? "pricing-card featured" : "pricing-card"} key={plan.name}>
            <p className="plan-name">{plan.name}</p>
            <h2>
              {plan.price}
              <span>/mo</span>
            </h2>
            <p>{plan.description}</p>
            <ul>
              {plan.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
            <a className="button button-primary" href="https://app.shoppulse.co.za/signup">
              Start 7-Day Trial
            </a>
          </article>
        ))}
      </section>
    </main>
  );
}
