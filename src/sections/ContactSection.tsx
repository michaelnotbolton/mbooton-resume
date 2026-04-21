import { Card, Link } from '@fluentui/react-components'
import { SectionBlock } from '../components/SectionBlock'
import { contactLinks } from '../content/contactLinks'

export function ContactSection() {
  return (
    <SectionBlock title="Contact" eyebrow="Easy next steps">
      <div className="card-grid">
        {contactLinks.map((contactLink) => (
          <Card className="resume-card resume-card--contact" key={contactLink.label}>
            <h3 className="card-title">{contactLink.label}</h3>
            <p className="card-body">{contactLink.supportingText}</p>
            <Link href={contactLink.href} inline target="_blank">
              {contactLink.label}
            </Link>
          </Card>
        ))}
      </div>
    </SectionBlock>
  )
}
