import { Badge, Button } from '@fluentui/react-components'
import { heroStats, profile } from '../content/profile'

export function HeroSection() {
  return (
    <section className="hero-shell">
      <div className="hero-copy">
        <p className="hero-kicker">Business-oriented SaaS resume site</p>
        <h1 className="hero-title">{profile.name}</h1>
        <p className="hero-role">{profile.role}</p>
        <p className="hero-summary">{profile.summary}</p>
        <p className="hero-availability">{profile.availability}</p>

        <div className="hero-actions">
          <Button
            appearance="primary"
            as="a"
            href={profile.primaryCta.href}
            target="_blank"
            rel="noreferrer"
          >
            {profile.primaryCta.label}
          </Button>
          <Button
            appearance="secondary"
            as="a"
            href={profile.secondaryCta.href}
            target="_blank"
            rel="noreferrer"
          >
            {profile.secondaryCta.label}
          </Button>
        </div>
      </div>

      <div className="hero-panel">
        <div className="hero-panel__badge-row">
          <Badge appearance="filled">Fluent UI</Badge>
          <Badge appearance="tint">Gherkin BDD</Badge>
          <Badge appearance="outline">GitHub Pages</Badge>
        </div>

        <div className="hero-stat-grid">
          {heroStats.map((stat) => (
            <div className="hero-stat" key={stat.label}>
              <span className="hero-stat__label">{stat.label}</span>
              <p className="hero-stat__value">{stat.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
