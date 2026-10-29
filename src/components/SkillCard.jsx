import { Card } from 'react-bootstrap'

/**
 * SkillCard: tarjeta individual de una habilidad.
 * Props: name, experience, icon (clase de Devicon)
 */
function SkillCard({ name, experience, icon }) {
  return (
    <Card className="skill-card h-100">
      <Card.Body className="d-flex flex-column align-items-center justify-content-center">
        <i className={`${icon} skill-icon mb-2`} aria-hidden="true"></i>
        <Card.Title className="skill-name">{name}</Card.Title>
        <Card.Text className="skill-exp mb-0">{experience}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default SkillCard
