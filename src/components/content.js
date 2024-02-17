// content.js
import React from "react";
import { Navigation, Logo, ContactForm } from "../components/functions";

export const Header = () => {
  return (
    <header className="header-content">
      <div className="header-logo"><Logo /></div>
      <Navigation />
    </header>
  );
};

export const Hero = () => {
  return (
    <section className="Hero">
      <div className="section-content">
        <div className="hero-content">
          <h1>Welcome To FortyTwo Technology</h1>
          <p>
            Empowering our community with accessible, reliable, and value-driven
            technology services.
          </p>
          <div className="hero-text">
            <h1 className="body-font-light">Need tech help?</h1>
            <a href="#contact" className="contact-button">Contact Us</a>
          </div>
        </div>
      </div>
    </section>
  );
};



export const Services = () => {
  return (
    <section className="Services">
      <div className="services-content">
        <div className="services-flex">
          <Logo />
          <h2>Printing</h2>
          <p>Affordable, quality printing services. Custom print and design on request.</p>
        </div>
        <div className="section-flex">
          <Logo />
          <h2>Repairs</h2>
          <p>We fix mobile, tablet, console, tablet, and computer issues.</p>
        </div>
        <div className="section-flex">
          <Logo />
          <h2>Entertainment</h2>
          <p>Enjoy Xbox, pool tables, and online gaming at our place.</p>
        </div>
        <div className="section-flex">
          <Logo />
          <h2>Business</h2>
          <p>Reliable tech support for non-profit and small businesses.</p>
        </div>
        <div className="section-flex">
          <Logo />
          <h2>Software</h2>
          <p>Helping bring your app and website ideas to life.</p>
        </div>
        <div className="section-flex">
          <Logo />
          <h2>Support</h2>
          <p>In-store tech advice and assistance.</p>
        </div>
      </div>
    </section>
  );
};

export const About = () => {
  return (
    <section className="About">
      <div className="section-dark">
        <div className="section-content">
        <h2>About</h2>
          <p>FortyTwo Technology Ltd is Polynesian-owned and proud of it. We're not just about technology – we're here to help everyone in our community with easy and smart solutions. We care about you and want to make a real difference in Otara. Join us as we make technology work for all of us!</p>
        </div>
      </div>
    </section>
  );
};

export const Contact = () => {
  return (
    <section className="Contact">
      <div className="section-content">
        <h2>Contact</h2>
        <div className="section-form"><ContactForm /></div>
      </div>
    </section>
  );
};

export const Footer = () => {
  return (
    <footer className="footer">
      <section className="footer-content">
        <h3>Footer</h3>
        <Navigation />
        <p>FortyTwo Technology Ltd is Polynesian-owned and proud of it.</p>
        <p>
          Copyright © {new Date().getFullYear()} &middot;FortyTwo Technology Ltd.
          Built with{` `}<a href="https://www.gatsbyjs.com">Gatsby</a>
        </p>
      </section>
    </footer>
  );
};
