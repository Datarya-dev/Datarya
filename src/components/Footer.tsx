import { navItems } from '../data/site';
import { Icon } from './Icon';

export function Footer() {
  return (
    <footer className="footer section-dark">
      <div className="page-shell footer-grid">
        <div><div className="footer-brand">DATARYA</div><p>Tu negocio genera datos.<br />Nosotros les damos sentido.</p></div>
        <div className="footer-links">
          {navItems.slice(0, 5).map((item) => <a key={item.id} href={`#${item.id}`}>{item.label}</a>)}
        </div>
        <a className="footer-up" href="#inicio" aria-label="Volver al inicio">Arriba <Icon name="arrow" size={16} /></a>
      </div>
      <div className="page-shell footer-bottom"><span>© {new Date().getFullYear()} DATARYA</span><span>Proyecto independiente · Sin testimonios ni clientes inventados.</span></div>
    </footer>
  );
}
