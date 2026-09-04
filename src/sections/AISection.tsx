import { motion } from 'motion/react';
import { useMemo, useState } from 'react';
import type { FormEvent } from 'react';
import { Icon } from '../components/Icon';
import { Reveal } from '../components/Reveal';
import { SectionHeading } from '../components/SectionHeading';

interface Message { from: 'user' | 'bot'; text: string }

const answers: Array<{ keys: string[]; reply: string }> = [
  { keys: ['hora', 'cierran', 'abren', 'horario'], reply: 'Nuestro horario es de lunes a sábado de 8:00 AM a 9:00 PM.' },
  { keys: ['menu', 'menú', 'comida', 'bebida'], reply: 'Claro, puedes revisarlo en nuestra pagina de Google Maps!' },
  { keys: ['ubicacion', 'ubicación', 'dirección', 'direccion', 'donde', 'dónde'], reply: 'Estamos ubicados en 3828 Piermont Drive, Albuquerque, Nuevo México, en Estados Unidos.' },
  { keys: ['reserv', 'mesa'], reply: 'Este demo no gestiona reservaciones reales, pero una integración así puede automatizarse.' }
];

function replyFor(message: string) {
  const normalized = message.toLowerCase();
  const match = answers.find((item) => item.keys.some((key) => normalized.includes(key)));
  return match?.reply ?? 'Puedo responder preguntas frecuentes sobre horario, menú, ubicación y reservaciones. Prueba con una de esas.';
}

export function AISection() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    { from: 'user', text: '¿A qué hora cierran?' },
    { from: 'bot', text: 'Nuestro horario es de lunes a sábado de 8:00 AM a 9:00 PM.' }
  ]);
  const suggestions = useMemo(() => ['¿Tienen menú?', '¿Dónde están?', '¿Puedo reservar una mesa?'], []);

  const send = (event: FormEvent) => {
    event.preventDefault();
    const trimmed = input.trim();
    if (!trimmed) return;
    setMessages((current) => [...current, { from: 'user', text: trimmed }, { from: 'bot', text: replyFor(trimmed) }]);
    setInput('');
  };

  const useSuggestion = (suggestion: string) => {
    setInput(suggestion);
  };

  return (
    <section id="ia" className="section-wine section-pad ai-section">
      <div className="page-shell split-demo-layout">
        <div>
          <SectionHeading
            dark
            eyebrow="Servicio complementario · 02"
            title="IA & automatización"
            description="Automatiza tareas repetitivas, responde preguntas frecuentes y mejora la atención sin añadir complejidad innecesaria."
          />
          <div className="feature-points dark-copy">
            {['Respuestas rápidas', 'Flujos repetitivos', 'Herramientas a medida'].map((point, index) => (
              <Reveal key={point} delay={index * 0.05}>
                <div><span>0{index + 1}</span><p>{point}</p></div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal>
          <div className="chat-demo">
            <div className="demo-bar"><span className="demo-chip">DEMO</span><span>CAFÉ AURORA</span><span className="demo-dot" /></div>
            <div className="chat-window" aria-live="polite">
              {messages.map((message, index) => (
                <motion.div key={`${message.from}-${index}-${message.text}`} className={`chat-message ${message.from}`} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}>
                  <span className="chat-author">{message.from === 'bot' ? 'AURORA BOT' : 'TÚ'}</span>
                  <p>{message.text}</p>
                </motion.div>
              ))}
            </div>
            <div className="chat-suggestions">
              {suggestions.map((suggestion) => <button key={suggestion} type="button" onClick={() => useSuggestion(suggestion)}>{suggestion}</button>)}
            </div>
            <form className="chat-input" onSubmit={send}>
              <label htmlFor="chat-message" className="sr-only">Escribe un mensaje</label>
              <input id="chat-message" value={input} onChange={(event) => setInput(event.target.value)} placeholder="Escribe una pregunta…" autoComplete="off" />
              <button type="submit" aria-label="Enviar mensaje"><Icon name="send" size={17} /></button>
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
