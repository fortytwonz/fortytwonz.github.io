import * as React from "react"
import { Link } from "gatsby"
import Layout from '../components/layout';
import * as Content from '../components/content';
import { Seo } from '../components/functions'



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

  /*export const Head = () => <Seo title="FortyTwo Technology" />*/
  export default LandingPage