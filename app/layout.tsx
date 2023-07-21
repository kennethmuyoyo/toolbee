import './globals.css'
import { Inter } from 'next/font/google'
import MyHead from './head'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'ToolBee',
  description: 'The number 1 AI tools inventory in the world. Find the most updated and reliable tools from our directory',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <MyHead/>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
