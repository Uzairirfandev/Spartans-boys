// app/layout.tsx
import './globals.css'
import type { Metadata, Viewport } from 'next'
import { Poppins, Lato } from 'next/font/google'
import { ThemeProviderWrapper } from './lib/theme-config'
import SmoothScroll from '@/components/SmoothScroll'

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '600'], variable: '--font-poppins' })
const lato = Lato({ subsets: ['latin'], weight: ['400', '700'], variable: '--font-lato' })

export const metadata: Metadata = {
  title: 'Spartans Boys — Cricket Team',
  description: 'Official website of Spartans Boys cricket team — players, stats, gallery, grounds, and stories from the field.',
  icons: { icon: '/favicon.ico' },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#111827',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${poppins.variable} ${lato.variable}`} suppressHydrationWarning>
      <body className="scroll-smooth overflow-x-hidden bg-white text-black dark:bg-[#0e0e0e] dark:text-white transition-colors duration-300">
        <ThemeProviderWrapper>
          <SmoothScroll>
            {children}
          </SmoothScroll>
        </ThemeProviderWrapper>
      </body>
    </html>
  )
}
