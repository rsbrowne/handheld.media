import { Link } from 'gatsby';
import { useState } from 'react';
import PropTypes from 'prop-types';
import React from 'react';

import './styles.scss';

const HeaderBurger = ({ siteTitle }) => {
  const [menuOpen, setMenuOpen] = useState();
  let classList = 'burger';

  if (menuOpen) {
    classList = 'burger burger--open';
  } else {
    classList = 'burger';
  }

  return (
    <header className="header-burger">
      <Link className="logo" to="/">
        HHM
      </Link>
      <div className={classList} onClick={() => setMenuOpen(!menuOpen)}>
        <div className="burger__lines" />
      </div>
      {/* <nav className="header__nav">
        <ul>
          <li>
            <Link to="homepage-2">Homepage 2</Link>
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
      </nav> */}
    </header>
  );
};

HeaderBurger.propTypes = {
  siteTitle: PropTypes.string,
};

HeaderBurger.defaultProps = {
  siteTitle: ``,
};

export default HeaderBurger;
