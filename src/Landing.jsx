import React from 'react';
import { Link } from "react-router-dom";
import { Button } from '@rmwc/button'

import Header from './common/Header';

const Landing = () => (
  <div>
    <Header />
    <div className="mdc-layout-grid container">
      <div className="mdc-layout-grid__inner menu-container">
        <div className="mdc-layout-grid__cell menu-row row grid-center">
          <Link to="/">
            <Button raised className="menu-btn">Attendance</Button>
          </Link>
        </div>
        <div className="mdc-layout-grid__cell menu-row row grid-center">
          <Link to="/subMenu">
            <Button raised className="menu-btn">Register</Button>
          </Link>
        </div>
        <div className="mdc-layout-grid__cell menu-row row grid-center">
          <Link to="/">
            <Button raised className="menu-btn">Reports</Button>
          </Link>
        </div>
      </div>
    </div>
  </div>
  );

export default Landing;