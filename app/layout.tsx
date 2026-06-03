import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import Image from "next/image";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "ShopPulse | Premium Workshop Management Software",
  description:
    "ShopPulse helps hydraulic, engineering and repair workshops manage jobs, clients, quotes, invoices and workshop flow.",
};

const navItems = [
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/demo", label: "Book Demo" },
  { href: "/contact", label: "Contact" },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="site-header">
          <Link href="/" className="brand" aria-label="ShopPulse home">
            <Image
              src="/shoppulse-logo.png"
              alt="ShopPulse"
              width={220}
              height={45}
              className="brand-logo"
              priority
            />
          </Link>
          <nav className="nav">
            {navItems.map((item) => (
              <Link href={item.href} key={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="header-actions">
            <a className="ghost-link" href="https://app.shoppulse.co.za/login">
              Login
            </a>
            <a className="button button-primary" href="https://app.shoppulse.co.za/signup">
              Start Trial
            </a>
          </div>
        </header>
        {children}
        <footer className="footer">
          <div>
            <Link href="/" className="brand footer-brand">
              <Image
                src="/shoppulse-logo.png"
                alt="ShopPulse"
                width={190}
                height={39}
                className="brand-logo"
              />
            </Link>
            <p>Premium workshop management for repair-driven teams.</p>
          </div>
          <div className="footer-links">
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
            <a href="https://app.shoppulse.co.za/login">App Login</a>
          </div>
        </footer>
        <Analytics />
      </body>
    </html>
  );
}
