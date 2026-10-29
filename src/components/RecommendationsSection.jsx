import { Row, Col } from 'react-bootstrap'
import RecommendationCard from './RecommendationCard'

/**
 * RecommendationsSection: tarjetas de recomendaciones (3 por fila en md+).
 * Props: recommendations (arreglo)
 */
function RecommendationsSection({ recommendations }) {
  return (
    <section id="recommendations" className="py-5">
      <h2 className="section-title mb-4">Recomendaciones</h2>
      <Row className="g-3">
        {recommendations.map((rec) => (
          <Col key={rec.id} xs={12} md={4}>
            <RecommendationCard text={rec.text} author={rec.author} />
          </Col>
        ))}
      </Row>
    </section>
  )
}

export default RecommendationsSection
