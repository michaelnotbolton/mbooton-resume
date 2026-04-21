import type { ExperienceEntry } from './types'

export const experience: ExperienceEntry[] = [
  {
    role: 'AI product behavior and collaboration intelligence',
    organization: 'Microsoft Teams',
    period: 'Core product scope',
    summary:
      'Built the runtime decision-making behind AI-enabled collaboration experiences, translating complex live context into product behavior that could be trusted in production.',
    highlights: [
      'Focused on safe, context-aware AI invocation.',
      'Worked across collaboration features, communication systems, and metadata pipelines.',
      'Turned product requirements into concrete service and client behavior.',
    ],
  },
  {
    role: 'Cross-service collaboration systems and data flow ownership',
    organization: 'Microsoft Teams',
    period: 'Platform execution',
    summary:
      'Owned features spanning TypeScript and Node.js services, React clients, and the asynchronous and real-time systems that carry product state across collaboration surfaces.',
    highlights: [
      'Built infrastructure for advanced communication rendering across product surfaces.',
      'Validated consistency across distributed state and metadata paths.',
      'Resolved hard issues involving dependencies, builds, and runtime environments.',
    ],
  },
  {
    role: 'Rollout leadership, experimentation, and partner execution',
    organization: 'Microsoft Teams',
    period: 'Delivery and operations',
    summary:
      'Led rollout strategy and cross-functional execution for complex features, using internal flagging systems, configuration platforms, CI/CD, and partner alignment to ship responsibly.',
    highlights: [
      'Used staged targeting and controlled release paths for production rollouts.',
      'Built comprehensive validation for complex multi-scenario product behavior.',
      'Acted as a technical lead across engineering, product, and partner teams.',
    ],
  },
]
