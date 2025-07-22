import { useState } from 'react';
import '../styles/Projects.css';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  
  const projects = [
    {
      id: 1,
      title: 'E-commerce Website',
      category: 'react',
      image: './assets/images/Works1.jpeg',
      github: 'https://github.com/',
      demo: 'https://project-demo.com/',
      description: 'A full-featured e-commerce platform built with React.',
      tags: ['React', 'Context API', 'API']
    },
    {
      id: 2,
      title: 'Shipping Website',
      category: 'react',
      image: './assets/images/Works2.png',
      github: 'https://github.com/br-1-ght/Shipping',
      demo: 'https://xpresscargologisticsllc.netlify.app',
      description: 'A responsive shipping website built with REACT.',
      tags: ['REACT', 'API']
    },
    {
      id: 3,
      title: 'Authentication Website',
      category: 'redux',
      image: './assets/images/Works3.png',
      github: 'https://github.com/br-1-ght/Profile',
      demo: 'https://codewithbright.netlify.app',
      description: 'An authentication website built with REACT, Redux and Context API.',
      tags: ['REACT', 'Context,API', 'Redux']
    },
    {
      id: 4,
      title: 'Payment Gateway',
      category: 'react',
      image: './assets/images/Works4.png',
      github: 'https://github.com/br-1-ght/stripe',
      demo: 'https://mystrp.netlify.app/',
      description: 'A modern, responsive Stripe-inspired website showcasing payment solutions, stats, and features for businesses, built with React and styled for sleek user experience and performance.',
      tags: ['REACT', 'Context,API', 'Tailwind CSS', 'Lucide React Icons', ' useState, useEffect, useRef, useMemo', 'ESLint']
    },
    {
      id: 5,
      title: 'E-commerce Website',
      category: 'react',
      image: './assets/images/Works5.png',
      github: 'https://github.com/br-1-ght/E-commerce',
      demo: 'https://eshopfinity.netlify.app/',
      description: 'Shopfinity is a modern e-commerce platform that allows users to browse products, filter by category and price, add items to a cart, checkout, and manage their account. It includes user authentication, a responsive design for desktop and mobile, and toast notifications for user feedback. The application is wrapped in a ThemeProvider for consistent light/dark mode styling across all components.',
      tags: ['REACT', 'React-Toastify', 'Tailwind CSS', 'Lucide React', 'ThemeContext']
    },
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">My <span>Projects</span></h2>
        
        <div className="filter-buttons">
          <button 
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            All
          </button>
          <button 
            className={`filter-btn ${filter === 'react' ? 'active' : ''}`}
            onClick={() => setFilter('react')}
          >
            React
          </button>
          <button 
            className={`filter-btn ${filter === 'redux' ? 'active' : ''}`}
            onClick={() => setFilter('redux')}
          >
            Redux
          </button>
          <button 
            className={`filter-btn ${filter === 'node' ? 'active' : ''}`}
            onClick={() => setFilter('node')}
          >
            Node.js
          </button>
        </div>
        
        <div className="projects-grid">
          {filteredProjects.map(project => (
            <div className="project-card" key={project.id}>
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-links">
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <i class="bi bi-github"></i>
                    </a>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <i class="bi bi-link"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;