export type HeroStat = {
  label: string
  value: string
}

export type ImpactHighlight = {
  title: string
  metric: string
  description: string
}

export type ProjectEntry = {
  title: string
  businessSummary: string
  techStack: string[]
  outcome: string
  link?: string
  linkLabel?: string
}

export type ExperienceEntry = {
  role: string
  organization: string
  period: string
  summary: string
  highlights: string[]
}

export type ContactLink = {
  label: string
  href: string
  supportingText: string
}
