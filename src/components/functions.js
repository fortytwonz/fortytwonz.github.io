import React from 'react';
import { graphql, Helmet } from 'gatsby';
import { StaticImage } from "gatsby-plugin-image";



const Functions = ({ data }) => {
  const { site } = data.site.siteMetadata;
  const pageTitle = "Your Landing Page Title";
  const pageDescription = "Description of your landing page.";

  return (
    <div>
      <Helmet>
        <title>Fortytwo Technology Ltd</title>
        <meta name="Fortytwo Technology" content={pageDescription} />
        {/* Add more meta tags as needed */}
      </Helmet>
      <h1>Welcome to Your Landing Page</h1>
      {/* Your landing page content goes here */}
    </div>
  );
};

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

export function Logo() {
    return <StaticImage src="../images/logo-6.svg"/>
  };

export default Functions;