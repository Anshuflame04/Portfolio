import React from 'react';
import anshu2 from '../assets/anshu2.png'; // Correct image import
import './About.css'; // Import the CSS file

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-img">
        <img src={anshu2} alt="About me" className="animated-img" />
      </div>
      <div className="about-content">
        <h2 className="heading">
          About <span>Me</span>
        </h2>
        <h3>Frontend Developer</h3>
        <p>
        I’m Anshuman Ray, an AI & Machine Learning Developer specializing in computer vision, deep learning, and NLP. With expertise in TensorFlow, PyTorch, and OpenCV, I build intelligent systems that bridge AI with real-world applications. I have worked on AI-powered chatbots, crop disease detection, and real-time computer vision solutions. Passionate about optimizing AI models for mobile and web deployment, I integrate AI seamlessly into React, FastAPI, and Firebase applications. Always exploring new innovations in AI-driven automation and scalable solutions, I strive to push boundaries in machine learning and intelligent systems. opment.
        </p>
        <a href="#" className="btn">
          Read More
        </a>
      </div>
    </section>
  );
};

export default About;
