import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';

import Layout from '../components/layout';

const Homepage2 = ({ location }) => (
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
        <Layout location={location}>
          <div className="homepage">
            <BackgroundImage
              className="homepage__bg"
              Tag="section"
              fluid={imgData}
              backgroundColor={`#040e18`}>
              <div className="homepage__overlay" />
              <h1 className="homepage__intro">
                BIG INTRO
                <br />
                TEXT
              </h1>
            </BackgroundImage>
          </div>
        </Layout>
      );
    }}
  />
);

export default Homepage2;
