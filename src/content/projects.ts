import type { ProjectEntry } from './types'

export const projects: ProjectEntry[] = [
  {
    title: 'Context-aware AI behavior in Microsoft Teams',
    businessSummary:
      'Designed and implemented orchestration logic for AI-driven collaboration features in Microsoft Teams so product behavior could adapt dynamically to live context.',
    techStack: ['TypeScript', 'Node.js', 'LLM feature routing', 'Distributed product systems'],
    outcome:
      'Turned complex product state into dependable, production-ready AI behavior for real-time collaboration experiences.',
  },
  {
    title: 'Multi-context collaboration infrastructure',
    businessSummary:
      'Built backend and client-side infrastructure for richer communication patterns, private collaboration contexts, and advanced rendering across Microsoft Teams surfaces.',
    techStack: ['React', 'Real-time chat', 'Client platforms', 'Distributed systems'],
    outcome:
      'Enabled more flexible collaboration experiences that could reflect audience, surface, and context instead of treating communication as a single generic stream.',
  },
  {
    title: 'Feature eligibility and AI gating at scale',
    businessSummary:
      'Developed the systems that determine when AI capabilities should run at all, using product signals, permissions, and service-integrated context to gate behavior safely.',
    techStack: ['Eligibility systems', 'Permissions', 'Configuration platforms', 'Service integration'],
    outcome:
      'Made AI features safer and more predictable by ensuring they were invoked only when the surrounding product context supported them.',
  },
  {
    title: 'Rollout strategy, validation, and cross-service execution',
    businessSummary:
      'Owned end-to-end delivery across services and clients, using feature flags, internal configuration platforms, testing, and partner coordination to bring complex features into production.',
    techStack: ['Feature flags', 'ADO', 'CI/CD', 'Validation strategy'],
    outcome:
      'Helped complex, cross-service Teams features ship in staged, supportable ways instead of landing as brittle all-at-once launches.',
  },
]
