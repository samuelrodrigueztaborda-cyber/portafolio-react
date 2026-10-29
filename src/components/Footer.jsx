import { Button } from 'react-bootstrap'

/**
 * Footer: contiene el botón fijo "scroll to top" (esquina inferior derecha).
 */
function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer>
      <Button className="scroll-top-btn" onClick={scrollToTop} aria-label="Scroll to top">
        <i className="bi bi-arrow-up"></i>
      </Button>
    </footer>
  )
}

export default Footer
