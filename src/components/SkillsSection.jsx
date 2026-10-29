import { Row, Col } from 'react-bootstrap'
import SkillCard from './SkillCard'

/**
 * SkillsSection: cuadrícula responsiva de tarjetas de habilidades.
 *  xs=12 (1 por fila) · sm=6 (2) · md=4 (3) · lg=3 (4)
 * Props: skills (arreglo)
 */
function SkillsSection({ skills }) {
  return (
    <section id="skills" className="py-4">
      <h2 className="section-title mb-4">Habilidades</h2>
      <Row className="g-4">
        {skills.map((skill) => (
          <Col key={skill.name} xs={12} sm={6} md={4} lg={3} xl={2}>
            <SkillCard {...skill} />
          </Col>
        ))}
      </Row>
    </section>
  )
}

export default SkillsSection
