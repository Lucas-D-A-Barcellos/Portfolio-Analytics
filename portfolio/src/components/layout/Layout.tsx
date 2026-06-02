import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import FloatingLines from '@/components/FloatingLines'

export default function Layout() {
  return (
    <>
      <FloatingLines linesGradient={[
      "#7c3aed",
      "#8b5cf6",
      "#a855f7"
    ]}
    animationSpeed={0.4}
    bendStrength={-0.25}
    bendRadius={4}
    mouseDamping={0.08}
    parallaxStrength={0.03}
    />

      <div className="relative z-10 min-h-screen flex flex-col">
        <Navbar />

        <main className="flex-1 container mx-auto px-4 py-8">
          <Outlet />
        </main>

        <Footer />
      </div>
    </>
  )
}