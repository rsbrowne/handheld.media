/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

import Header from '../header';
import HeaderBurger from '../header-burger';
import Footer from '../footer';
import './styles.scss';

const Layout = ({ children, location }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const path = location.pathname;

  return (
    <Fragment>
      {path === '/' && <Header siteTitle={data.site.siteMetadata.title} />}
      {path === '/homepage-2' && <HeaderBurger siteTitle={data.site.siteMetadata.title} />}
      <div>
        <main>{children}</main>
        <Footer />
      </div>
    </Fragment>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
