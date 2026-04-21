import { Card } from '@fluentui/react-components'
import { SectionBlock } from '../components/SectionBlock'

const workingStyle = [
  {
    title: 'Use context, not hype, to make AI useful',
    body: 'Anchor AI behavior to product context, permissions, and intent so the system behaves appropriately in production.',
  },
  {
    title: 'Build through scenarios, not isolated screens',
    body: 'Design for the full operating reality of a product from the start, including edge cases, role differences, and cross-surface behavior instead of patching them on later.',
  },
  {
    title: 'Drive execution across teams and systems',
    body: 'Move work from idea to rollout by coordinating engineering, product, partner teams, and deployment systems instead of optimizing one layer in isolation.',
  },
]

export function MethodSection() {
  return (
    <SectionBlock title="Working Style" eyebrow="How I like to build">
      <div className="card-grid">
        {workingStyle.map((item) => (
          <Card className="resume-card" key={item.title}>
            <h3 className="card-title">{item.title}</h3>
            <p className="card-body">{item.body}</p>
          </Card>
        ))}
      </div>
    </SectionBlock>
  )
}
