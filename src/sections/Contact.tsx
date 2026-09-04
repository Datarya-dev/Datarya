import { contact } from '../data/site';
import { Icon } from '../components/Icon';

export function Contact() {
  const whatsappUrl = `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(contact.whatsappMessage)}`;
  return (
    <section id="contacto" className="contact-section section-dark section-pad">
      <div className="page-shell contact-inner">
        <p className="eyebrow text-on-dark">Contacto</p>
        <h2 className="contact-title">¿Hablamos?</h2>
        <p className="contact-copy">Cada negocio tiene necesidades diferentes.<br />Cuéntanos qué necesitas y encontramos la mejor forma de ayudarte.</p>
        <div className="contact-actions">
          <a className="contact-action primary" href={whatsappUrl} target="_blank" rel="noreferrer"><span>WhatsApp</span><Icon name="arrow" size={18} /></a>
          <a className="contact-action" href={`mailto:${contact.email}`}><span>{contact.email}</span><Icon name="mail" size={18} /></a>
        </div>
        <div className="contact-meta"><span>+52 33 3058 0529</span><span>DATARYA · Datos que toman sentido.</span></div>
      </div>
    </section>
  );
}
