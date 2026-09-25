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
