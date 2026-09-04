import { useState } from 'react';
import { demoProducts } from '../data/site';
import { Icon } from '../components/Icon';
import { Reveal } from '../components/Reveal';
import { SectionHeading } from '../components/SectionHeading';

export function WebSection() {
  const [cart, setCart] = useState(0);

  return (
    <section id="web" className="section-light section-pad">
      <div className="page-shell split-demo-layout web-layout">
        <div>
          <SectionHeading
            eyebrow="Servicio complementario · 03"
            title="Desarrollo web"
            description="Sitios modernos para contar mejor lo que haces, presentar tus productos y facilitar que tus clientes te encuentren."
          />
          <div className="web-note"><span>CASO DEMOSTRATIVO</span><p>AUREA es una tienda ficticia creada para mostrar una dirección de e-commerce.</p></div>
        </div>

        <Reveal>
          <div className="store-browser">
            <div className="store-topbar"><span className="demo-chip dark">DEMO</span><span>AUREA</span><span className="store-cart">Bolsa {cart > 0 ? `(${cart})` : ''}</span></div>
            <div className="store-nav"><span>JOYERÍA</span><span>NOVEDADES</span><span>COLECCIÓN</span><span>CONTACTO</span></div>
            <div className="store-hero">
              <div><p className="store-kicker">OBJETOS PARA TODOS LOS DÍAS</p><h3>Joyería que deja espacio para ti.</h3><button type="button" className="text-button">Ver colección <Icon name="arrow" size={15} /></button></div>
              <div className="store-shape" aria-hidden="true" />
            </div>
            <div className="product-grid">
              {demoProducts.map((product) => (
                <article className="product-card" key={product.name}>
                  <img src={product.image} alt={`Producto demostrativo ${product.name}`} loading="lazy" width="360" height="440" />
                  <div className="product-meta"><span>{product.name}</span><span>{product.price}</span></div>
                  <button type="button" onClick={() => setCart((value) => value + 1)}>Añadir</button>
                </article>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
