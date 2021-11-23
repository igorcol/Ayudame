import React from 'react';

import './styles.css';
import { LINKS } from './links'

function Header() {
  return (
    <div className="header-container">

        <div className="header-left">
            <div className="header-logo">
              <img src="images/icon.png" className="header-logo-image" />
            </div>
        </div>

        <div className="header-right">
            <ul className="header-links-list">
              {
                LINKS.map(item => (
                  <li className="header-link">
                    <span className="link-name">{item.title}</span>
                  </li>
                ))
              }
            </ul>
            <div className="header-user"></div>
        </div>

    </div>
  );
};

export default Header;
