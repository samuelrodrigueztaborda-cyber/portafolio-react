/**
 * ProjectItem: un proyecto con título, descripción (lista) y separador.
 * Props: title, description, showDivider
 */
function ProjectItem({ title, description, showDivider }) {
  return (
    <div className="project-item mb-3">
      <h5>{title}</h5>
      <ul>
        <li>{description}</li>
      </ul>
      {showDivider && <hr />}
    </div>
  )
}

export default ProjectItem
