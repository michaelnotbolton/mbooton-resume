const credibilityPoints = [
  'Business-first positioning',
  'Modern frontend stack',
  'Acceptance-tested delivery',
  'Room for polished content upgrades',
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
