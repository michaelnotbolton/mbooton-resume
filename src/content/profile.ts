import type { HeroStat } from './types'

export const heroStats: HeroStat[] = [
  {
    label: 'Domain',
    value: 'AI-powered collaboration and meeting intelligence in Microsoft Teams',
  },
  {
    label: 'Stack',
    value: 'TypeScript, Node.js, React, distributed services, chat, and meeting metadata',
  },
  {
    label: 'Scope',
    value: 'Product behavior, rollout strategy, cross-service execution, and reliability',
  },
]

export const profile = {
  name: 'Michael Booton',
  role: 'I build AI-driven collaboration systems for Microsoft Teams meetings and chat.',
  summary:
    'My work centers on making meeting assistants, chat surfaces, and LLM-backed product behavior reliable enough for real-time collaboration at scale.',
  availability:
    'Strongest at turning ambiguous product ideas into safe, production-ready systems across clients, services, and rollout pipelines.',
  primaryCta: {
    label: 'See Teams Impact',
    href: '#microsoft-teams-impact-heading',
  },
  secondaryCta: {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/michaelnotbolton/',
  },
}
