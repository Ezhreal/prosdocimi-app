import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import RouteEffects from './components/RouteEffects';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Consultoria from './pages/Consultoria';
import Auditoria from './pages/Auditoria';
import Treinamentos from './pages/Treinamentos';
import Contato from './pages/Contato';
import Termos from './pages/Termos';
import Privacidade from './pages/Privacidade';

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <RouteEffects />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/consultoria" element={<Consultoria />} />
          <Route path="/auditoria" element={<Auditoria />} />
          <Route path="/treinamentos" element={<Treinamentos />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/termos" element={<Termos />} />
          <Route path="/privacidade" element={<Privacidade />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppButton />
    </BrowserRouter>
  );
}
