import { Inter } from 'next/font/google'
import './ui/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Mane Software',
  description: 'Developed by Manwe Software',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
