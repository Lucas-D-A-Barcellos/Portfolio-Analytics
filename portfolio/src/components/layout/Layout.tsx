import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import FloatingLines from '@/components/FloatingLines'

export default function Layout() {
  return (
    <div className="relative min-h-screen bg-background overflow-hidden">

      {/* BACKGROUND (FloatingLines) */}
      <div className="fixed inset-0 z-0 bg-background">
        <FloatingLines
          linesGradient={[
            "#7c3aed",
            "#8b5cf6",
            "#a855f7"
          ]}
          animationSpeed={0.4}
          bendStrength={-0.50}
          bendRadius={4}
          mouseDamping={0.08}
          parallaxStrength={0.03}
        />
      </div>

      {/* CONTEÚDO */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />

        <main className="flex-1 container mx-auto px-4 py-5">
          <Outlet />
        </main>

        <Footer />
      </div>

    </div>
  )
}