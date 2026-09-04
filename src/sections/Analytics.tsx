import { motion, useReducedMotion } from 'motion/react';
import { useMemo, useState } from 'react';
import { AnimatedNumber } from '../components/AnimatedNumber';
import { Reveal } from '../components/Reveal';
import { SectionHeading } from '../components/SectionHeading';

const ranges = {
  '30d': { label: '30 días', values: [24, 34, 29, 41, 49, 46, 61, 58, 72, 68, 79, 88] },
  '90d': { label: '90 días', values: [19, 28, 34, 31, 43, 46, 50, 58, 54, 66, 72, 86] },
  year: { label: '12 meses', values: [28, 31, 39, 45, 42, 54, 61, 57, 67, 73, 79, 91] }
} as const;

type RangeKey = keyof typeof ranges;

function MiniLineChart({ values }: { values: readonly number[] }) {
  const points = values.map((value, index) => {
    const x = (index / (values.length - 1)) * 100;
    const y = 90 - value * 0.78;
    return `${x},${y}`;
  });
  const path = `M ${points.join(' L ')}`;

  return (
    <svg className="line-chart" viewBox="0 0 100 90" role="img" aria-label="Tendencia demostrativa de ventas">
      <g className="chart-grid-lines">
        <line x1="0" x2="100" y1="18" y2="18" />
        <line x1="0" x2="100" y1="44" y2="44" />
        <line x1="0" x2="100" y1="70" y2="70" />
      </g>
      <motion.path
        d={path}
        className="chart-line"
        fill="none"
        strokeWidth="2"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 1.1, ease: 'easeOut' }}
      />
    </svg>
  );
}

export function Analytics() {
  const reduceMotion = useReducedMotion();
  const [range, setRange] = useState<RangeKey>('30d');
  const chart = ranges[range];
  const barHeights = useMemo(() => [76, 58, 45, 38, 31].map((v, i) => Math.max(v - (range === 'year' ? i * 2 : 0), 24)), [range]);

  return (
    <section id="analisis" className="section-dark analytics-section section-pad">
      <div className="page-shell">
        <div className="analytics-lead">
          <SectionHeading
            dark
            eyebrow="Servicio principal · 01"
            title={<>Tus datos ya cuentan una historia.<br /><span>Nosotros ayudamos a encontrarla.</span></>}
            description="Ordenamos, limpiamos y analizamos la información que ya tienes para encontrar patrones, visualizar lo importante y convertirlo en conclusiones útiles."
          />
          <div className="analysis-method">
            {['Ordenar', 'Limpiar', 'Analizar', 'Visualizar', 'Entender'].map((item, index) => (
              <Reveal key={item} delay={index * 0.04}>
                <div className="method-item"><span>0{index + 1}</span>{item}</div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal className="demo-label">
          <span>CASO DEMOSTRATIVO</span>
          <span>Datos ficticios · Cafetería</span>
        </Reveal>

        <motion.div
          className="dashboard"
          initial={reduceMotion ? undefined : { opacity: 0, y: 20 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65 }}
        >
          <div className="dashboard-topbar">
            <div>
              <p className="dashboard-kicker">CAFÉ AURORA</p>
              <h3>Lectura de ventas</h3>
            </div>
            <div className="dashboard-range" role="group" aria-label="Periodo del dashboard">
              {(Object.keys(ranges) as RangeKey[]).map((key) => (
                <button key={key} type="button" className={key === range ? 'active' : ''} onClick={() => setRange(key)}>
                  {ranges[key].label}
                </button>
              ))}
            </div>
          </div>

          <div className="dashboard-metrics">
            <div className="metric-card metric-card-primary"><span>Ventas totales</span><strong><AnimatedNumber value="$248430" /></strong><small>último periodo</small></div>
            <div className="metric-card"><span>Crecimiento</span><strong>+18.4%</strong><small>vs. periodo anterior</small></div>
            <div className="metric-card"><span>Producto más vendido</span><strong>Latte</strong><small>por unidades</small></div>
            <div className="metric-card"><span>Mayor actividad</span><strong>17:00–19:00</strong><small>franja de ventas</small></div>
          </div>

          <div className="dashboard-grid">
            <div className="chart-card chart-main">
              <div className="card-heading"><span>Ventas en el tiempo</span><span>{chart.label}</span></div>
              <MiniLineChart values={chart.values} />
              <div className="chart-axis"><span>Ene</span><span>Mar</span><span>May</span><span>Jul</span><span>Sep</span><span>Dic</span></div>
            </div>

            <div className="chart-card products-card">
              <div className="card-heading"><span>Productos más vendidos</span><span>unidades</span></div>
              <div className="bars">
                {['Latte', 'Americano', 'Cold brew', 'Pan dulce', 'Té'].map((name, index) => (
                  <div className="bar-row" key={name}>
                    <div className="bar-meta"><span>{name}</span><span>{barHeights[index]}</span></div>
                    <div className="bar-track"><motion.div className="bar-fill" initial={{ width: 0 }} whileInView={{ width: `${barHeights[index]}%` }} viewport={{ once: true }} transition={{ duration: 0.7, delay: index * 0.06 }} /></div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="insights-panel">
            <div className="insights-intro"><span>INSIGHTS</span><p>Lo importante no es tener más datos. Es saber qué dicen.</p></div>
            <div className="insight-list">
              {[
                'El 63% de las ventas proviene de tres productos.',
                'Las ventas aumentan durante la tarde.',
                'Los productos con mayor margen concentran una parte importante de los ingresos.'
              ].map((insight, index) => (
                <Reveal key={insight} delay={index * 0.05}>
                  <div className="insight-item"><span>0{index + 1}</span><p>{insight}</p></div>
                </Reveal>
              ))}
            </div>
          </div>
        </motion.div>

        <p className="demo-disclaimer">Todos los números, nombres e insights de esta sección son ficticios y existen únicamente para mostrar cómo puede verse un análisis.</p>
      </div>
    </section>
  );
}
