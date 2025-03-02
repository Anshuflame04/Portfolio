import React, { useState, useEffect } from 'react';
// Import the image from your assets folder
import anshuImg from '../assets/anshuu.png';
import './Home.css';

const Home = () => {
  const [text, setText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const roles = ["Frontend Developer", "Web Designer", "Tech Enthusiast", "AIML Developer"];
  const typingSpeed = 50;

  useEffect(() => {
    if (charIndex < roles[roleIndex].length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + roles[roleIndex][charIndex]);
        setCharIndex((prev) => prev + 1);
      }, typingSpeed);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setText('');
        setCharIndex(0);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [charIndex, roleIndex, roles, typingSpeed]);

  return (
    <section className="home" id="home">
      <div className="home-content">
        <h3>Hello, It's Me</h3>
        <h1>Anshuman Ray</h1>
        <h3>
          And I'm a <span className="typed-text">{text}</span>
        </h3>
        <p>
          Welcome to Anshuman Ray's digital universe! Dive into a world where innovation meets inspiration. Explore captivating content tailored just for you. This isn't just a website; it's a journey. Ready to elevate your experience? Let's explore!
        </p>
        <div className="social-media">
          <a
            href="https://www.facebook.com/anshuman.ray.7902"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bx bxl-facebook"></i>
          </a>
          <a
            href="https://github.com/Anshuflame04"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bx bxl-github"></i> {/* Added GitHub icon */}
          </a>
          <a
            href="https://www.instagram.com/anshu_flame_04?utm_source=qr&igsh=amxldW5neWhnam1x"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bx bxl-instagram-alt"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/anshuman-ray-266060268?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bx bxl-linkedin"></i>
          </a>
        </div>
        <a href="#" className="btn">
          Download CV
        </a>
      </div>
      <div className="home-img">
        <img src={anshuImg} alt="Anshuman Ray" />
      </div>
    </section>
  );
};

export default Home;
