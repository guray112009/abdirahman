import React from 'react';
import resume from '../images/resume.pdf';
import portfolio from '../images/Cabdirahman_Ibrahim_Portfolio.pdf';
import profilepic from '../images/myself.jpeg';
import skillsImage from '../images/Tech-Stack.webp';
import codeImage from '../images/Code.jpeg';
import './global.css';

export default function About() {
  return (
    <div className="about-page fade-in">
      <h1>About Me</h1>
      <img src={profilepic} alt="Cabdirahman Ibrahim" className="profile-pic" />

      <section className="about-section">
        <h2>Introduction</h2>
        <p className="bio">
          I'm <strong>Cabdirahman Ibrahim</strong>, a passionate web developer based in Toronto. I specialize in building responsive, user-friendly websites and applications using modern technologies like React, JavaScript, and CSS. I'm currently studying Web Application Development at Centennial College and love turning ideas into interactive digital experiences.
        </p>
      </section>

      <section className="about-section">
        <h2>Education</h2>
        <p className="bio">
          I hold a diploma in <strong>Computer Systems Technician – Networking</strong> and am currently completing my diploma in <strong>Software Engineering Technician</strong>. My academic journey has equipped me with hands-on experience in configuring secure networks, diagnosing connectivity issues, and implementing cybersecurity protocols.
        </p>
        <p className="bio">
          For full details, visit my <a href="/education" className="inline-link">Education page</a>.
        </p>
      </section>

      <section className="about-section">
        <h2>Technical Skills</h2>
        <img src={skillsImage} alt="Technical Stack" className="section-image" />
        <p className="bio">
          I work with technologies like <strong>React</strong>, <strong>Vite</strong>, <strong>Node.js</strong>, <strong>HTML</strong>, <strong>CSS</strong>, <strong>JavaScript</strong>, <strong>C#</strong>, <strong>Python</strong>, and <strong>Java</strong>. I enjoy building full-stack applications and scalable backend systems.
        </p>
        <p className="bio">
          My background in networking includes configuring secure networks, diagnosing connectivity issues, and implementing cybersecurity protocols using tools like <strong>Cisco Packet Tracer</strong>, <strong>Wireshark</strong>, and firewall systems. This foundation strengthens my ability to build robust, secure applications and infrastructure.
        </p>
        <img src={codeImage} alt="Programming Concepts" className="section-image" />
      </section>

      <section className="about-section">
        <h2>Career Portfolio</h2>
        <p className="bio">
          Welcome to my professional portfolio. Here you'll find my resume, cover letter, academic achievements, professional accomplishments, and samples of my work. This portfolio reflects my skills, experience, and dedication to growth in the IT and networking field.
        </p>
        <a href={portfolio} target="_blank" rel="noopener noreferrer" className="resume-link">
          📄 View My Career Portfolio PDF
        </a>
      </section>

      <section className="about-section">
        <h2>Resume</h2>
        <p className="bio">
          For a detailed overview of my qualifications and experience, feel free to download my resume.
        </p>
        <a href={resume} target="_blank" rel="noopener noreferrer" className="resume-link">
          📄 Download My Resume PDF
        </a>
      </section>
    </div>
  );
}