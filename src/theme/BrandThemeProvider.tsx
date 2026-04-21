import type { CSSProperties, ReactNode } from 'react'
import { FluentProvider } from '@fluentui/react-components'
import { brandTheme, motionTokens } from './brandTheme'

type BrandThemeProviderProps = {
  children: ReactNode
}

export function BrandThemeProvider({ children }: BrandThemeProviderProps) {
  return (
    <FluentProvider theme={brandTheme}>
      <div style={motionTokens as CSSProperties}>{children}</div>
    </FluentProvider>
  )
}
