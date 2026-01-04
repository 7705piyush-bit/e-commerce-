import type { Metadata } from 'next'
import 'bootstrap/dist/css/bootstrap.min.css'
import './globals.css'

export const metadata: Metadata = {
  title: 'Male Fashion - Premium Men\'s Clothing',
  description: 'Discover the latest trends in men\'s fashion. Shop premium clothing, shoes, and accessories with free shipping and 30-day returns.',
  keywords: 'men fashion, clothing, shoes, jackets, t-shirts, caps, premium fashion',
  openGraph: {
    title: 'Male Fashion - Premium Men\'s Clothing',
    description: 'Discover the latest trends in men\'s fashion',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}