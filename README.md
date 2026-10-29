# Portafolio Web con React.js y Bootstrap

Actividad: *Creación de un Portafolio Web con React.js y Bootstrap* — Módulo Desarrollo Frontend con React.js.

## Ejecutar el proyecto

```bash
npm install
npm run dev      # servidor de desarrollo (http://localhost:5173)
npm run build    # compilación para producción
```

## 1. Análisis de la interfaz: componentes y Bootstrap usado

| Sección de la imagen | Componente React | Bootstrap utilizado |
|---|---|---|
| Barra morada (nombre, email, teléfono, enlaces) | `Header.jsx` | `Navbar`, `Nav`, `Container`, `Navbar.Toggle` (menú hamburguesa en móvil), iconos `bi-envelope-fill` y `bi-telephone-fill` |
| "Hi, I'm Jane Doe!" | `Intro.jsx` | `Row`, `Col`, `Image fluid` (clase `img-fluid`), `align-items-center` |
| Skills (contenedor) | `SkillsSection.jsx` | `Row`, `Col` con `xs=12 sm=6 md=4 lg=3 xl=2`, `g-4` |
| Cada tarjeta de habilidad | `SkillCard.jsx` | `Card`, `Card.Body`, `Card.Title`, `Card.Text` |
| Projects (contenedor) | `ProjectsSection.jsx` | `Row`, `Col` con `offset` |
| Cada proyecto | `ProjectItem.jsx` | clases `mb-3`, `<hr>` como separador |
| Recommendations (contenedor) | `RecommendationsSection.jsx` | `Row`, `Col md=4`, `g-3` |
| Cada recomendación | `RecommendationCard.jsx` | `Card`, `Card.Body`, `Card.Text` |
| Leave a Recommendation | `LeaveRecommendationForm.jsx` | `Form`, `Form.Group`, `Form.Control` (input y textarea), `Button` |
| Botón flecha (esquina inferior derecha) | `Footer.jsx` | `Button` + CSS `position: fixed` |
| Orquestador | `App.jsx` | `Container` |

## 2. Estructura de carpetas

```
src/
├── assets/avatar.svg
├── components/
│   ├── Header.jsx
│   ├── Intro.jsx
│   ├── SkillsSection.jsx        └── SkillCard.jsx
│   ├── ProjectsSection.jsx      └── ProjectItem.jsx
│   ├── RecommendationsSection.jsx └── RecommendationCard.jsx
│   ├── LeaveRecommendationForm.jsx
│   └── Footer.jsx
├── data/portfolioData.js        # datos que se pasan por props
├── App.jsx
├── index.css                    # estilos personalizados (colores, sombras, fuente)
└── main.jsx                     # importa Bootstrap CSS + Bootstrap Icons
```

## Conceptos de React aplicados

- **Componentes funcionales** reutilizables por sección.
- **Props** para pasar datos (`SkillCard`, `ProjectItem`, `RecommendationCard`, `Header`, etc.).
- **Estado (`useState`)**: `App` guarda la lista de recomendaciones y el formulario es un componente controlado; al enviar, la nueva recomendación aparece como tarjeta.
- **Renderizado de listas** con `.map()` y `key`.

## Notas

- Los iconos de las habilidades usan [Devicon](https://devicon.dev/) por CDN (enlace en `index.html`), por lo que se necesita conexión a internet para verlos.
- La imagen del avatar es un SVG propio, para no depender de recursos externos.
