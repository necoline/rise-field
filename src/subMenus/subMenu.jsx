import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Subscribe } from 'unstated';
import PropTypes from 'prop-types';

import Header from '../common/Header';
import Students from '../register/Students';
import StandardContainer from '../containers/StandardContainer';

class SubMenu extends Component {
  
  standardName = (id, container) => {
    const { standardName } = container.selectors.getStandardData(id)
    return `${standardName}`
  }

  render() {
    return (
      <div>
        <Header title="Registers"/>
        <div className="mdc-layout-grid container">
          <div className="mdc-layout-grid__inner">
            <div className="mdc-layout-grid__cell row grid-center">
              <Link to="/register">
                <button className="mdc-button mdc-button--raised large-button">All Students</button>
              </Link>
            </div>
            <Subscribe to={[StandardContainer]}>{container =>
              <div>
                {container.selectors.getAllStandards().map(id => 
                  <div key={id} className="mdc-layout-grid__cell row grid-center">
                    <Link to={`/register/${id}`}>
                      <button className="mdc-button mdc-button--raised large-button">
                        {this.standardName(id, container)}
                      </button>
                    </Link>
                  </div>
                )}
              </div>}
            </Subscribe> 
          </div>
        </div>
      </div>
    )
  }
};

export default SubMenu;