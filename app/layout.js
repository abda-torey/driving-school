import './globals.css'
// import { Inter } from 'next/font/google'
import Head from 'next/head'
import HeroSection from '../components/HeroSection'


import { Poppins } from 'next/font/google';
import Footer from '@/components/Footer';

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});




// const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'IceCube',
  description: 'Generated by create next app',
  
  
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>{metadata.title}</title>
      </Head>
     
      <body className={`{poppins.className} `}> <HeroSection />{children}<Footer /></body>
      
    </html>
  )
}
