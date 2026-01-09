import React from 'react';

const SpiderWeb = () => {
  const sections = [
    { label: 'About', href: '#about', angle: 0 },
    { label: 'Expertise', href: '#skills', angle: 72 },
    { label: 'Experience', href: '#experience', angle: 144 },
    { label: 'Projects', href: '#projects', angle: 216 },
    { label: 'Contact', href: '#contact', angle: 288 },
  ];

  return (
    <div className="spider-web-container">
      <svg viewBox="0 0 400 400" className="spider-web-svg">
        {/* Radial Web Lines */}
        {[1, 2, 3, 4, 5].map((r) => (
          <polygon
            key={r}
            points={sections.map(s => {
              const rad = (s.angle * Math.PI) / 180;
              const x = 200 + (r * 30) * Math.cos(rad);
              const y = 200 + (r * 30) * Math.sin(rad);
              return `${x},${y}`;
            }).join(' ')}
            className="web-ring"
          />
        ))}

        {/* Structural Spokes */}
        {sections.map((s, i) => {
          const rad = (s.angle * Math.PI) / 180;
          return (
            <line
              key={i}
              x1="200"
              y1="200"
              x2={200 + 160 * Math.cos(rad)}
              y2={200 + 160 * Math.sin(rad)}
              className="web-spoke"
            />
          );
        })}

        {/* The Spider (Center) */}
        <g className="spider-group">
          <circle cx="200" cy="200" r="8" fill="var(--primary)" className="spider-body" />
          <path d="M192,200 Q180,180 185,205" className="spider-leg" />
          <path d="M208,200 Q220,180 215,205" className="spider-leg" />
          <path d="M192,200 Q180,220 185,195" className="spider-leg" />
          <path d="M208,200 Q220,220 215,195" className="spider-leg" />
        </g>
      </svg>

      {/* Interactive Labels Restored */}
      {sections.map((s, i) => {
        const rad = (s.angle * Math.PI) / 180;
        const x = 200 + 175 * Math.cos(rad);
        const y = 200 + 175 * Math.sin(rad);
        return (
          <a
            key={i}
            href={s.href}
            className="web-nav-link"
            style={{
              left: `${(x / 400) * 100}%`,
              top: `${(y / 400) * 100}%`,
            }}
          >
            {s.label}
          </a>
        );
      })}

      <style jsx>{`
        .spider-web-container {
          position: relative;
          width: 100%;
          max-width: 500px;
          aspect-ratio: 1/1;
          margin: 2rem auto;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .spider-web-svg {
          position: absolute;
          width: 100%;
          height: 100%;
          filter: drop-shadow(0 0 8px var(--primary-glow));
        }

        .web-ring {
          fill: none;
          stroke: var(--primary);
          stroke-width: 1;
          opacity: 0.2;
          stroke-dasharray: 4;
          animation: pulse-web 4s infinite ease-in-out;
        }

        .web-spoke {
          stroke: var(--primary);
          stroke-width: 1;
          opacity: 0.3;
        }

        .spider-leg {
          fill: none;
          stroke: var(--primary);
          stroke-width: 1.5;
        }

        .spider-body {
          filter: drop-shadow(0 0 15px var(--primary));
          animation: jitter 0.2s infinite;
        }

        .web-nav-link {
          position: absolute;
          transform: translate(-50%, -50%);
          color: var(--primary);
          font-family: var(--font-heading);
          font-size: 0.85rem;
          font-weight: 800;
          text-transform: uppercase;
          background: rgba(0, 0, 0, 0.8);
          padding: 6px 12px;
          border: 1px solid var(--primary);
          border-radius: 4px;
          transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          box-shadow: 0 0 15px var(--primary-glow);
          z-index: 10;
          letter-spacing: 1px;
        }

        .web-nav-link:hover {
          background: var(--primary);
          color: black;
          transform: translate(-50%, -50%) scale(1.15);
          box-shadow: 0 0 30px var(--primary);
          text-shadow: none;
        }

        @keyframes pulse-web {
          0%, 100% { opacity: 0.15; transform: scale(0.98); }
          50% { opacity: 0.4; transform: scale(1.02); }
        }

        @keyframes jitter {
          0% { transform: translate(0,0); }
          50% { transform: translate(2px, -1px); }
          100% { transform: translate(0,0); }
        }
      `}</style>
    </div>
  );
};

export default SpiderWeb;
