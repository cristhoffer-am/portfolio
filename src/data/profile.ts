export const profile = {
  name: "Cristhoffer Aylas Moreno",
  shortName: "Cristhoffer Aylas",
  initials: "CAM",
  title: "Técnico en Contabilidad | Supervisor de Cajas y Operaciones",
  subtitle:
    "Más de 6 años garantizando la eficiencia operativa, el control exacto de valores y la excelencia en el servicio al cliente.",
  about:
    "Técnico en Contabilidad egresado de Certus, con más de 6 años de experiencia en gestión de caja y atención al público en retail, salud y servicios. Especializado en control de efectivo, arqueos diarios, facturación electrónica y manejo de sistemas POS. Cuento con una base contable que me permite cuidar el cumplimiento de los procedimientos internos y prevenir errores financieros. Soy puntual, honesto y con iniciativa para coordinar el trabajo del equipo de cajas. Próximo a iniciar estudios en Marketing y Medios Digitales en ADEX.",
  phone: "+51 922 083 364",
  phoneHref: "tel:+51922083364",
  email: "aylasmorenocristhoffer@gmail.com",
  emailHref: "mailto:aylasmorenocristhoffer@gmail.com",
  location: "Santa Anita, Lima - Perú",
  locationHref: "https://maps.google.com/?q=Santa+Anita,+Lima,+Peru",
  linkedin: "https://www.linkedin.com/in/cristhoffer-jeanpier-aylas-moreno-1101a6449/",
  linkedinLabel: "LinkedIn",
  cvHref: "/cv",
};

export const skillGroups = [
  {
    id: "caja",
    title: "Área de caja",
    icon: "wallet",
    items: [
      "Arqueos y Cuadres",
      "Conteo de Efectivo",
      "Detección de Billetes",
      "Manejo de POS",
      "Prevención de Pérdidas",
    ],
  },
  {
    id: "operacion",
    title: "Apoyo operativo",
    icon: "users",
    items: [
      "Supervisión de Personal",
      "Inducción de Personal",
      "Organización de Turnos",
      "Control de Normas",
      "Resolución de Dudas",
    ],
  },
  {
    id: "herramientas",
    title: "Herramientas",
    icon: "grid",
    items: ["Microsoft Excel", "Facturación Electrónica", "Conciliación Bancaria"],
  },
] as const;

export const strengths = [
  "Honestidad Integral",
  "Puntualidad Rigurosa",
  "Orden y Disciplina",
  "Trato Amable",
  "Trabajo en Equipo",
  "Responsabilidad",
] as const;

export const interests = [
  "Crecimiento en Cajas",
  "Apoyo en Supervisión",
  "Control Administrativo",
] as const;

export const experience = [
  {
    role: "Supervisor de Caja",
    company: "Tottus",
    period: "Abril - Septiembre",
    mark: "T",
    highlights: [
      "Supervisión operativa del equipo de cajeros.",
      "Validación de arqueos y aprobación de transacciones complejas.",
      "Gestión del flujo de efectivo.",
    ],
  },
  {
    role: "Cajero y Atención al Cliente",
    company: "Plaza Vea",
    period: "3 Años",
    mark: "PV",
    highlights: [
      "Cobro y atención directa en cajas de alta rotación.",
      "Arqueos y cuadres diarios, con entrega detallada de valores.",
      "Cobro en efectivo, tarjetas, vales y sistemas POS.",
      "Apoyo en la formación de personal nuevo sobre el sistema y las normas de seguridad en caja.",
      "Resolución de incidencias y consultas directas de los clientes.",
    ],
  },
  {
    role: "Admisionista / Gestión de Caja",
    company: "Clínica San Juan de Dios",
    period: "2.5 Años",
    mark: "SJ",
    highlights: [
      "Control administrativo de admisión y recaudación de servicios médicos.",
      "Emisión de comprobantes de pago y elaboración de reportes de ingresos diarios.",
      "Orientación al usuario, con una atención fluida y sin errores de registro.",
    ],
  },
  {
    role: "Asesor Multifuncional",
    company: "San Fernando",
    period: "6 Meses",
    mark: "SF",
    highlights: [
      "Soporte en ventas, despacho y control de inventario en tienda.",
      "Apoyo eventual en cobros y gestión de caja según la necesidad operativa.",
    ],
  },
  {
    role: "Ventas y Facturación",
    company: "Distribuidora Navarrete",
    period: "4 Meses",
    mark: "DN",
    highlights: [
      "Asesoría comercial y gestión de pedidos para clientes mayoristas y minoristas.",
      "Procesamiento de ventas en el sistema de facturación electrónica.",
    ],
  },
] as const;

export const education = [
  {
    program: "Estudiante de Bachiller en Marketing y Medios Digitales",
    school: "ADEX",
    period: "2027 - 2029",
    upcoming: true,
  },
  {
    program: "Técnico en Contabilidad",
    school: "Certus",
    period: "Egresado",
    upcoming: false,
  },
] as const;

export const navLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#sobre-mi", label: "Sobre mí" },
  { href: "#habilidades", label: "Habilidades" },
  { href: "#experiencia", label: "Experiencia" },
  { href: "#educacion", label: "Educación" },
  { href: "#contacto", label: "Contacto" },
] as const;

export const highlights = [
  { label: "Experiencia", value: "6+ años" },
  { label: "Sectores", value: "Retail, salud y servicios" },
  { label: "Especialidad", value: "Caja y control de valores" },
  { label: "Base", value: "Santa Anita, Lima" },
] as const;
