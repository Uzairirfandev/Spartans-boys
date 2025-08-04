// lib/theme-config.tsx
'use client'

import { ThemeProvider } from 'next-themes'
import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export function ThemeProviderWrapper({ children }: Props) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
    </ThemeProvider>
  )
}
