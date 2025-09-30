import React from 'react';
import './global.css';
import finalPresentation from '../images/Final_Project_Presentation.pdf';

export default function Project() {
  return (
    <div className="project-page fade-in">
      <h1>My Projects</h1>
      <div className="project-grid">
        {/* Campus Connect Project */}
        <div className="project-card">
          <h2>Campus Connect</h2>
          <p>
            A student portal designed to streamline campus communication and access to resources. Built with HTML, CSS, and JavaScript, hosted on Centennial College’s student web server.
          </p>
          <a
            href="http://studentweb.cencol.ca/cibrahim/CampusConnectProject/index.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            🔗 Visit Campus Connect
          </a>
        </div>

        {/* Final Registration Project */}
        <div className="project-card">
          <h2>Final Registration System</h2>
          <p>
            A registration form project showcasing form validation, user input handling, and clean UI design. Developed as part of my final coursework.
          </p>
          <a
            href="http://studentweb.cencol.ca/cibrahim/FinallyProject/register.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            🔗 Try the Registration Form
          </a>
        </div>

        {/* Final Project Presentation */}
        <div className="project-card">
          <h2>Final Project Presentation</h2>
          <p>
            A PDF presentation summarizing my final project goals, implementation, and outcomes. Includes screenshots, architecture, and reflection.
          </p>
          <a href={finalPresentation} target="_blank" rel="noopener noreferrer">
            📄 Download Presentation (PDF)
          </a>
        </div>
      </div>
    </div>
  );
}