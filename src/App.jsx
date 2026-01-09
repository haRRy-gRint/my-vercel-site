import React from 'react'
import { Github, Linkedin } from 'lucide-react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import MatrixBackground from './components/MatrixBackground'
import './PrintStyles.css'

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

      <footer className="container footer">
        <div className="footer-social">
          <a href="https://github.com/haRRy-gRint/" target="_blank" rel="noreferrer" className="footer-link">
            <Github size={20} />
          </a>
          <a href="https://linkedin.com/in/harsh-ganeshwade" target="_blank" rel="noreferrer" className="footer-link">
            <Linkedin size={20} />
          </a>
        </div>
        <p>&copy; {new Date().getFullYear()} Harsh Ganeshwade. All rights reserved.</p>
      </footer>

      <style>{`
        .footer {
          padding: 3rem 0;
          text-align: center;
          border-top: 1px solid var(--glass-border);
          margin-top: 4rem;
        }

        .footer-social {
          display: flex;
          justify-content: center;
          gap: 2rem;
          margin-bottom: 1.5rem;
        }

        .footer-link {
          color: var(--text-secondary);
          opacity: 0.6;
          transition: var(--transition);
        }

        .footer-link:hover {
          opacity: 1;
          color: var(--primary);
          transform: translateY(-3px);
          filter: drop-shadow(0 0 8px var(--primary-glow));
        }

        .footer p {
          opacity: 0.5;
          font-size: 0.85rem;
        }
      `}</style>
    </div>
  )
}

export default App
