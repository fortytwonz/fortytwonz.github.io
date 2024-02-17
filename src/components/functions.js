// functions.js
import React from 'react';
import { StaticImage } from "gatsby-plugin-image";

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

export const Logo = () => (
  <StaticImage 
    src="../images/logo-6.svg" 
    alt="Logo"
    className="header-logo"
    style={{ maxWidth: '100%', height: 'auto' }}
  />
);

export const HeroBG = () => (
  <StaticImage 
    src="../images/hero-bg.jpg" 
    alt="Hero Background Image"
    className="hero-bg-image"
  />
);

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
