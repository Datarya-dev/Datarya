import { Header } from './components/Header';
import { WhatsAppFloat } from './components/WhatsAppFloat';
import { About } from './sections/About';
import { AISection } from './sections/AISection';
import { Analytics } from './sections/Analytics';
import { Contact } from './sections/Contact';
import { FAQ } from './sections/FAQ';
import { Hero } from './sections/Hero';
import { Lab } from './sections/Lab';
import { Process } from './sections/Process';
import { WhatWeDo } from './sections/WhatWeDo';
import { WebSection } from './sections/WebSection';
import { WindowVisual } from './sections/WindowVisual';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <WindowVisual />
        <WhatWeDo />
        <Analytics />
        <AISection />
        <WebSection />
        <Process />
        <Lab />
        <About />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
