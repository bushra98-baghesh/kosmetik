import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from "@/components/navbar/Navbar"
import Footer from "@/components/footer/Footer"
import CertifiedBy from "@/components/certified/CertifiedBy"
import {Providers} from "./providers";
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'German Board | Kosmetik schule',
  description: 'Zugang zu über 50+ Kursen von Ausbildern & German Board Institution',

  icons: {
    icon: "/favicon.ico",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" >
     
      <body >
        <Providers>
           <Navbar/>
        {children}
        <CertifiedBy/>
        <Footer/>
        </Providers>
       
        </body>
    </html>
  )
}
