import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';

import Layout from '../components/layout';

const IndexPage = () => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "umbrella.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 2560) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => {
      const imgData = data.desktop.childImageSharp.fluid;
      return (
        <Layout>
          <BackgroundImage Tag="section" fluid={imgData} backgroundColor={`#040e18`}>
            <h1>Test</h1>
          </BackgroundImage>
        </Layout>
      );
    }}
  />
);

export default IndexPage;
