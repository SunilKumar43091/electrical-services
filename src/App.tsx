import './App.css'
import Header from './components/Header'
import CTA from './components/CTA'
import Footer from './components/Footer'
import Hero from './components/Hero'
import ProjectsSection from './components/ProjectsSection'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <CTA />
        <ProjectsSection />
      </main>
      <Footer />
    </>
  )
}

export default App