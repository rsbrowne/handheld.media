import { Link } from 'gatsby';
import { useState, Fragment } from 'react';
import PropTypes from 'prop-types';
import React from 'react';

import './styles.scss';

const HeaderBurger = ({ siteTitle }) => {
  const [menuOpen, setMenuOpen] = useState();
  let classList = 'burger';
  let menuClassList = 'burger-nav';

  if (menuOpen) {
    classList = 'burger burger--open';
    menuClassList = 'burger-nav burger-nav--open';
  } else {
    classList = 'burger';
    menuClassList = 'burger-nav';
  }

  return (
    <Fragment>
      <nav className={menuClassList}>
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
      </nav>
      <header className="header-burger">
        <Link className="logo" to="/">
          HHM
        </Link>
        <div className={classList} onClick={() => setMenuOpen(!menuOpen)}>
          <div className="burger__lines" />
        </div>
      </header>
    </Fragment>
  );
};

HeaderBurger.propTypes = {
  siteTitle: PropTypes.string,
};

HeaderBurger.defaultProps = {
  siteTitle: ``,
};

export default HeaderBurger;
