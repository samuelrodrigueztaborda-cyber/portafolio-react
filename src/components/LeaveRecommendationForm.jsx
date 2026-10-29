import { useState } from 'react'
import { Form, Button, Row, Col } from 'react-bootstrap'

/**
 * LeaveRecommendationForm: formulario controlado con estado (useState).
 * Props: onSubmit(recommendation) → función del padre que agrega la recomendación.
 */
function LeaveRecommendationForm({ onSubmit }) {
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!message.trim()) return // el mensaje es obligatorio

    onSubmit({ author: name.trim(), text: message.trim() })
    setName('')
    setMessage('')
  }

  return (
    <section className="leave-recommendation py-5">
      <Row className="justify-content-center">
        <Col xs={12} md={8} lg={6}>
          <h4 className="mb-3">Deja una recomendación</h4>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="recName">
              <Form.Control
                type="text"
                size="sm"
                placeholder="Nombre (Optional)"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-4" controlId="recMessage">
              <Form.Control
                as="textarea"
                rows={6}
                placeholder="Mensaje"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </Form.Group>

            <div className="text-center">
              <Button type="submit" className="btn-submit">
                Enviar
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </section>
  )
}

export default LeaveRecommendationForm
