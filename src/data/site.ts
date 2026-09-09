export const contact = {
  whatsappNumber: '523330580529',
  whatsappMessage:
    'Hola, me interesa conocer más sobre los servicios de Datarya. Me gustaría platicar sobre un proyecto.',
  email: 'contacto.datarya@gmail.com'
} as const;

export const navItems = [
  { label: 'Qué hacemos', id: 'que-hacemos' },
  { label: 'Análisis', id: 'analisis' },
  { label: 'IA', id: 'ia' },
  { label: 'Web', id: 'web' },
  { label: 'Proceso', id: 'proceso' },
  { label: 'Lab', id: 'lab' },
  { label: 'Sobre mí', id: 'sobre-mi' },
  { label: 'FAQ', id: 'faq' },
  { label: 'Contacto', id: 'contacto' }
] as const;

export const services = [
  {
    number: '01',
    title: 'Análisis de datos',
    text: 'Ordenamos tu información y la convertimos en decisiones claras.',
    featured: true
  },
  {
    number: '02',
    title: 'IA & automatización',
    text: 'Quitamos tareas repetitivas de en medio con herramientas útiles.',
    featured: false
  },
  {
    number: '03',
    title: 'Desarrollo web',
    text: 'Creamos sitios rápidos, claros y pensados para tu negocio.',
    featured: false
  }
] as const;

export const processSteps = [
  { number: '01', title: 'Hablamos', text: 'Cuéntanos qué necesitas.' },
  { number: '02', title: 'Entendemos', text: 'Conocemos tu negocio y tus objetivos.' },
  { number: '03', title: 'Trabajamos', text: 'Analizamos, diseñamos o desarrollamos la solución.' },
  { number: '04', title: 'Entregamos', text: 'Recibes algo útil, claro y pensado para ti.' }
] as const;

export const labProjects = [
  { number: '01', title: 'Análisis de ventas', tag: 'Datos' },
  { number: '02', title: 'Asistente de IA para cafetería', tag: 'IA' },
  { number: '03', title: 'E-commerce de joyería', tag: 'Web' }
] as const;

export const faqs = [
  {
    question: '¿Necesito tener muchísimos datos?',
    answer:
      'No. Datarya está pensado especialmente para negocios pequeños y emprendedores que quieren comenzar a ordenar y aprovechar mejor su información.'
  },
  {
    question: '¿Necesito saber de programación?',
    answer:
      'No. Tú conoces tu negocio; nosotros nos encargamos de la parte técnica y te explicamos lo importante en lenguaje claro.'
  },
  {
    question: '¿Cuánto cuesta un análisis?',
    answer:
      'Cada negocio tiene necesidades diferentes. Cuéntanos qué necesitas y encontramos la mejor forma de ayudarte.'
  },
  {
    question: '¿Trabajan con cualquier tipo de negocio?',
    answer:
      'Podemos empezar por muchos contextos: comercio, servicios, cafeterías, emprendimientos y otros negocios que quieran entender mejor su información.'
  },
  {
    question: '¿Qué tipo de datos pueden analizar?',
    answer:
      'Ventas, productos, horarios, clientes, inventario y otras tablas o archivos que ya uses en tu operación.'
  },
  {
    question: '¿Puedo contratar solamente un análisis?',
    answer:
      'Sí. Puedes empezar únicamente con un proyecto de análisis y decidir después si necesitas algo más.'
  }
] as const;

export const demoProducts = [
  { name: 'Anillo Alba', price: '$1,280', image: '/images/aurea-ring.svg' },
{ name: 'Collar Línea', price: '$1,940', image: '/images/aurea-necklace.svg' },
{ name: 'Aretes Nube', price: '$980', image: '/images/aurea-earrings.svg' }
] as const;