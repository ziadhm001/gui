import type { Metadata } from 'next'
import { Inter, Press_Start_2P} from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ZOAZ Team',
  description: 'Created By ZOAZ team for Computer Interface course.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className + 'bg-slate-500'}>{children}</body>
    </html>
  )
}
