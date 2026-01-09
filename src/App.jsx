import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import MatrixBackground from './components/MatrixBackground'

function App() {
  return (
    <div className="app">
      <MatrixBackground />
      <div className="bg-blobs">
        <div className="blob blob-1"></div>
        <div className="blob blob-2" style={{ background: 'radial-gradient(circle, rgba(0, 255, 65, 0.1) 0%, transparent 70%)' }}></div>
      </div>

      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>

      <footer className="container" style={{ padding: '2rem 0', textAlign: 'center', opacity: 0.6, fontSize: '0.9rem' }}>
        <p>&copy; {new Date().getFullYear()} Harsh Ganeshwade. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
