import { createLightTheme, type BrandVariants } from '@fluentui/react-components'

const brandPalette: BrandVariants = {
  10: '#05111f',
  20: '#082038',
  30: '#0f2f4f',
  40: '#164166',
  50: '#1d527d',
  60: '#246496',
  70: '#2c77af',
  80: '#378ac8',
  90: '#4c9de0',
  100: '#6ab2f2',
  110: '#8bc5fb',
  120: '#add7ff',
  130: '#cae6ff',
  140: '#dff0ff',
  150: '#edf7ff',
  160: '#f7fbff',
}

export const brandTheme = {
  ...createLightTheme(brandPalette),
  colorNeutralBackground1: '#f4f7fb',
  colorNeutralBackground2: '#ffffff',
  colorNeutralBackground3: '#e9eef6',
  colorNeutralBackground4: '#dde5f0',
  colorNeutralForeground1: '#102033',
  colorNeutralForeground2: '#4f5d6f',
  colorNeutralForeground3: '#6e7c90',
  colorBrandBackground: '#2c77af',
  colorBrandForeground1: '#1d527d',
  colorBrandForeground2: '#164166',
  colorBrandStroke1: '#78b7ec',
  shadow4: '0 20px 60px rgba(13, 29, 53, 0.12)',
  shadow8: '0 28px 80px rgba(13, 29, 53, 0.18)',
  shadow16: '0 32px 96px rgba(10, 24, 43, 0.24)',
  borderRadiusLarge: '24px',
  borderRadiusXLarge: '32px',
}

export const motionTokens = {
  '--motion-duration-gentle': '420ms',
  '--motion-duration-soft': '720ms',
  '--motion-ease': 'cubic-bezier(0.2, 0.8, 0.2, 1)',
} as const
