import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import './styles.scss';

const Header = ({ siteTitle }) => (
  <header className="header">
    <Link className="logo" to="/">
      HHM
    </Link>
    <nav className="header__nav">
      <ul>
        <li>
          <Link to="/">Link 1</Link>
        </li>
        <li>
          <Link to="/">Link 2</Link>
        </li>
        <li>
          <Link to="/">Link 3</Link>
        </li>
        <li>
          <Link to="/">Link 4</Link>
        </li>
      </ul>
    </nav>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
