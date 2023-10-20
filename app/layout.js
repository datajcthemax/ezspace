import Navbar from './components/Navbar'
import './globals.css'

export const metadata = {
  title: 'Welcome to EZ Space',
  description: 'Reserve your space here!',
}

export default function RootLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
    </>

  )
}
