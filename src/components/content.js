import React from "react";
import { Logo } from '../components/functions';

export const Header = () => {
  return (
    <header>{/* Header content */}
      <h1>Header</h1>
      <Logo /> {/* Use Logo component */}
      
    </header>
  );
};

export const Hero = () => {
  return (
    <section className="Hero"> 
    <h1>Hero</h1>
      {/* Hero content */}
      <div>
        <h1>Welcome To FortyTwo Technology</h1>
        <h2>Empowering our community with accessible, reliable, and value-driven technology services.</h2>
      </div>
      <div>
        <h1>Need tech help?</h1>
        <h2>Contact button</h2>
      </div>
    </section>
  );
};

export const Services = () => {
  return (
    <section className="Services">
      {/* Services content */}
      <h2>Services</h2>
    </section>
  );
};

export const About = () => {
  return (
    <section>
      {/* About content */}
      <h2>About</h2>
    </section>
  );
};

export const Contact = () => {
  return (
    <section>
      {/* Contact content */}
      <h2>Contact</h2>
    </section>
  );
};

export const Footer = () => {
  return (
    <footer>
      {/* Footer content */}
      <h3>Footer</h3>
      <li>About</li>
      <li>Contact</li>
      <li>Terms & Conditions</li>
      <p>FortyTwo Technology Ltd is Polynesian-owned and proud of it.</p>

      <p>Copyright © {new Date().getFullYear()} &middot;FortyTwo Technology Ltd.
      Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a></p>
    </footer>
  );
};