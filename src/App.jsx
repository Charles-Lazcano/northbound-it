import { useState } from 'react';
import GhostFibers from './components/GhostFibers';

const services = [
  {
    title: 'Managed IT',
    body: 'Proactive monitoring, patching, and maintenance for every device on your network, so problems get fixed before they turn into downtime.',
    icon: 'M4 5h16v10H4zM8 19h8M12 15v4'
  },
  {
    title: 'Cybersecurity',
    body: 'Endpoint protection, email filtering, MFA rollout, and security awareness training that close the gaps attackers look for.',
    icon: 'M12 3l7 3v6c0 4.5-3 8-7 9-4-1-7-4.5-7-9V6z'
  },
  {
    title: 'Cloud & Microsoft 365',
    body: 'Migrations, licensing, and day-to-day administration of Microsoft 365, Azure, and Google Workspace.',
    icon: 'M7 18a4 4 0 010-8 5 5 0 019.6-1.5A4 4 0 1117 18z'
  },
  {
    title: 'Help Desk',
    body: 'Friendly, US-based support by phone, email, or portal. Your team talks to technicians who already know your setup.',
    icon: 'M4 13a8 8 0 0116 0v4a2 2 0 01-2 2h-1v-6h3M4 13v4a2 2 0 002 2h1v-6H4'
  },
  {
    title: 'Backup & Recovery',
    body: 'Automated, tested backups of servers, endpoints, and cloud data, with a written recovery plan for when things go wrong.',
    icon: 'M4 12a8 8 0 1 0 2.3-5.7M4 4v4h4'
  },
  {
    title: 'Compliance & vCIO',
    body: 'Technology roadmaps, budgeting, and support for HIPAA, PCI, and cyber-insurance requirements from a strategic advisor.',
    icon: 'M9 5h10v14H5V9zM9 5v4H5M9 13h6M9 16h4'
  }
];

const industries = [
  {
    title: 'IT for Law Firms',
    body: 'Secure document management, client confidentiality, and reliable access to case files and practice software.',
    icon: 'M12 4v16M5 20h14M6 8h12M6 8l-3 6a3 3 0 006 0zM18 8l-3 6a3 3 0 006 0z'
  },
  {
    title: 'IT for Commercial Real Estate',
    body: 'Connected offices, property management platforms, and secure deal data across every site you manage.',
    icon: 'M4 20V8l6-4v16M10 20V10h10v10M3 20h18M13 13h1M17 13h1M13 16h1M17 16h1'
  },
  {
    title: 'IT for Healthcare',
    body: 'HIPAA-ready infrastructure, EHR uptime, and protected patient data for practices and clinics.',
    icon: 'M12 20s-7-4.5-7-10a4 4 0 017-2.6A4 4 0 0119 10c0 5.5-7 10-7 10zM9 11h6M12 8v6'
  },
  {
    title: 'IT for Financial Services',
    body: 'Controls that meet SEC, FINRA, and GLBA expectations, with the security your clients’ assets demand.',
    icon: 'M4 20h16M5 10h14M12 4l8 4H4zM7 10v7M12 10v7M17 10v7'
  },
  {
    title: 'IT for Professional Service Firms',
    body: 'Collaboration tools, billing and project systems, and support that keeps billable hours on track.',
    icon: 'M4 8h16v11H4zM9 8V5h6v3M4 13h16'
  },
  {
    title: 'IT for Government & Defense',
    body: 'Secure environments aligned with NIST 800-171, DFARS, and CMMC for contractors and public agencies.',
    icon: 'M12 3l8 4v2H4V7zM6 9v8M10 9v8M14 9v8M18 9v8M3 20h18'
  }
];

const security = [
  {
    title: 'vCISO',
    body: 'A fractional Chief Information Security Officer to own your security strategy, policies, and risk program.',
    icon: 'M12 3l7 3v6c0 4.5-3 8-7 9-4-1-7-4.5-7-9V6zM12 9a2 2 0 110 4 2 2 0 010-4zM9 16c.5-1.5 1.6-2 3-2s2.5.5 3 2'
  },
  {
    title: 'Managed Detection & Response',
    body: 'Around-the-clock threat hunting and response that isolates attacks on endpoints before they spread.',
    icon: 'M11 4a7 7 0 110 14 7 7 0 010-14zM20 20l-4-4M8 11h6M11 8v6'
  },
  {
    title: 'Managed Security Services',
    body: 'Firewalls, SIEM, email security, and vulnerability management run by a dedicated security team.',
    icon: 'M4 6h16v5H4zM4 13h16v5H4zM7 8.5h.01M7 15.5h.01M11 8.5h6M11 15.5h6'
  },
  {
    title: 'Managed Compliance & Assessments',
    body: 'Gap assessments, risk analyses, and ongoing evidence collection for HIPAA, PCI, SOC 2, and more.',
    icon: 'M9 4h6v3H9zM7 5H5v15h14V5h-2M9 13l2 2 4-4'
  },
  {
    title: 'Cybersecurity Incident Response',
    body: 'Rapid containment, forensics, and recovery when a breach or ransomware attack hits, plus a plan for next time.',
    icon: 'M12 3l9 16H3zM12 10v4M12 17h.01'
  },
  {
    title: 'CMMC Compliance Partner',
    body: 'Readiness assessments, remediation, and documentation to help defense contractors achieve CMMC certification.',
    icon: 'M12 3a6 6 0 110 12 6 6 0 010-12zM9 14l-2 7 5-3 5 3-2-7M10 9l1.5 1.5L14 8'
  }
];

const steps = [
  { n: '01', title: 'Assess', body: 'We audit your network, devices, accounts, and security posture, then give you a plain-English report.' },
  { n: '02', title: 'Stabilize', body: 'We fix the urgent issues, standardize your setup, and deploy monitoring and protection across the board.' },
  { n: '03', title: 'Manage', body: 'Ongoing support, maintenance, and reporting for one predictable monthly price.' },
  { n: '04', title: 'Plan ahead', body: 'Regular reviews keep your technology in line with where the business is going.' }
];

const reasons = [
  { stat: 'Flat-rate', label: 'Monthly pricing with no surprise invoices' },
  { stat: '24/7', label: 'Monitoring and alerting on critical systems' },
  { stat: 'Local', label: 'Onsite help when a remote fix won’t do' },
  { stat: 'No lock-in', label: 'Month-to-month agreements available' }
];

function Logo() {
  return (
    <a href="#top" className="logo" aria-label="NorthBound IT home">
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <path d="M16 3l7 22-7-5-7 5z" fill="var(--accent)" />
        <path d="M16 3v17l-7 5z" fill="var(--accent-deep)" />
      </svg>
      <span>
        North<strong>Bound</strong> IT
      </span>
    </a>
  );
}

function Icon({ d }) {
  return (
    <svg viewBox="0 0 24 24" className="icon" aria-hidden="true">
      <path d={d} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ContactForm() {
  const [sent, setSent] = useState(false);

  // TODO: wire to a real endpoint (e.g. a Cloudflare Pages Function + Resend).
  const handleSubmit = e => {
    e.preventDefault();
    setSent(true);
  };

  if (sent) {
    return (
      <div className="form-done" role="status">
        <h3>Thanks, we’ll be in touch.</h3>
        <p>Expect a reply within one business day.</p>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="row">
        <label>
          Name
          <input name="name" required autoComplete="name" />
        </label>
        <label>
          Company
          <input name="company" autoComplete="organization" />
        </label>
      </div>
      <div className="row">
        <label>
          Email
          <input name="email" type="email" required autoComplete="email" />
        </label>
        <label>
          Employees
          <select name="size" defaultValue="">
            <option value="" disabled>
              Select…
            </option>
            <option>1–10</option>
            <option>11–50</option>
            <option>51–200</option>
            <option>200+</option>
          </select>
        </label>
      </div>
      <label>
        How can we help?
        <textarea name="message" rows="4" required />
      </label>
      <button type="submit" className="btn btn-primary">
        Book a free assessment
      </button>
    </form>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const close = () => setMenuOpen(false);

  return (
    <>
      <header className="nav">
        <div className="container nav-inner">
          <Logo />
          <button
            className="menu-toggle"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(o => !o)}
          >
            <span />
            <span />
          </button>
          <nav className={menuOpen ? 'open' : ''}>
            <a href="#services" onClick={close}>Services</a>
            <a href="#industries" onClick={close}>Industries</a>
            <a href="#cybersecurity" onClick={close}>Cybersecurity</a>
            <a href="#approach" onClick={close}>Approach</a>
            <a href="#why" onClick={close}>Why us</a>
            <a href="#contact" className="btn btn-small" onClick={close}>Get started</a>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-bg">
            <GhostFibers
              lineColor="#140E35"
              glowColor="#3437A0"
              speed={0.2}
              scale={2}
              rotation={0}
              rotationSpeed={0.25}
              layers={4}
              waveAmplitude={0.015}
              waveFrequency={3}
              waveSpeed={0.15}
              layerSpeed={0.08}
              twist={0.1}
              twistFrequency={5}
              twistSpeed={1.2}
              lineFrequency={5}
              lineSpacing={2}
              lineSharpness={16}
              glowFalloff={10}
              glowIntensity={1.6}
              brightness={2}
              blueBoost={1.25}
              vignette={0.8}
              grain={0.05}
              dpr={1}
              lightMode={false}
              fps={60}
              paused={false}
            />
          </div>
          <div className="container hero-content">
            <p className="eyebrow">Managed IT &amp; Cybersecurity</p>
            <h1>
              Technology that keeps your business <em>headed north.</em>
            </h1>
            <p className="lead">
              NorthBound IT is your outsourced IT department. We monitor, secure, and support your
              systems so your team can stop fighting technology and get back to work.
            </p>
            <div className="hero-actions">
              <a href="#contact" className="btn btn-primary">Book a free assessment</a>
              <a href="#services" className="btn btn-ghost">Explore services</a>
            </div>
          </div>
        </section>

        <section id="services" className="section">
          <div className="container">
            <div className="section-head">
              <p className="eyebrow">What we do</p>
              <h2>Everything IT, under one roof</h2>
              <p>From the help desk to the boardroom, one partner that owns the whole picture.</p>
            </div>
            <div className="grid services">
              {services.map(s => (
                <article key={s.title} className="card">
                  <Icon d={s.icon} />
                  <h3>{s.title}</h3>
                  <p>{s.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="industries" className="section section-alt">
          <div className="container">
            <div className="section-head">
              <p className="eyebrow">Industries</p>
              <h2>IT built around how your industry works</h2>
              <p>Every field has its own software, regulations, and risks. We know them, so you don’t have to explain them.</p>
            </div>
            <div className="grid services">
              {industries.map(s => (
                <article key={s.title} className="card">
                  <Icon d={s.icon} />
                  <h3>{s.title}</h3>
                  <p>{s.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="cybersecurity" className="section">
          <div className="container">
            <div className="section-head">
              <p className="eyebrow">IT Services · Cybersecurity</p>
              <h2>Security that stays a step ahead</h2>
              <p>From strategy to 24/7 response, layered protection for businesses that can’t afford a breach.</p>
            </div>
            <div className="grid services">
              {security.map(s => (
                <article key={s.title} className="card">
                  <Icon d={s.icon} />
                  <h3>{s.title}</h3>
                  <p>{s.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="approach" className="section section-alt">
          <div className="container">
            <div className="section-head">
              <p className="eyebrow">How we work</p>
              <h2>A clear path from chaos to calm</h2>
            </div>
            <ol className="grid steps">
              {steps.map(s => (
                <li key={s.n}>
                  <span className="step-n">{s.n}</span>
                  <h3>{s.title}</h3>
                  <p>{s.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="why" className="section">
          <div className="container">
            <div className="section-head">
              <p className="eyebrow">Why NorthBound</p>
              <h2>IT support that feels like part of your team</h2>
            </div>
            <div className="grid reasons">
              {reasons.map(r => (
                <div key={r.stat} className="reason">
                  <strong>{r.stat}</strong>
                  <span>{r.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="section section-alt">
          <div className="container contact">
            <div>
              <p className="eyebrow">Get started</p>
              <h2>Let’s talk about your IT</h2>
              <p>
                Tell us a little about your business and we’ll set up a free, no-pressure network and
                security assessment.
              </p>
              <ul className="contact-info">
                <li><span>Phone</span> <a href="tel:+10000000000">(000) 000-0000</a></li>
                <li><span>Email</span> <a href="mailto:hello@northboundit.com">hello@northboundit.com</a></li>
              </ul>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <Logo />
          <p>© {new Date().getFullYear()} NorthBound IT. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
