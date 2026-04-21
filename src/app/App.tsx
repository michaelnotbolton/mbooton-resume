import { startTransition, useEffect, useEffectEvent, useState } from 'react'
import { CircuitBackdrop } from '../components/CircuitBackdrop'
import { ContactSection } from '../sections/ContactSection'
import { CredibilityStrip } from '../sections/CredibilityStrip'
import { ExperienceSection } from '../sections/ExperienceSection'
import { HeroSection } from '../sections/HeroSection'
import { ImpactSection } from '../sections/ImpactSection'
import { MethodSection } from '../sections/MethodSection'
import { ProjectsSection } from '../sections/ProjectsSection'
import { BrandThemeProvider } from '../theme/BrandThemeProvider'
import { useReducedMotion } from './useReducedMotion'
import './App.css'

function ResumePage() {
  const reducedMotion = useReducedMotion()
  const [parallaxOffset, setParallaxOffset] = useState(0)

  const updateParallax = useEffectEvent(() => {
    if (reducedMotion) {
      startTransition(() => setParallaxOffset(0))
      return
    }

    const nextOffset = Math.min(window.scrollY * 0.16, 140)
    startTransition(() => setParallaxOffset(nextOffset))
  })

  useEffect(() => {
    if (reducedMotion) {
      return undefined
    }

    let frame = 0
    const handleScroll = () => {
      cancelAnimationFrame(frame)
      frame = window.requestAnimationFrame(() => updateParallax())
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [reducedMotion])

  return (
    <div
      className="resume-app"
      data-reduced-motion={reducedMotion ? 'true' : 'false'}
      data-testid="resume-app"
    >
      <CircuitBackdrop
        reducedMotion={reducedMotion}
        parallaxOffset={reducedMotion ? 0 : parallaxOffset}
      />

      <div className="resume-app__content">
        <HeroSection />
        <CredibilityStrip />
        <main className="resume-main">
          <ImpactSection />
          <ProjectsSection />
          <MethodSection />
          <ExperienceSection />
          <ContactSection />
        </main>
      </div>
    </div>
  )
}

export default function App() {
  return (
    <BrandThemeProvider>
      <ResumePage />
    </BrandThemeProvider>
  )
}
