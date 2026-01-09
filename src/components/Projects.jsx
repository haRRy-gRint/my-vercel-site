import React from 'react'
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react'
import idsIpsImg from '../assets/ids_ips.png'
import librarySystemImg from '../assets/library_system.png'
import homeRentalImg from '../assets/home_rental.jpg'

const Projects = () => {
  const projects = [
    {
      title: 'Biometric Suite',
      description: 'A comprehensive security system focused on spoof detection and biometric authentication.',
      tags: ['Python', 'OpenCV', 'Deep Learning'],
      image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=800&auto=format&fit=crop',
      github: '#',
      demo: '#',
      color: '#00fff9', // Cyan
      progress: 90
    },
    {
      title: 'Home Rental System',
      description: 'A robust Java-based web application for property management and secure tenant bookings.',
      tags: ['Java', 'Spring Boot', 'MySQL'],
      image: homeRentalImg,
      github: '#',
      demo: '#',
      color: '#ffa500', // Orange (keeping it distinct)
      progress: 88
    },
    {
      title: 'IDS/IPS Systems',
      description: 'Intrusion Detection and Prevention System designed to monitor network traffic and block malicious activity.',
      tags: ['Networking', 'Security', 'Python'],
      image: idsIpsImg,
      github: '#',
      demo: '#',
      color: '#00ff41', // Green
      progress: 85
    },
    {
      title: 'Key Logger',
      description: 'A Python-based keylogger developed for educational purposes to understand security vulnerabilities.',
      tags: ['Python', 'System'],
      image: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=800&auto=format&fit=crop',
      github: '#',
      demo: '#',
      color: '#ff00c1', // Pink
      progress: 75
    },
    {
      title: 'Library Management System',
      description: 'A software solution for managing library resources, tracking books, and automating records.',
      tags: ['Database', 'Management', 'Python'],
      image: librarySystemImg,
      github: '#',
      demo: '#',
      color: '#fbff00', // Yellow
      progress: 95
    }
  ]

  return (
    <section id="projects" className="section container">
      <div className="section-header">
        <span className="section-subtitle">Portfolio</span>
        <h2 className="section-title">Selected <span className="gradient-text">Projects</span></h2>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card cyber-card scanline-container">
            <div className="project-image-wrap">
              <div className="scan-line" style={{ background: project.color, boxShadow: `0 0 15px ${project.color}` }}></div>
              <img src={project.image} alt={project.title} className="project-image" />
              <div className="project-overlay" style={{ background: `${project.color}11` }}>
                <div className="access-overlay">
                  <div className="access-text" style={{ color: project.color, textShadow: `0 0 10px ${project.color}` }}>DATA_ENHANCED</div>
                </div>
              </div>
            </div>

            <div className="project-content">
              <div className="project-meta">
                <span className="project-id" style={{ color: project.color }}>PID_{247 + index}</span>
                <div className="project-tags">
                  {project.tags.map(tag => <span key={tag} className="tag" style={{ color: project.color }}>#{tag.toUpperCase()}</span>)}
                </div>
              </div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <div className="project-integrity-wrap">
                <div className="integrity-label">
                  <span>DEPLOY_STATUS</span>
                  <span>{project.progress}%</span>
                </div>
                <div className="integrity-bar">
                  <div className="integrity-fill" style={{ width: `${project.progress}%`, background: project.color, boxShadow: `0 0 10px ${project.color}44` }}></div>
                </div>
              </div>

              <div className="project-footer">
                <div className="status-indicator">
                  <span className="blink-dot" style={{ background: project.color, boxShadow: `0 0 5px ${project.color}` }}></span> SECURE_CONNECTION
                </div>
                <ArrowUpRight className="corner-icon" size={16} />
              </div>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2.5rem;
        }

        .project-card {
          border-radius: 4px;
        }

        .project-image-wrap {
          position: relative;
          height: 240px;
          overflow: hidden;
          background: #000;
        }

        .scan-line {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 2px;
          background: var(--primary);
          box-shadow: 0 0 15px var(--primary);
          z-index: 5;
          animation: scanning 3s linear infinite;
        }

        @keyframes scanning {
          0% { top: 0%; }
          100% { top: 100%; }
        }

        .project-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0.6;
          filter: grayscale(1) brightness(0.5) blur(1px);
          transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1), 
                      filter 0.4s ease, 
                      opacity 0.4s ease;
        }

        .project-card:hover .project-image {
          opacity: 1;
          filter: grayscale(0) brightness(1.1) blur(0);
          transform: scale(1.1);
        }

        .project-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0, 255, 65, 0.02);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: var(--transition);
          backdrop-filter: saturate(1.5) contrast(1.2);
          z-index: 10;
          pointer-events: none;
        }

        .project-card:hover .project-overlay {
          opacity: 1;
        }

        .access-overlay {
          text-align: center;
        }

        .access-text {
          font-family: var(--font-heading);
          color: var(--primary);
          font-weight: 900;
          font-size: 1.4rem;
          letter-spacing: 5px;
          text-transform: uppercase;
          animation: pulse-zoom 2s infinite;
        }

        @keyframes pulse-zoom {
          0%, 100% { transform: scale(1); opacity: 0.8; }
          50% { transform: scale(1.05); opacity: 1; }
        }

        .project-content {
          padding: 1.5rem;
          border-top: 1px solid var(--glass-border);
        }

        .project-meta {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
        }

        .project-id {
          font-family: var(--font-heading);
          font-size: 0.7rem;
          color: var(--primary);
          opacity: 0.5;
        }

        .project-tags {
          display: flex;
          gap: 0.5rem;
        }

        .tag {
          font-size: 0.65rem;
          color: var(--accent);
          font-weight: 700;
          font-family: var(--font-heading);
        }

        .project-content h3 {
          font-size: 1.4rem;
          margin-bottom: 0.8rem;
          color: var(--text-primary);
        }

        .project-content p {
          color: var(--text-secondary);
          margin-bottom: 1.5rem;
          font-size: 0.9rem;
          line-height: 1.5;
          opacity: 0.8;
        }

        .project-integrity-wrap {
          margin-bottom: 1.5rem;
        }

        .integrity-label {
          display: flex;
          justify-content: space-between;
          font-family: var(--font-heading);
          font-size: 0.65rem;
          margin-bottom: 0.4rem;
          opacity: 0.8;
        }

        .integrity-bar {
          height: 4px;
          background: rgba(0, 255, 65, 0.05);
          border: 1px solid var(--glass-border);
          border-radius: 2px;
          overflow: hidden;
        }

        .integrity-fill {
          height: 100%;
          transition: width 1s ease-in-out;
        }

        .project-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 1rem;
          border-top: 1px solid rgba(0, 255, 65, 0.05);
        }

        .status-indicator {
          font-family: var(--font-heading);
          font-size: 0.7rem;
          color: var(--primary);
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .blink-dot {
          width: 6px;
          height: 6px;
          background: var(--primary);
          border-radius: 50%;
          animation: blink 1s infinite;
        }

        @keyframes blink {
          0%, 100% { opacity: 1; box-shadow: 0 0 5px var(--primary); }
          50% { opacity: 0.3; }
        }

        .corner-icon {
          color: var(--primary);
          opacity: 0.4;
        }

        @media (max-width: 480px) {
          .projects-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  )
}

export default Projects
