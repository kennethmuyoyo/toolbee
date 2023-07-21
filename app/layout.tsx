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
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
    <link rel="manifest" href="/site.webmanifest" />
    <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#00000" />   
    <meta name="msapplication-TileColor" content="#da532c" />
    <meta name="theme-color" content="#ffffff" ></meta>   
    <body className={inter.className}>{children}</body>
    </html>
  )
}
