type CircuitBackdropProps = {
  reducedMotion: boolean
  parallaxOffset: number
}

export function CircuitBackdrop({
  reducedMotion,
  parallaxOffset,
}: CircuitBackdropProps) {
  const foregroundShift = reducedMotion ? 0 : Math.round(parallaxOffset * -0.4)
  const backgroundShift = reducedMotion ? 0 : Math.round(parallaxOffset * 0.22)

  return (
    <div
      aria-hidden="true"
      className="circuit-backdrop"
      data-testid="circuit-backdrop"
      data-animated={reducedMotion ? 'false' : 'true'}
    >
      <div
        className="circuit-backdrop__layer circuit-backdrop__layer--grid"
        style={{ transform: `translate3d(0, ${backgroundShift}px, 0)` }}
      />
      <div
        className="circuit-backdrop__layer circuit-backdrop__layer--trace"
        style={{ transform: `translate3d(0, ${foregroundShift}px, 0)` }}
      />
      <div className="circuit-backdrop__glow" />
    </div>
  )
}
