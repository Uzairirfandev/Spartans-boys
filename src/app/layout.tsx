// app/layout.tsx
import './globals.css'
import { Poppins, Lato } from 'next/font/google'
import { ThemeProviderWrapper } from './lib/theme-config'
import Head from 'next/head'

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '600'], variable: '--font-poppins' })
const lato = Lato({ subsets: ['latin'], weight: ['400', '700'], variable: '--font-lato' })

export const metadata = {
  title: 'DevStarter — Build Fast, Launch Smarter',
  description: 'A modern developer-first starter kit using Next.js, Tailwind CSS, and App Router with dark mode support.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${poppins.variable} ${lato.variable}`} suppressHydrationWarning>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#111827" />
      </Head>
      <body className="bg-white text-black dark:bg-[#0e0e0e] dark:text-white transition-colors duration-300">
        <ThemeProviderWrapper>
          {children}
        </ThemeProviderWrapper>
      </body>
    </html>
  )
}
