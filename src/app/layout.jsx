import { ThemeProvider } from './DarkThemeProvider'
import './globals.css'
import { Silkscreen } from 'next/font/google'

const silkscreen = Silkscreen({
  subsets: ['latin'],
  display: "swap",
  weight: ['400', '700'],
})

export const metadata = {
  title: 'Sai Barath R',
  description: 'Welcome to the digital playground of a front-end expert React developer. Follow the journey of a seasoned coder, conquering challenges and transforming visions into reality.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={silkscreen.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
