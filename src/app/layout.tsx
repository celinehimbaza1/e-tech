import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'E-Tech',
  description: 'Smart electronics store',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
