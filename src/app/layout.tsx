import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'NURLELA - Peternakan Ayam Broiler Profesional',
  description: 'Perusahaan pembibitan dan budidaya ayam ras pedaging (broiler) yang berfokus pada produksi daging ayam berkualitas tinggi dengan proses peternakan modern dan terstandarisasi.',
  keywords: 'peternakan ayam, ayam broiler, pembibitan ayam, produksi daging ayam, NURLELA, peternakan modern',
  authors: [{ name: 'NURLELA' }],
  creator: 'NURLELA',
  publisher: 'NURLELA',
  other: {
    'facebook-domain-verification': 'wcqhlycp9pkuvdxomckm0vwb5nxhj1',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <div className="min-h-screen bg-white">
          {children}
        </div>
      </body>
    </html>
  )
}