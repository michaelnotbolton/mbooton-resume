import { Card } from '@fluentui/react-components'
import { SectionBlock } from '../components/SectionBlock'
import { experience } from '../content/experience'

export function ExperienceSection() {
  return (
    <SectionBlock title="Experience Timeline" eyebrow="Resume detail with room to refine">
      <div className="timeline">
        {experience.map((entry) => (
          <Card className="resume-card resume-card--timeline" key={`${entry.role}-${entry.period}`}>
            <p className="timeline-period">{entry.period}</p>
            <h3 className="card-title">{entry.role}</h3>
            <p className="timeline-organization">{entry.organization}</p>
            <p className="card-body">{entry.summary}</p>
            <ul className="timeline-highlights">
              {entry.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </SectionBlock>
  )
}
