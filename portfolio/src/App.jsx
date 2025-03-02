import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import Typed from 'typed.js';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  useEffect(() => {
    // === Scroll and Navigation Active Effect === //
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('header nav a');
    const header = document.querySelector('header');

    const handleScroll = () => {
      const top = window.scrollY;
      sections.forEach((sec) => {
        const offset = sec.offsetTop - 150;
        const height = sec.offsetHeight;
        const id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
          navLinks.forEach((link) => {
            link.classList.remove('active');
            const targetLink = document.querySelector(`header nav a[href*='${id}']`);
            if (targetLink) targetLink.classList.add('active');
          });
        }
      });

      // Sticky header
      if (header) header.classList.toggle('sticky', window.scrollY > 100);

      // Remove mobile nav active state when scrolling
      const menuIcon = document.getElementById('menu-icon');
      const navbar = document.querySelector('.navbar');
      if (menuIcon && navbar) {
        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');
      }
    };

    window.addEventListener('scroll', handleScroll);

    // === Initialize ScrollReveal === //
    const sr = ScrollReveal({
      reset: true,
      distance: '80px',
      duration: 2000,
      delay: 200,
    });

    sr.reveal('.home-content, .heading', { origin: 'top' });
    sr.reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
    sr.reveal('.home-content h1, .about-img', { origin: 'left' });
    sr.reveal('.home-content p, .about-content', { origin: 'right' });

    // === Initialize Typed.js === //
    // Instead of passing a string, query the element first:
    const typedElement = document.querySelector('.multiple-text');
    let typedInstance;
    if (typedElement) {
      typedInstance = new Typed(typedElement, {
        strings: ['Frontend Developer', 'Student', 'Programmer'],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop: true,
      });
    }

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (typedInstance) {
        typedInstance.destroy();
      }
    };
  }, []);

  return (
    <>
      <Header />
      <main>
        <Home />
        <About />
        <Services />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default App;
