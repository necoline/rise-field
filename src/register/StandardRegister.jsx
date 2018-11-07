import React from 'react';
import { Link } from "react-router-dom";
import { Subscribe } from 'unstated';

import StandardContainer from '../containers/StandardContainer'
import Students from './Students';
import Header from '../common/Header';


const StandardRegister = () => (
  <div>
    <Header title="Register"/>
    <Subscribe to={[StandardContainer]}>{container =>
    <div className="mdc-layout-grid container">
      <div className="mdc-layout-grid__inner">
          <div className="mdc-layout-grid__cell page-header">
            <span className='page-title'> {container.selectors.getSelectedStandard().standardName} </span>
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

export default StandardRegister;