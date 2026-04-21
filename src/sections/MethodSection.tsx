import { Card } from '@fluentui/react-components'
import { SectionBlock } from '../components/SectionBlock'

const workingStyle = [
  {
    title: 'Frame the business question first',
    body: 'Keep the work anchored to a decision, an outcome, or a risk worth reducing.',
  },
  {
    title: 'Use BDD to keep delivery honest',
    body: 'Translate intent into scenarios so the finished experience matches the promise.',
  },
  {
    title: 'Ship with polish, not noise',
    body: 'Add character through motion and texture while preserving clarity for fast readers.',
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
