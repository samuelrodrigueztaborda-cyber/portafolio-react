import { Row, Col, Image } from 'react-bootstrap'
import avatar from '../assets/AVATAR.jpg'

/**
 * Intro: sección "Hi, I'm Jane Doe!" con avatar (izquierda) y texto (derecha).
 * Props: name, intro
 */
function Intro({ name, intro }) {
  return (
    <section id="about" className="py-5">
      <Row className="align-items-center g-4">
        <Col xs={12} md={5} className="text-center">
          {/* img-fluid → imagen responsiva */}
          <Image src={avatar} alt={`Avatar de ${name}`} fluid style={{ maxWidth: 280 }} />
        </Col>
        <Col xs={12} md={7}>
          <h1 className="intro-title">
            Hola, Yo Soy {name}! <span aria-hidden="true">👋</span>
          </h1>
          <p className="intro-text">{intro}</p>
        </Col>
      </Row>
    </section>
  )
}

export default Intro
