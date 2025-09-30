import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import team1 from '../images/team1.jpg';
import team2 from '../images/team2.jpeg';
import team3 from '../images/team3.webp';
import team4 from '../images/team4.png';
import team5 from '../images/team5.webp';
import team6 from '../images/team6.jpg';
import team7 from '../images/team7.webp';

import missionImage from '../images/mission.png';
import skillsImage from '../images/skills.webp';
import networkingImage from '../images/networking.webp';
import developmentImage from '../images/development.webp';

const heroImages = [team1, team2, team3, team4, team5, team6, team7];

export default function Home() {
  const [currentHeroIndex, setCurrentHeroIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeroIndex(prev => (prev + 1) % heroImages.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="home-page">
      {/* Hero Section */}
      <section className="centered-hero fade-in">
        <div className="hero-image-wrapper">
          <img
            src={heroImages[currentHeroIndex]}
            alt={`Hero slide ${currentHeroIndex + 1}`}
            className="hero-full-image"
          />
        </div>
        <div className="hero-text">
          <h1>Welcome to My Portfolio</h1>
          <p>
            I'm <strong>Abdirahman</strong>, a Toronto-based tech professional with a strong foundation in networking and software development.
          </p>
          <p>
            I hold a diploma in <strong>Computer Systems Technician – Networking</strong> and am currently completing my diploma in <strong>Software Engineering Technician</strong>.
          </p>
          <p>
            My journey began with configuring secure networks, diagnosing connectivity issues, and implementing cybersecurity protocols using Cisco tools. Over time, I expanded into full-stack development, building responsive web applications and scalable backend systems.
          </p>
          <Link to="/about" className="hero-button">Learn More About Me</Link>
        </div>
      </section>

      {/* Mission Section */}
      <section className="info-section fade-in">
        <img src={missionImage} alt="Mission illustration" className="info-image" />
        <div className="info-text">
          <h2>My Mission</h2>
          <p>
            I build modern, responsive web applications that solve real-world problems and deliver exceptional user experiences. I believe in clean code, intuitive design, and continuous learning.
          </p>
          <Link to="/about#mission" className="info-button">More About My Mission</Link>
        </div>
      </section>

      {/* Skills Section */}
      <section className="info-section reverse fade-in">
        <img src={skillsImage} alt="Skills chart" className="info-image" />
        <div className="info-text">
          <h2>Technical Skills</h2>
          <p>
            I work with technologies like <strong>React</strong>, <strong>Vite</strong>, and <strong>Node.js</strong>. I'm also proficient in <strong>HTML</strong>, <strong>CSS</strong>, <strong>JavaScript</strong>, <strong>C#</strong>, <strong>Python</strong>, and <strong>Java</strong>.
          </p>
          <Link to="/project" className="info-button">See My Projects</Link>
        </div>
      </section>

      {/* Networking Section */}
      <section className="info-section fade-in">
        <img src={networkingImage} alt="Networking tools" className="info-image" />
        <div className="info-text">
          <h2>Networking Expertise</h2>
          <p>
            I’ve configured secure networks, diagnosed connectivity issues, and implemented cybersecurity protocols using Cisco tools. My experience with Packet Tracer, Wireshark, and firewall systems gives me a strong edge in infrastructure design.
          </p>
          <Link to="/education" className="info-button">View My Education</Link>
        </div>
      </section>

      {/* Development Section */}
      <section className="info-section reverse fade-in">
        <img src={developmentImage} alt="Development workflow" className="info-image" />
        <div className="info-text">
          <h2>Software Development</h2>
          <p>
            I build full-stack applications, design responsive interfaces, and write backend logic that powers real-world solutions. Whether it’s a contact form or a desktop app prototype, I bring precision and creativity to every project.
          </p>
          <Link to="/services" className="info-button">Explore My Services</Link>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="site-footer">
        <div className="footer-content">
          <p>© {new Date().getFullYear()} Abdirahman. All rights reserved.</p>
          <nav className="footer-links">
            <Link to="/contact">Contact</Link>
            <Link to="/services">Services</Link>
            <Link to="/project">Projects</Link>
            <Link to="/about">About</Link>
            <Link to="/education">Education</Link>
            <Link to="/">Home</Link>
          </nav>
        </div>
      </footer>
    </main>
  );
}