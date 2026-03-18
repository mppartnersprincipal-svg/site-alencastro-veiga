import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import TermosDeUso from './pages/TermosDeUso'
import PoliticaDePrivacidade from './pages/PoliticaDePrivacidade'
import PoliticaDeCookies from './pages/PoliticaDeCookies'
import DireitoDeSuccessoes from './pages/areas/DireitoDeSuccessoes'
import TutelaCuratela from './pages/areas/TutelaCuratela'
import CookieBanner from './components/CookieBanner'
import CustomCursor from './components/CustomCursor'

export default function App() {
  return (
    <BrowserRouter>
      <CustomCursor />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/termos-de-uso" element={<TermosDeUso />} />
        <Route path="/politica-de-privacidade" element={<PoliticaDePrivacidade />} />
        <Route path="/politica-de-cookies" element={<PoliticaDeCookies />} />
        <Route path="/areas-de-atuacao/direito-de-sucessoes" element={<DireitoDeSuccessoes />} />
        <Route path="/areas-de-atuacao/tutela-curatela" element={<TutelaCuratela />} />
      </Routes>
      <CookieBanner />
    </BrowserRouter>
  )
}
