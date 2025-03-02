import React from 'react';
import comp1 from '../assets/comp1.jpg';  // Import image 1
import comp2 from '../assets/comp2.jpg';  // Import image 2
import comp3 from '../assets/comp3.jpg';  // Import image 3
import comp4 from '../assets/comp4.jpg';  // Import image 4
import comp5 from '../assets/comp5.jpg';  // Import image 5
import comp6 from '../assets/comp6.jpg';  // Import image 6
import './Portfolio.css';  // Import the CSS file

const Portfolio = () => {
  return (
    <section className="portfolio" id="portfolio">
      <h1 className="heading">
        Latest <span>Project</span>
      </h1>
      <div className="portfolio-container">
        <div className="portfolio-box">
          <img src={comp1} alt="Project 1" />
          <div className="portfolio-layer">
            <h4>You Content</h4>
            <p>
              A platform for content creators to share and showcase their work. Built with a focus on ease of use and minimalistic design.
            </p>
            <a href="https://you-content.netlify.app/" target="_blank" rel="noreferrer">
              <i className="bx bx-link-external"></i>
            </a>
          </div>
        </div>
        <div className="portfolio-box">
          <img src={comp2} alt="Project 2" />
          <div className="portfolio-layer">
            <h4>AI Vision Assistant</h4>
            <p>
              An AI-powered assistant that can understand and respond to voice commands while providing real-time image recognition. Designed to assist in various daily tasks.
            </p>
            <a href="https://ai-vision-assistant.netlify.app/" target="_blank" rel="noreferrer">
              <i className="bx bx-link-external"></i>
            </a>
          </div>
        </div>
        <div className="portfolio-box">
          <img src={comp3} alt="Project 3" />
          <div className="portfolio-layer">
            <h4>Travvo</h4>
            <p>
              A travel app that helps users explore exciting travel destinations and plan their trips easily. It provides recommendations based on preferences and interests.
            </p>
            <a href="https://travvo.netlify.app/" target="_blank" rel="noreferrer">
              <i className="bx bx-link-external"></i>
            </a>
          </div>
        </div>
        <div className="portfolio-box">
          <img src={comp4} alt="Project 4" />
          <div className="portfolio-layer">
            <h4>Travel Project</h4>
            <p>Explore my latest travel project with exciting destinations.</p>
            <a href="https://anshuflame04.github.io/Travel" target="_blank" rel="noreferrer">
              <i className="bx bx-link-external"></i>
            </a>
          </div>
        </div>
        <div className="portfolio-box">
          <img src={comp5} alt="Project 5" />
          <div className="portfolio-layer">
            <h4>Web Design</h4>
            <p>
              A clean and professional website design tailored for modern businesses. Ensuring high performance and user engagement.
            </p>
            <a href="#" target="_blank" rel="noreferrer">
              <i className="bx bx-link-external"></i>
            </a>
          </div>
        </div>
        <div className="portfolio-box">
          <img src={comp6} alt="Project 6" />
          <div className="portfolio-layer">
            <h4>Web Design</h4>
            <p>
              A minimalist web design project focused on simplicity and functionality. Perfect for those who appreciate clean aesthetics.
            </p>
            <a href="#" target="_blank" rel="noreferrer">
              <i className="bx bx-link-external"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
