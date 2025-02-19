import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import WebFooter from "@/components/WebFooter";
import Navbar from "@/components/Navbar";
import Absent from "@/components/Absent";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "松山高中學生議會",
  description: "松山高中學生議會官方網站",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Absent />
        <Navbar />
        {children}
        <WebFooter />
      </body>
    </html>
  );
}
