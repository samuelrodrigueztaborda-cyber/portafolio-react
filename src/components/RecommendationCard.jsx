import { Card } from 'react-bootstrap'

/**
 * RecommendationCard: tarjeta con el texto de una recomendación.
 * Props: text, author (opcional)
 */
function RecommendationCard({ text, author }) {
  return (
    <Card className="recommendation-card h-100">
      <Card.Body>
        <Card.Text>" {text} "</Card.Text>
        {author && <footer className="text-end small">— {author}</footer>}
      </Card.Body>
    </Card>
  )
}

export default RecommendationCard
