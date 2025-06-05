import React, { useState, useEffect } from 'react';
import '../styles/Hero.css';

const Hero = () => {
  const name = "IGWE BRIGHT SUNDAY.";
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(150);

  useEffect(() => {
    let timer;
    
    if (!isDeleting && displayText.length < name.length) {
      timer = setTimeout(() => {
        setDisplayText(name.substring(0, displayText.length + 1));
      }, speed);
    } else if (isDeleting && displayText.length > 0) {
      timer = setTimeout(() => {
        setDisplayText(name.substring(0, displayText.length - 1));
      }, speed / 2);
    } else {
      timer = setTimeout(() => {
        setIsDeleting(!isDeleting);
        setSpeed(isDeleting ? 150 : 100);
      }, 1000);
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, speed]);

  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Hi, I am <span className="typewriter-name">{displayText}<span className="cursor">|</span></span></h1>
            <h2>Frontend Developer</h2>
            <p>I build exceptional digital experiences that are fast, accessible, visually appealing, and responsive.</p>
            <div className="hero-buttons">
              <a href="#contact" className="btn primary-btn">Contact Me</a>
              <a href="#projects" className="btn secondary-btn">Projects</a>
            </div>
          </div>
          <div className="hero-socials">
            <a href="https://github.com/br-1-ght" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/bright-igwe-a705ba361" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-linkedin"></i>
            </a>
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-twitter"></i>
            </a>
          </div>
        </div>
        <div className="hero-image">
          <div className="image-container">
            <img src="./assets/images/bright1.jpg" alt="Igwe Bright" />
          </div>
        </div>
      </div>
      <div className="scroll-indicator">
        <div className="mouse"></div>
        <p>Scroll Down</p>
      </div>
    </section>
  );
};

export default Hero;