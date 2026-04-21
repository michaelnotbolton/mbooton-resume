import { Card } from '@fluentui/react-components'
import { SectionBlock } from '../components/SectionBlock'
import { impactHighlights } from '../content/impactHighlights'

export function ImpactSection() {
  return (
    <SectionBlock title="Impact Highlights" eyebrow="Why this profile stands out">
      <div className="card-grid card-grid--impact">
        {impactHighlights.map((highlight) => (
          <Card className="resume-card" key={highlight.title}>
            <p className="card-metric">{highlight.metric}</p>
            <h3 className="card-title">{highlight.title}</h3>
            <p className="card-body">{highlight.description}</p>
          </Card>
        ))}
      </div>
    </SectionBlock>
  )
}
