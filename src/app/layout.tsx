import type { Metadata } from 'next'
import { Fraunces } from 'next/font/google'
import './globals.css';
import { Analytics } from '@vercel/analytics/react';

const fraunces = Fraunces({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Bienvenue au 221b Baker Street',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`bg-black flex flex-col min-h-screen text-white ${fraunces.className}`}
        
      >
        <div className='bg-cover bg-no-repeat grow bg-center flex flex-col' style={{backgroundImage: `url('/Background.png')`}}>
          {children}
        </div>
        <Analytics />
      </body>
    </html>
  )
}
