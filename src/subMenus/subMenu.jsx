import React from 'react';
import { Link } from "react-router-dom";
import Header from '../common/Header';

const SubMenu = () => (
  <div>
    <Header title="Registers"/>
    <div className="mdc-layout-grid container">
      <div className="mdc-layout-grid__inner">
        <div className="mdc-layout-grid__cell row grid-center">
          <Link to="/register">
            <button className="mdc-button mdc-button--raised large-button">All Students</button>
          </Link>
        </div>
        <div className="mdc-layout-grid__cell row grid-center">
          <Link to="/register">
            <button className="mdc-button mdc-button--raised large-button">Class 1</button>
          </Link>
        </div>
        <div className="mdc-layout-grid__cell row grid-center">
          <Link to="/register">
            <button className="large-button mdc-button mdc-button--raised">Class 2</button>
          </Link>
        </div>
      </div>
    </div>
  </div>
  );

export default SubMenu;