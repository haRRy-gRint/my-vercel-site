import React from 'react'
import { ArrowRight, Download } from 'lucide-react'
import SpiderWeb from './SpiderWeb'
import heroImg from '../assets/harsh_hero.jpg'

const Hero = () => {
  return (
    <section className="section hero">
      <div className="container">
        <div className="hero-content animate-fade-in" style={{ textAlign: 'center', margin: '0 auto' }}>
          <div className="hero-image-wrapper">
            <div className="hero-image-border"></div>
            <img src={heroImg} alt="Harsh Ganeshwade" className="hero-profile-img" />
            <div className="scanline-circle"></div>
          </div>
          <span className="badge">Building Secure & Scalable Solutions</span>
          <h1 className="glitch-wrapper">
            <span className="glitch" data-text="Harsh Ganeshwade">Harsh Ganeshwade</span>
          </h1>
          <p className="hero-description">
            Computer Science Engineer & Cybersecurity Enthusiast. Aspiring to leverage technical skills in a dynamic environment to drive technological advancement.
          </p>

          <SpiderWeb />

          <div className="hero-btns" style={{ marginTop: '2rem' }}>
            <a href="#projects" className="btn btn-primary">
              View Projects <ArrowRight size={18} />
            </a>
            <button onClick={() => window.print()} className="btn btn-outline">
              Print Resume (PDF) <Download size={18} />
            </button>
          </div>
        </div>
      </div>

      <style>{`
        .hero {
          min-height: 90vh;
          display: flex;
          align-items: center;
          padding-top: 10rem;
        }

        .hero-content {
          max-width: 800px;
        }

        .hero-image-wrapper {
          position: relative;
          width: 180px;
          height: 180px;
          margin: 0 auto 2.5rem;
          padding: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .hero-image-border {
          position: absolute;
          inset: 0;
          border: 2px solid var(--primary);
          border-radius: 50%;
          border-top-color: transparent;
          border-bottom-color: transparent;
          animation: spin 4s linear infinite;
        }

        .hero-profile-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 50%;
          border: 1px solid var(--glass-border);
          box-shadow: 0 0 30px var(--primary-glow);
          z-index: 1;
        }

        .scanline-circle {
          position: absolute;
          inset: 10px;
          border-radius: 50%;
          background: linear-gradient(to bottom, transparent, var(--primary-glow), transparent);
          background-size: 100% 200%;
          opacity: 0.2;
          z-index: 2;
          pointer-events: none;
          animation: scan-circle 3s linear infinite;
        }

        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes scan-circle {
          0% { background-position: 0% 0%; }
          100% { background-position: 0% 100%; }
        }

        .badge {
          display: inline-block;
          padding: 0.5rem 1rem;
          background: var(--glass);
          border: 1px solid var(--glass-border);
          border-radius: 100px;
          font-size: 0.8rem;
          font-weight: 600;
          color: var(--primary);
          margin-bottom: 2rem;
        }

        h1 {
          font-size: clamp(3rem, 10vw, 5rem);
          line-height: 1.1;
          margin-bottom: 2rem;
          letter-spacing: -2px;
        }

        .hero-description {
          font-size: clamp(1.1rem, 2vw, 1.4rem);
          color: var(--text-secondary);
          margin-bottom: 1rem;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        .glitch-wrapper {
          position: relative;
          margin-bottom: 2rem;
        }

        .glitch {
          position: relative;
          color: var(--primary);
          font-size: clamp(3rem, 10vw, 5rem);
          font-weight: 800;
          text-transform: uppercase;
        }

        .glitch::before,
        .glitch::after {
          content: attr(data-text);
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: var(--bg-color);
        }

        .glitch::before {
          left: 2px;
          text-shadow: -2px 0 #ff00c1;
          clip: rect(44px, 450px, 56px, 0);
          animation: glitch-anim 5s infinite linear alternate-reverse;
        }

        .glitch::after {
          left: -2px;
          text-shadow: -2px 0 #00fff9;
          clip: rect(44px, 450px, 56px, 0);
          animation: glitch-anim2 5s infinite linear alternate-reverse;
        }

        @keyframes glitch-anim {
          0% { clip: rect(31px, 9999px, 94px, 0); }
          20% { clip: rect(91px, 9999px, 43px, 0); }
          40% { clip: rect(65px, 9999px, 59px, 0); }
          60% { clip: rect(57px, 9999px, 5px, 0); }
          80% { clip: rect(34px, 9999px, 86px, 0); }
          100% { clip: rect(67px, 9999px, 26px, 0); }
        }

        @keyframes glitch-anim2 {
          0% { clip: rect(65px, 9999px, 100px, 0); }
          20% { clip: rect(23px, 9999px, 45px, 0); }
          40% { clip: rect(78px, 9999px, 32px, 0); }
          60% { clip: rect(12px, 9999px, 90px, 0); }
          80% { clip: rect(56px, 9999px, 12px, 0); }
          100% { clip: rect(20px, 9999px, 60px, 0); }
        }


        .highlight {
          color: var(--text-primary);
          font-weight: 600;
        }

        .hero-btns {
          display: flex;
          gap: 1.5rem;
          flex-wrap: wrap;
        }

        @media (max-width: 768px) {
          .hero {
            padding-top: 8rem;
            text-align: center;
          }

          .hero-content {
            margin: 0 auto;
          }

          .hero-description {
            margin: 0 auto 3rem;
          }

          .hero-btns {
            justify-content: center;
          }
        }
      `}</style>
    </section>
  )
}

export default Hero
