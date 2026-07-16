import { MessageCircle } from 'lucide-react';
import { useState, useEffect } from 'react';

export function WhatsAppWidget() {
  const [isVisible, setIsVisible] = useState(false);

  // Default number for ImoFlex
  const phoneNumber = '22943129526';
  const message = 'Bonjour ImoFlex ! Je souhaite avoir plus de renseignements.';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  useEffect(() => {
    // Show the widget after scrolling down 300px
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-all duration-300 hover:scale-110 hover:bg-[#128C7E] ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0 pointer-events-none'
      }`}
      aria-label="Contactez-nous sur WhatsApp"
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  );
}
