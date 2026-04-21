import { Badge, Card, Link } from '@fluentui/react-components'
import { SectionBlock } from '../components/SectionBlock'
import { projects } from '../content/projects'

export function ProjectsSection() {
  return (
    <SectionBlock title="Microsoft Teams Impact" eyebrow="How the work fits together">
      <div className="card-grid card-grid--projects">
        {projects.map((project) => (
          <Card
            className="resume-card resume-card--project"
            data-testid="project-card"
            key={project.title}
          >
            <div className="project-card__header">
              <h3 className="card-title">{project.title}</h3>
              {project.link ? (
                <Link href={project.link} inline target="_blank">
                  {project.linkLabel ?? 'Learn more'}
                </Link>
              ) : null}
            </div>
            <p className="card-body">{project.businessSummary}</p>
            <div className="project-card__stack">
              {project.techStack.map((item) => (
                <Badge appearance="outline" key={item}>
                  {item}
                </Badge>
              ))}
            </div>
            <p className="project-card__outcome">{project.outcome}</p>
          </Card>
        ))}
      </div>
    </SectionBlock>
  )
}
