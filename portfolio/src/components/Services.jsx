import React from 'react';

const Services = () => {
  return (
    <section className="services" id="services">
      <h2 className="heading">
        My <span>Services</span>
      </h2>
      <div className="services-container">
        <div className="services-box">
          <i className="bx bx-code-alt"></i>
          <h3>Web Development</h3>
          <p>
            I specialize in building responsive, user-friendly websites using modern web technologies like React, Node.js, and CSS frameworks. Whether you need a simple landing page or a full-fledged web application, I ensure high performance and great user experience.
          </p>
          <a href="#" className="btn">
            Read More
          </a>
        </div>
        <div className="services-box">
          <i className="bx bx-brain"></i> {/* AIML Icon */}
          <h3>AI & ML </h3>
          <p>
            I develop intelligent systems using advanced machine learning algorithms, such as deep learning, NLP, and computer vision. From automating tasks to building custom models, custom chatbots for data analysis, I create AI solutions that can learn and improve over time.
          </p>
          <a href="#" className="btn">
            Read More
          </a>
        </div>
        <div className="services-box">
          <i className="bx bx-dumbbell"></i> {/* Calisthenics Icon */}
          <h3>Calisthenics</h3>
          <p>
            I offer personalized calisthenics workout routines to help you build strength, flexibility, and endurance. Whether you're a beginner or an advanced athlete, I design exercises that you can perform at home or in the gym without any equipment.Start at your Home now.Check for more details.
          </p>
          <a href="#" className="btn">
            Read More
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
