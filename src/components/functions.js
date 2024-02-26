// functions.js
import React, { useState, useEffect } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import logo1 from '../images/logos/logo-1.svg';
import logo2 from '../images/logos/logo-2.svg';
import logo3 from '../images/logos/logo-3.svg';
import logo4 from '../images/logos/logo-4.svg';
import logo5 from '../images/logos/logo-5.svg';
import logo6 from '../images/logos/logo-6.svg';


export const Navigation = () => {
  return (
    <nav>
      <ul>    
        <li><a href="Services">Services</a></li>
        <li><a href="About">About</a></li>
        <li><a href="Contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export const Logo = () => {
  const [logo, setLogo] = useState(null);
  const logoImages = [logo1, logo2, logo3, logo4, logo5, logo6];

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * logoImages.length);
    const randomLogo = logoImages[randomIndex];
    setLogo(randomLogo);
  }, []);

  return <img src={logo} alt="Logo" className="header-logo" />;
};


export const LogoServices = ({ src }) => (
  <StaticImage
    src={src}
    alt="Logo"
    className="logo-image"
  />
);

export const HeroBG = ({ src }) => (
  <StaticImage 
    src={src} 
    alt="Hero Background Image"
    className="hero-bg-image"
  />
);

//export const LogoServices = ({ src }) => (
//  <StaticImage
//    src={src}
//    alt="Logo"
//    className="logo-image"
//  />
//);

//export const HeroBG = ({ src }) => (
//  <StaticImage 
//    src={src} 
//    alt="Hero Background Image"
//    className="hero-bg-image"
//  />
//);

export const ContactButton = () => {
  return (
    <a href="#contact" className="contact-button">
      Contact Us
    </a>
  );
};

export const ContactForm = () => {
  return (
    <form>
      <title>Contact</title>
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" name="name" required />
      <label htmlFor="email">Email:</label>
      <input type="email" id="email" name="email" required />
      <label htmlFor="message">Message:</label>
      <textarea id="message" name="message" required></textarea>
      <button type="submit">Send</button>
    </form>
  );
};
