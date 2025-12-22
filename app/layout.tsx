import type React from "react"
import type { Metadata, Viewport } from "next"
import { Montserrat } from "next/font/google"
import "./globals.css"

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  variable: "--font-montserrat",
})

export const metadata: Metadata = {
  title: "leo.dev - Frontend Developer",
  description: "Portfolio of leo.dev, a frontend developer specializing in React, Next.js, and blockchain development.",
  keywords: "frontend developer, React, Next.js, TypeScript, Viem, Wagmi",
  authors: [{ name: "leo.dev" }],
  icons: {
    icon: "/favicon.ico",
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${montserrat.variable} font-sans antialiased`}>{children}</body>
    </html>
  )
}
