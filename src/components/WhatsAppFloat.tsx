import { contact } from '../data/site';

export function WhatsAppFloat() {
  const url = `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(contact.whatsappMessage)}`;

  return (
    <a
      className="whatsapp-float"
      href={url}
      target="_blank"
      rel="noreferrer"
      aria-label="Abrir WhatsApp para hablar con Datarya"
    >
      <span className="whatsapp-mark" aria-hidden="true">WA</span>
      <span className="whatsapp-copy">Hablemos</span>
    </a>
  );
}
