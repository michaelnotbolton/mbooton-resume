const credibilityPoints = [
  'Microsoft Teams meeting intelligence',
  'Real-time collaboration systems',
  'LLM gating and rollout safety',
  'Cross-service product execution',
]

export function CredibilityStrip() {
  return (
    <section aria-label="Credibility Strip" className="credibility-strip">
      {credibilityPoints.map((point) => (
        <p className="credibility-strip__item" key={point}>
          {point}
        </p>
      ))}
    </section>
  )
}
