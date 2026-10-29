import { Navbar, Nav, Container } from 'react-bootstrap'

/**
 * Header: barra de navegación con el nombre, datos de contacto y enlaces.
 * Props:
 *  - name, email, location: datos de la persona
 *  - links: arreglo [{ label, href }]
 */
function Header({ name, email, location, links }) {
  return (
    <Navbar expand="md" variant="dark" className="navbar-portfolio py-2" sticky="top">
      <Container fluid className="px-4">
        <Navbar.Brand href="#about" className="d-flex flex-column">
          <span className="brand-name">{name}</span>
          <span className="contact-line">
            <i className="bi bi-envelope-fill me-2"></i>
            {email}
          </span>
          <span className="contact-line">
            <i className="bi bi-geo-alt-fill me-2"></i>
            {location}
          </span>
        </Navbar.Brand>

        {/* Botón hamburguesa para pantallas pequeñas */}
        <Navbar.Toggle aria-controls="main-navbar" />
        <Navbar.Collapse id="main-navbar" className="justify-content-end">
          <Nav>
            {links.map((link) => (
              <Nav.Link key={link.href} href={link.href} className="px-3">
                {link.label}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
