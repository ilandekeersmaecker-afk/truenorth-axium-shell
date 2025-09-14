import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'TrueNorth Axium — The Shell',
  description: 'MVP shell met jaarselectie, breadcrumbs en zijbalk.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl">
      <body>{children}</body>
    </html>
  )
}
