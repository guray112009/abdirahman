import React, { useState } from 'react';
import './global.css';

import awsImage from '../images/AWDLEARN.png';
import softwareImage from '../images/software-engineering-services.jpg';
import designImage from '../images/WebDesign.jpg';
import networkImage from '../images/CablelingNet.jpg';
import repairImage from '../images/computer-repair-service.webp';
import tutoringImage from '../images/Tutoring.webp';

export default function Services() {
  const [expanded, setExpanded] = useState(null);

  const toggleExpand = (id) => {
    setExpanded(expanded === id ? null : id);
  };

  const services = [
    {
      id: 'aws',
      title: 'AWS Cloud & Infrastructure',
      subtitle: 'Scalable, Secure Cloud Solutions',
      image: awsImage,
      short: 'Setup, optimize, and secure AWS environments.',
      long: `My AWS experience covers setting up secure cloud environments, optimizing infrastructure, and engaging disaster recovery services for resilient IT solutions. I work with EC2, S3, IAM, Lambda, and VPC to build scalable systems.`,
    },
    {
      id: 'software',
      title: 'Software Development',
      subtitle: 'Full-Stack Web & App Builds',
      image: softwareImage,
      short: 'Build robust back-end and intuitive front-end systems.',
      long: `I specialize in building robust back-end systems and intuitive front-end user interfaces. I use technologies like React, Node.js, and MongoDB to create seamless digital experiences.`,
    },
    {
      id: 'design',
      title: 'Website Design & CMS',
      subtitle: 'Responsive & User-Friendly Sites',
      image: designImage,
      short: 'Design modern websites with easy content management.',
      long: `I emphasize responsive design and ease of use, delivering websites that are visually appealing and powered by user-friendly content management systems like WordPress and Webflow.`,
    },
    {
      id: 'network',
      title: 'Network Configuration',
      subtitle: 'Routers, Switches, Firewalls',
      image: networkImage,
      short: 'Configure secure networks for homes and businesses.',
      long: `My networking skills include configuring routers, switches, and firewalls to establish secure, efficient networks for both small and large-scale environments. I also troubleshoot connectivity and optimize performance.`,
    },
    {
      id: 'repair',
      title: 'Computer Repair & Support',
      subtitle: 'Hardware & Software Troubleshooting',
      image: repairImage,
      short: 'Fix and maintain systems for smooth operation.',
      long: `I provide comprehensive support for both hardware and software issues, ensuring systems run smoothly and efficiently through meticulous troubleshooting and repairs.`,
    },
    {
      id: 'tutoring',
      title: 'IT Tutoring & Mentoring',
      subtitle: 'Personalized Tech Guidance',
      image: tutoringImage,
      short: 'Teach programming, networking, and cloud skills.',
      long: `My tutoring services cover programming, networking, and cloud computing. I help learners build confidence and technical skills through personalized guidance and hands-on practice.`,
    },
  ];

  return (
    <main className="education-page fade-in">
      <h1 className="page-title">📋 My Service Offerings</h1>

      {services.map(({ id, title, subtitle, image, short, long }) => (
        <section key={id} className="education-section alt">
          <img src={image} alt={title} className="education-photo" />
          <div className="education-text center-text">
            <h2>{title}</h2>
            <h3>{subtitle}</h3>
            <p>{short}</p>
            <button className="read-more-btn" onClick={() => toggleExpand(id)}>
              {expanded === id ? 'Hide Details' : 'Read More'}
            </button>
            {expanded === id && <p>{long}</p>}
          </div>
        </section>
      ))}
    </main>
  );
}