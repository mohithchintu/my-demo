import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import NavBar from "./components/NavBar";

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: "Demo App",
  description: "Chintu learning nextjs",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        <NavBar />
        <main className='p-5'>
          <Providers>
            {children}
          </Providers>
        </main>
      </body>
    </html>
  )
}
