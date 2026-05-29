import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './pages/Home'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Layout envolve todas as páginas filhas */}
        <Route path="/" element={<Layout />}>
                    {/* Página inicial */}
          <Route index element={<Home />} />
          
        </Route>
      </Routes>
    </BrowserRouter>
  )
}