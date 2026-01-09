import React, { useState, useEffect } from 'react'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])



  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-content">
        <div className="logo-wrapper">
          <a href="#" className="logo">
            HG<span className="dot">.</span>
          </a>
          <div className="running-quote">
            <div className="lag-wrapper">
              <span className="ticker-text">NO SYSTEM IS SAFE // NO SYSTEM IS SAFE // NO SYSTEM IS SAFE // NO SYSTEM IS SAFE // NO SYSTEM IS SAFE // NO SYSTEM IS SAFE</span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .nav-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .logo-wrapper {
          display: flex;
          align-items: center;
          gap: 2rem;
          width: 100%;
        }

        .running-quote {
          flex: 1;
          overflow: hidden;
          white-space: nowrap;
          border: 1px solid var(--primary);
          padding: 0.5rem 1rem;
          background: rgba(0, 255, 65, 0.05);
          position: relative;
          box-shadow: 0 0 15px rgba(0, 255, 65, 0.1);
        }

        .running-quote::before {
          content: "[";
          position: absolute;
          left: 5px;
          top: 50%;
          transform: translateY(-50%);
          color: var(--primary);
          font-weight: bold;
          z-index: 3;
        }

        .running-quote::after {
          content: "]";
          position: absolute;
          right: 5px;
          top: 50%;
          transform: translateY(-50%);
          color: var(--primary);
          font-weight: bold;
          z-index: 3;
        }

        .lag-wrapper {
          display: inline-block;
          animation: lag 4s infinite;
        }

        .ticker-text {
          display: inline-block;
          font-family: var(--font-heading);
          font-size: 0.8rem;
          color: var(--primary);
          letter-spacing: 2px;
          animation: ticker 30s linear infinite;
          text-shadow: 0 0 5px var(--primary);
          padding-left: 2rem;
        }

        @keyframes ticker {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        @keyframes lag {
          0%, 10%, 100% { transform: translateX(0) scaleY(1); filter: blur(0); }
          11% { transform: translateX(-3px) skewX(10deg) scaleY(1.1); filter: blur(1px); }
          12% { transform: translateX(3px) skewX(-10deg); filter: blur(0); }
          13% { transform: translateX(0); }
          30% { transform: translateX(0); }
          31% { transform: translateY(2px); clip-path: inset(20% 0 50% 0); }
          32% { transform: translateY(-2px); clip-path: inset(50% 0 20% 0); }
          33% { transform: translateY(0); clip-path: inset(0 0 0 0); }
          45% { transform: translateX(0); }
          46% { transform: translateX(10px); color: var(--accent); }
          47% { transform: translateX(0); color: var(--primary); }
        }
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
          padding: 1.5rem 0;
          transition: var(--transition);
        }

        .navbar.scrolled {
          padding: 1rem 0;
          background: rgba(2, 6, 23, 0.8);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-bottom: 1px solid var(--glass-border);
        }

        .nav-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo {
          font-family: var(--font-heading);
          font-size: 1.8rem;
          font-weight: 800;
          letter-spacing: -1px;
        }

        .dot {
          color: var(--primary);
        }

        .nav-links {
          display: flex;
          gap: 2.5rem;
          align-items: center;
        }

        .nav-links a {
          font-weight: 500;
          font-size: 0.95rem;
          opacity: 0.8;
        }

        .nav-links a:hover {
          opacity: 1;
          color: var(--primary);
        }

        .social-links {
          display: flex;
          gap: 1.2rem;
          padding-left: 1.5rem;
          border-left: 1px solid var(--glass-border);
        }

        .menu-icon {
          display: none;
          cursor: pointer;
        }

        @media (max-width: 768px) {
          .menu-icon {
            display: block;
          }

          .nav-links {
            position: fixed;
            top: 0;
            right: -100%;
            width: 80%;
            height: 100vh;
            background: var(--bg-color);
            flex-direction: column;
            justify-content: center;
            align-items: center;
            transition: 0.4s ease-in-out;
            z-index: 999;
          }

          .nav-links.active {
            right: 0;
            box-shadow: -10px 0 30px rgba(0,0,0,0.5);
          }

          .social-links {
            border: none;
            padding: 0;
            margin-top: 2rem;
          }
        }
      `}</style>
    </nav>
  )
}

export default Navbar
