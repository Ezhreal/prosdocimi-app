import { MessageCircle } from 'lucide-react';
import './WhatsAppButton.css';

const WHATSAPP_NUMBER = '5531999520720';
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

export default function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noreferrer"
      className="whatsapp-button"
      aria-label="Fale Conosco pelo WhatsApp"
    >
      <MessageCircle size={22} />
      <span className="whatsapp-text">Fale Conosco pelo WhatsApp</span>
    </a>
  );
}
