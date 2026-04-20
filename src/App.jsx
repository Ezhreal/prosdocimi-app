import { useCallback, useState } from 'react';
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
import LaunchSoon from './pages/LaunchSoon';
import { ENABLE_LAUNCH_SCREEN, LAUNCH_AT_MS } from './constants/launch';

export default function App() {
  const [showFullSite, setShowFullSite] = useState(
    () => !ENABLE_LAUNCH_SCREEN || Date.now() >= LAUNCH_AT_MS
  );
  const onLaunchReached = useCallback(() => setShowFullSite(true), []);

  if (!showFullSite) {
    return <LaunchSoon onLaunchReached={onLaunchReached} />;
  }

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
