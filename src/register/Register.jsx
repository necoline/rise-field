import React from 'react';
import { Link } from "react-router-dom";
import { Subscribe } from 'unstated';
import PropTypes from 'prop-types';


import StandardContainer from '../containers/StandardContainer'
import Students from './Students';
import Header from '../common/Header';


const Register = () => (
  <div>
    <Header title="Register"/>
    <Subscribe to={[StandardContainer]}>{container =>
    <div className="mdc-layout-grid container">
      <div className="mdc-layout-grid__inner">
          <div className="mdc-layout-grid__cell page-header">
            <span className='page-title'> Fuji School Register </span>
            <Link to="/student-form">
              <button className="mdc-fab fab-right" aria-label="add">
                <span className="mdc-fab__icon material-icons">add</span>
              </button>
            </Link>
          </div>
        <div className="mdc-layout-grid__cell row">
          <Students />
        </div>
      </div>
    </div>}
    </Subscribe>
  </div>
);

export default Register;