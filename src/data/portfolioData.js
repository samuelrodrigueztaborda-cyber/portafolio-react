// Datos del portafolio. Separarlos de los componentes permite
// reutilizar cada componente pasando la información por props.

export const profile = {
  name: 'Samuel Rodríguez Taborda',
  email: 'samuelrodrigueztaborda@gmail.com',
  location: 'Medellín, Colombia',
  intro:
    'Soy aprendiz de Análisis y Desarrollo de Software en el SENA, con interés en el desarrollo web, la arquitectura de aplicaciones, las bases de datos y la creación de soluciones digitales. Mi proyecto principal es BarberAg, un sistema web para la gestión de citas y servicios de barbería. Busco colaborar en proyectos, aprender de otros desarrolladores y construir soluciones útiles.',
}

export const navLinks = [
  { label: 'Sobre mi', href: '#about' },
  { label: 'Habilidades', href: '#skills' },
  { label: 'Proyectos', href: '#projects' },
  { label: 'Recomendaciones', href: '#recommendations' },
]

// "icon" es la clase de Devicon (ver index.html)
// "experience" muestra el área en la que se usa cada tecnología.
export const skills = [
  { name: 'HTML5', experience: 'Desarrollo web', icon: 'devicon-html5-plain colored' },
  { name: 'CSS3', experience: 'Desarrollo web', icon: 'devicon-css3-plain colored' },
  { name: 'JavaScript', experience: 'Desarrollo web', icon: 'devicon-javascript-plain colored' },
  { name: 'Bootstrap', experience: 'Desarrollo web', icon: 'devicon-bootstrap-plain colored' },
  { name: 'Node.js', experience: 'Backend', icon: 'devicon-nodejs-plain colored' },
  { name: 'Express', experience: 'Backend', icon: 'devicon-express-original' },
  { name: 'MySQL', experience: 'Bases de datos', icon: 'devicon-mysql-original colored' },
  { name: 'Git', experience: 'Control de versiones', icon: 'devicon-git-plain colored' },
  { name: 'GitHub', experience: 'Control de versiones', icon: 'devicon-github-original' },
  { name: 'VS Code', experience: 'Herramientas', icon: 'devicon-vscode-plain colored' },
]

export const projects = [
  {
    title: 'BarberAg — Sistema de gestión para barberías',
    description:
      'Proyecto formativo SENA (en desarrollo y pruebas). Aplicación web para gestionar usuarios, servicios, barberos, citas, pagos, suscripciones, reseñas e informes, usando HTML5, CSS3, Bootstrap, JavaScript, Node.js, Express y MySQL.',
  },
  {
    title: 'LearnHub — Plataforma de cursos en línea',
    description:
      'Maquetación de una interfaz web para una plataforma educativa, usando HTML y Bootstrap 5.3.',
  },
  {
    title: 'HidraMarket — Calculadora de inventario y ventas',
    description:
      'Lógica de programación y operaciones de cálculo de inventario y ventas, usando HTML y Bootstrap.',
  },
]

// OJO: estas son recomendaciones de ejemplo. Reemplázalas por recomendaciones
// reales de compañeros o instructores, o déjalas vacías y usa el formulario.
export const initialRecommendations = [
  {
    id: 1,
    text: '[Ejemplo] ',
  },
  {
    id: 2,
    text: '[Ejemplo] ',
  },
  {
    id: 3,
    text: '[Ejemplo] ',
  },
]
