// content.js
import React from "react";
import { ContactButton, ContactForm, HeroBG, Logo, LogoServices, Navigation } from "../components/functions";

export const Header = () => {
  return (
    <header className="header-layout">
      <div className="header-logo"><Logo /></div>
      <Navigation />
    </header>
  );
};

export const Hero = () => {
  return (
    <section className="Hero">
      <div className="hero">
          <div className="hero-left">
            <h1>Welcome To FortyTwo Technology</h1>
              <p>
                Empowering our community with accessible, reliable, and value-driven
                technology services.
              </p>
              <br />
              <a href="#services">See Our Services</a>
              <br />
          </div>
          <div className="hero-right">
          <div className="hero-bg-image">
            <HeroBG src="../images/hero-bg.jpg" />
            </div>
            <div className="hero-text">  
              <h1 className="body-font-light">Need tech help?
              </h1>
              <br/>
              <ContactButton />

            </div>                
          </div>
      </div>
    </section>
  );
};

export const Services = () => {
  return (
    <section className="Services">
      <div className="section-layout">
      <h1>Services</h1>
      < br/>
      <div className="section-inline">
        <div className="section-flex">
          <div className="logo-image"><LogoServices src="../images/logos/logo-1.svg"/></div>
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
      </div>
    </section>
  );
};

export const About = () => {
  return (
    <section className="About">
      <div className="section-dark">
        <div className="section-layout">
        <h2>About</h2>
        < br/>
          <p>FortyTwo Technology Ltd is Polynesian-owned and proud of it. We're not just about technology – we're here to help everyone in our community with easy and smart solutions. We care about you and want to make a real difference in Otara. Join us as we make technology work for all of us!</p>
        </div>
        <br/>
      </div>
    </section>
  );
};

export const Contact = () => {
  return (
    <section className="Contact">
      <div className="section-layout">
        <h2>Contact</h2>
        <div className="section-form"><ContactForm /></div>
      </div>
    </section>
  );
};

export const Footer = () => {
  return (
    <footer className="footer">
      <section className="footer-layout">
        <div className="footer-left"><h3>Footer</h3>
        <Navigation /></div>
        <div className="footer-right">
        <p>FortyTwo Technology Ltd is Polynesian-owned and proud of it.</p>
        </div>
        <p>
          Copyright © {new Date().getFullYear()} &middot;FortyTwo Technology Ltd.
          Built with{` `}<a href="https://www.gatsbyjs.com">Gatsby</a>
        </p>
      </section>
    </footer>
  );
};
