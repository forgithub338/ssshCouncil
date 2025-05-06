import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import WebFooter from '@/components/WebFooter'
import Absent from '@/components/Absent'
import ChatBot from "@/components/ChatBot"
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: '松山高中學生議會',
  description: '松山高中學生議會（崧高學生議會）是臺北市立松山高級中學學生自治聯合會的最高立法機關，負責監督學生會運作、審議預算、制定學生自治法規。',
  keywords: [
    '松山高中',
    '學生議會',
    '松山高中學生議會',
    '崧高',
    '崧高學生議會',
    '學生會',
    '學生自治組織',
    '臺北市立松山高級中學',
    '松山高中學生自治聯合會',
    '學生自治',
    '學生議員',
    '議事公開',
    '學生權益',
    '校園民主'
  ].join(', '),
  openGraph: {
    title: '松山高中學生議會',
    description: '松山高中學生議會（崧高學生議會）是臺北市立松山高級中學學生自治聯合會的最高立法機關',
    url: 'https://council.sssh.tp.edu.tw',
    siteName: '松山高中學生議會',
    locale: 'zh_TW',
    type: 'website',
  },
  alternates: {
    canonical: 'https://council.sssh.tp.edu.tw'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: '9gPam-gQXMRM8Zv_qA8DO_OAz3EArrinbwK_NMfc0Lk',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="zh-TW">
      <head>
        <meta name="google-site-verification" content="9gPam-gQXMRM8Zv_qA8DO_OAz3EArrinbwK_NMfc0Lk" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>
        <Absent />
        <Navbar />
        {children}
        <WebFooter />
      </body>
    </html>
  )
}
