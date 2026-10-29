import { useState } from 'react'
import { Container } from 'react-bootstrap'

import Header from './components/Header'
import Intro from './components/Intro'
import SkillsSection from './components/SkillsSection'
import ProjectsSection from './components/ProjectsSection'
import RecommendationsSection from './components/RecommendationsSection'
import LeaveRecommendationForm from './components/LeaveRecommendationForm'
import Footer from './components/Footer'

import {
  profile,
  navLinks,
  skills,
  projects,
  initialRecommendations,
} from './data/portfolioData'

/**
 * App: componente principal. Orquesta todas las secciones y guarda en su
 * estado la lista de recomendaciones (para poder agregar nuevas desde el form).
 */
function App() {
  const [recommendations, setRecommendations] = useState(initialRecommendations)

  const addRecommendation = ({ author, text }) => {
    setRecommendations((prev) => [...prev, { id: Date.now(), author, text }])
  }

  return (
    <>
      <Header
        name={profile.name}
        email={profile.email}
        location={profile.location}
        links={navLinks}
      />

      <Container className="px-4">
        <Intro name={profile.name} intro={profile.intro} />
        <SkillsSection skills={skills} />
        <ProjectsSection projects={projects} />
        <RecommendationsSection recommendations={recommendations} />
        <LeaveRecommendationForm onSubmit={addRecommendation} />
      </Container>

      <Footer />
    </>
  )
}

export default App
