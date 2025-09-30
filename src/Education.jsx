import React, { useState } from 'react';
import './global.css';

import internetCafeImage from '../images/InternetCafe.jpg';
import teachesImage from '../images/teaches.webp';
import diplomaPDF from '../images/Comp-Sys-Tech-Net.pdf';
import soundVisionPDF from '../images/SoundVision.pdf';
import awsImage from '../images/AWS.png';
import softwareImage from '../images/Software.webp';

export default function Education() {
  const [expanded, setExpanded] = useState(null);

  const toggleExpand = (section) => {
    setExpanded(expanded === section ? null : section);
  };

  const educationItems = [
    {
      id: 'cafe',
      title: 'Internet Cafe Management',
      subtitle: 'Hands-on Experience',
      image: internetCafeImage,
      content: `For seven years, I ran an internet cafe that served as both a business and a learning lab. I handled hardware repairs, installed operating systems, set up LAN networks, and helped customers troubleshoot their devices. This experience taught me real-world IT skills and built my confidence in managing systems and people.`,
    },
    {
      id: 'networking',
      title: 'Computer Systems Technician – Networking',
      subtitle: 'Centennial College – Honors Graduate',
      image: null,
      content: `I graduated with Honors from Centennial College, where I studied network architecture, security protocols, and system diagnostics. I worked with Cisco Packet Tracer, Wireshark, and real lab equipment to configure routers, switches, and firewalls. This program gave me the technical foundation to pursue advanced networking and cloud certifications.`,
      link: {
        label: '🎓 View My Networking Diploma',
        url: diplomaPDF,
      },
    },
    {
      id: 'teaching',
      title: 'Teacher Training Certificate',
      subtitle: 'Islamic Education Program',
      image: teachesImage,
      content: `Through an Islamic education program, I learned how to manage classrooms, design lesson plans, and engage students in meaningful learning. I taught core subjects and religious studies, gaining valuable communication and leadership skills that I now apply in technical mentoring and team collaboration.`,
      link: {
        label: '🏫 View My Teaching Certificate',
        url: soundVisionPDF,
      },
    },
    {
      id: 'software',
      title: 'Software Engineering Technician Program',
      subtitle: 'Centennial College',
      image: softwareImage,
      content: `At Centennial College, I’m mastering full-stack development, object-oriented programming, and database design. I’ve built web apps using HTML, CSS, JavaScript, and React, and worked with SQL and NoSQL databases. This program is shaping my ability to build scalable, maintainable software systems.`,
    },
    {
      id: 'ai',
      title: 'AI Introduction & System Design',
      subtitle: 'In-Person Learning with Hands-On Labs',
      image: null,
      content: `I’m taking in-person AI courses with hands-on labs that cover machine learning, neural networks, and intelligent system architecture. I’ve built small models, explored Python-based frameworks, and studied how AI integrates into modern applications. This training is preparing me to design smart, adaptive software.`,
    },
    {
      id: 'aws',
      title: 'AWS Cloud Practitioner',
      subtitle: 'Cloud Architecture & Services',
      image: awsImage,
      content: `I’m studying AWS Cloud fundamentals including EC2, S3, Lambda, IAM, and VPC. I’ve practiced deploying applications, managing cloud resources, and optimizing costs. The course also covers security, billing, and aligning cloud solutions with business goals. This certification is my gateway to cloud engineering and DevOps.`,
    },
  ];

  return (
    <main className="education-page fade-in">
      <h1 className="page-title">📘 My Education Journey</h1>

      {educationItems.map(({ id, title, subtitle, image, content, link }) => (
        <section key={id} className={`education-section ${['networking', 'software', 'aws'].includes(id) ? 'alt' : ''}`}>
          {image && <img src={image} alt={title} className="education-photo" />}
          <div className="education-text center-text">
            <h2>{title}</h2>
            <h3>{subtitle}</h3>
            <button className="read-more-btn" onClick={() => toggleExpand(id)}>
              {expanded === id ? 'Hide Details' : 'Read More'}
            </button>
            {expanded === id && (
              <>
                <p>{content}</p>
                {link && (
                  <a href={link.url} target="_blank" rel="noopener noreferrer" className="pdf-link">
                    {link.label}
                  </a>
                )}
              </>
            )}
          </div>
        </section>
      ))}
    </main>
  );
}