import { Row, Col } from 'react-bootstrap'
import ProjectItem from './ProjectItem'

/**
 * ProjectsSection: lista vertical de proyectos organizada con Row/Col.
 * Props: projects (arreglo)
 */
function ProjectsSection({ projects }) {
  return (
    <section id="projects" className="py-5">
      <h2 className="section-title mb-3">Proyectos</h2>
      <Row>
        <Col xs={12} lg={{ span: 11, offset: 1 }}>
          {projects.map((project, index) => (
            <ProjectItem
              key={project.title}
              title={project.title}
              description={project.description}
              showDivider={index < projects.length - 1}
            />
          ))}
        </Col>
      </Row>
    </section>
  )
}

export default ProjectsSection
