import Header from '@/components/Header'
import './globals.css'

// const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ecommerce UI',
  description: 'this is for learning nextjs',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Header />
      <body >{children}</body>
    </html>
  )
}
