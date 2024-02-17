// index.js
import * as React from "react"
import Layout from '../components/layout';
import * as Content from '../components/content';

const LandingPage = () => {
    return (
      <Layout>
        <Content.Header />
        <Content.Hero />
        <Content.Services />
        <Content.About />
        <Content.Contact />
        <Content.Footer />
      </Layout>
    );
};

export default LandingPage;
