import React from 'react'
import { Briefcase, GraduationCap, Award, BookOpen } from 'lucide-react'

const Experience = () => {
    return (
        <section id="experience" className="section container">
            <div className="section-header">
                <span className="section-subtitle">Resume</span>
                <h2 className="section-title">Experience & <span className="gradient-text">Qualifications</span></h2>
            </div>

            <div className="experience-grid">
                {/* Work Experience */}
                <div className="exp-column">
                    <h3 className="column-title"><Briefcase size={18} /> WORK_HISTORY</h3>
                    <div className="timeline">
                        <div className="timeline-item cyber-card scanline-container">
                            <div className="entry-id">LOG_ID: EXP_001</div>
                            <span className="timeline-date">Dec 2025 - Jan 2026</span>
                            <h4>Cyber Security Engineer</h4>
                            <h5>Sunbeam Infotech, Pune, India</h5>
                            <ul className="timeline-details">
                                <li>Working on IDS/IPS systems</li>
                                <li>Monitoring network traffic for suspicious activity</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Education */}
                <div className="exp-column">
                    <h3 className="column-title"><GraduationCap size={18} /> EDU_HISTORY</h3>
                    <div className="timeline">
                        <div className="timeline-item cyber-card scanline-container">
                            <div className="entry-id">LOG_ID: EDU_001</div>
                            <span className="timeline-date">June 2020</span>
                            <h4>ICSE</h4>
                            <h5>Santhome School, Sangli, India</h5>
                        </div>
                        <div className="timeline-item cyber-card scanline-container">
                            <div className="entry-id">LOG_ID: EDU_002</div>
                            <span className="timeline-date">Sep 2022 - Present</span>
                            <h4>B.Tech in Computer Science Engineering</h4>
                            <h5>DKTE Textile and Engineering Institute, Ichalkaranji</h5>
                        </div>
                    </div>
                </div>

                {/* Certifications */}
                <div className="exp-column">
                    <h3 className="column-title"><Award size={18} /> CERT_DB</h3>
                    <div className="cert-list">
                        <div className="cert-item cyber-card scanline-container">
                            <div className="entry-id">CERT_ID: 72A</div>
                            <h4>Cyber Security</h4>
                            <p>Sunbeam Infotech (Jan 2026)</p>
                        </div>
                        <div className="cert-item cyber-card scanline-container">
                            <div className="entry-id">CERT_ID: 15F</div>
                            <h4>Participation of The Hacker Among Us</h4>
                            <p>Hack with Her</p>
                        </div>
                        <div className="cert-item cyber-card scanline-container">
                            <div className="entry-id">CERT_ID: 99D</div>
                            <h4>Prompt Engineering</h4>
                            <p>Learn Prompting (Dec 2025)</p>
                        </div>
                    </div>
                </div>

                {/* Publications */}
                <div className="exp-column">
                    <h3 className="column-title"><BookOpen size={18} /> PUB_RECORDS</h3>
                    <div className="cert-list">
                        <div className="cert-item cyber-card scanline-container">
                            <div className="entry-id">ISBN_LOC: 001</div>
                            <h4>Latte Love and Painted Promises</h4>
                            <p>Feb 2025 - A book of light romance and bigger twists</p>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
                .experience-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
                    gap: 3rem;
                }

                .column-title {
                    display: flex;
                    align-items: center;
                    gap: 0.8rem;
                    margin-bottom: 2rem;
                    color: var(--primary);
                    font-size: 1.1rem;
                    font-family: var(--font-heading);
                    border-left: 3px solid var(--primary);
                    padding-left: 1rem;
                    letter-spacing: 2px;
                }

                .timeline {
                    display: flex;
                    flex-direction: column;
                    gap: 2rem;
                }

                .timeline-item, .cert-item {
                    padding: 1.5rem;
                    border-radius: 4px;
                    position: relative;
                }

                .entry-id {
                    position: absolute;
                    top: 10px;
                    right: 15px;
                    font-size: 0.6rem;
                    color: var(--primary);
                    opacity: 0.4;
                    font-family: var(--font-heading);
                }

                .timeline-date {
                    font-size: 0.75rem;
                    color: var(--accent);
                    font-family: var(--font-heading);
                    font-weight: 600;
                    margin-bottom: 0.5rem;
                    display: block;
                }

                .timeline-item h4, .cert-item h4 {
                    font-size: 1.2rem;
                    color: var(--text-primary);
                    margin-bottom: 0.3rem;
                    letter-spacing: 0.5px;
                }

                .timeline-item h5 {
                    font-size: 0.85rem;
                    color: #888;
                    font-weight: 500;
                    margin-bottom: 1rem;
                }

                .timeline-details {
                    list-style-type: none;
                }

                .timeline-details li {
                    color: var(--text-secondary);
                    font-size: 0.9rem;
                    margin-bottom: 0.6rem;
                    position: relative;
                    padding-left: 1.2rem;
                    opacity: 0.8;
                }

                .timeline-details li::before {
                    content: '>';
                    position: absolute;
                    left: 0;
                    color: var(--primary);
                    font-family: var(--font-heading);
                }

                .cert-list {
                    display: flex;
                    flex-direction: column;
                    gap: 1.2rem;
                }

                .cert-item p {
                    font-size: 0.85rem;
                    color: var(--text-secondary);
                    opacity: 0.8;
                }

                @media (max-width: 768px) {
                    .experience-grid {
                        grid-template-columns: 1fr;
                    }
                }
            `}</style>
        </section>
    )
}

export default Experience
