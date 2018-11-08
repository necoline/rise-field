import React from 'react';
import { Link } from "react-router-dom";
import Header from './common/Header';

const Landing = () => (
  <div>
    <Header title="RISE"/>
    <div className="mdc-layout-grid container">
      <div className="mdc-layout-grid__inner menu-container">
        <div className="mdc-layout-grid__cell menu-row row grid-center">
          <Link to="/">
            <button className="mdc-button mdc-button--raised large-button">Attendance</button>
          </Link>
        </div>
        <div className="mdc-layout-grid__cell menu-row row grid-center">
          <Link to="/subMenu">
            <button className="mdc-button mdc-button--raised large-button">Register</button>
          </Link>
        </div>
        <div className="mdc-layout-grid__cell menu-row row grid-center">
          <Link to="/">
            <button className="large-button mdc-button mdc-button--raised">Reports</button>
          </Link>
        </div>
      </div>
    </div>
  </div>
  );

export default Landing;