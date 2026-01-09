import React from 'react'
import { Layout, Terminal, Database, Cpu } from 'lucide-react'

const Skills = () => {
  const skills = [
    {
      title: 'Languages',
      icon: <Terminal className="skill-icon" />,
      items: ['C', 'C++', 'Python', 'HTML/CSS', 'JavaScript'],
      color: '#00ff41' // Green
    },
    {
      title: 'Cybersecurity',
      icon: <Database className="skill-icon" />,
      items: ['IDS/IPS Systems', 'Biometric Security', 'Spoof Detection', 'Risk Analysis'],
      color: '#fbff00' // Yellow/Gold
    },
    {
      title: 'Networking',
      icon: <Cpu className="skill-icon" />,
      items: ['Network Security', 'Protocol Analysis', 'Packet Inspection', 'Routing & Switching'],
      color: '#00fff9' // Cyan
    },
    {
      title: 'Soft Skills',
      icon: <Layout className="skill-icon" />,
      items: ['Problem Solving', 'Team Collaboration', 'Analytical Thinking', 'Time Management'],
      color: '#ff00c1' // Pink/Magenta
    }
  ]

  return (
    <section id="skills" className="section container">
      <div className="section-header">
        <span className="section-subtitle">Expertise</span>
        <h2 className="section-title">Technical <span className="gradient-text">Skills</span></h2>
      </div>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card cyber-card scanline-container">
            <div className="skill-header">
              <div className="skill-icon-box" style={{ borderColor: skill.color, color: skill.color, background: `${skill.color}10` }}>
                {skill.icon}
              </div>
              <div className="skill-info">
                <span className="skill-status" style={{ color: skill.color }}>MOD_ID: 0x{index}7A</span>
                <h3>{skill.title}</h3>
              </div>
            </div>
            <div className="skill-body">
              {skill.items.map((item, i) => (
                <div key={i} className="skill-item">
                  <div className="skill-label-wrap">
                    <span className="skill-name">{item}</span>
                    <span className="skill-value" style={{ color: skill.color }}>{70 + (i * 5)}%</span>
                  </div>
                  <div className="skill-progress" style={{ borderColor: `${skill.color}30` }}>
                    <div className="skill-progress-fill" style={{
                      width: `${70 + (i * 5)}%`,
                      background: `linear-gradient(90deg, ${skill.color}88, ${skill.color})`,
                      boxShadow: `0 0 10px ${skill.color}44`
                    }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 2rem;
        }

        .skill-card {
          padding: 2rem;
          border-radius: 4px;
        }

        .skill-header {
          display: flex;
          align-items: center;
          gap: 1.2rem;
          margin-bottom: 2rem;
          border-bottom: 1px solid var(--glass-border);
          padding-bottom: 1rem;
        }

        .skill-icon-box {
          color: var(--primary);
          background: rgba(0, 255, 65, 0.05);
          padding: 10px;
          border-radius: 4px;
          border: 1px solid var(--primary-glow);
        }

        .skill-status {
          font-size: 0.65rem;
          color: var(--primary);
          opacity: 0.6;
          font-family: var(--font-heading);
          display: block;
        }

        .skill-info h3 {
          font-size: 1.3rem;
          letter-spacing: 1px;
        }

        .skill-item {
          margin-bottom: 1.2rem;
        }

        .skill-label-wrap {
          display: flex;
          justify-content: space-between;
          margin-bottom: 0.4rem;
          font-size: 0.85rem;
          font-family: var(--font-heading);
        }

        .skill-name {
          color: var(--text-secondary);
        }

        .skill-value {
          color: var(--primary);
        }

        .skill-progress {
          height: 6px;
          background: rgba(0, 255, 65, 0.05);
          border-radius: 3px;
          overflow: hidden;
          border: 1px solid var(--glass-border);
        }

        .skill-progress-fill {
          height: 100%;
          position: relative;
        }

        .skill-progress-fill::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
          animation: progress-slide 2s infinite;
        }

        @keyframes progress-slide {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </section>
  )
}

export default Skills
