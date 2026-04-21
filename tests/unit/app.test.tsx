import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import { beforeEach, describe, expect, test, vi } from 'vitest'
import App from '../../src/app/App'
import { contactLinks } from '../../src/content/contactLinks'
import { projects } from '../../src/content/projects'

function mockReducedMotion(matches: boolean) {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: vi.fn().mockImplementation((query: string) => ({
      matches,
      media: query,
      onchange: null,
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      addListener: vi.fn(),
      removeListener: vi.fn(),
      dispatchEvent: vi.fn(),
    })),
  })
}

describe('App', () => {
  beforeEach(() => {
    mockReducedMotion(false)
  })

  test('renders the hero and scan-friendly business sections', () => {
    render(<App />)

    expect(
      screen.getByRole('heading', { level: 1, name: 'Michael Booton' }),
    ).toBeInTheDocument()

    for (const sectionName of [
      'Impact Highlights',
      'Microsoft Teams Impact',
      'Working Style',
      'Execution Leadership',
      'Contact',
    ]) {
      expect(screen.getByRole('region', { name: sectionName })).toBeInTheDocument()
    }
  })

  test('renders project cards and contact links from the content modules', () => {
    render(<App />)

    expect(screen.getAllByTestId('project-card')).toHaveLength(projects.length)

    for (const contactLink of contactLinks) {
      expect(screen.getAllByRole('link', { name: contactLink.label }).length).toBeGreaterThan(0)
    }
  })

  test('switches into reduced-motion mode when the user preference is enabled', async () => {
    mockReducedMotion(true)

    render(<App />)

    await waitFor(() => {
      expect(screen.getByTestId('resume-app')).toHaveAttribute('data-reduced-motion', 'true')
    })
  })
})
