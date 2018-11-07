import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Subscribe } from 'unstated';

import Header from '../common/Header';
import StandardContainer from '../containers/StandardContainer';

class SubMenu extends Component {
  
  standardName = (id, container) => {
    const stnd = container.selectors.getStandardData(id)
    console.log('stnd', stnd.standardName)
    const standardName = stnd.standardName
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
                <ul>
                  {container.selectors.getAllStandards().map(id => 
                  <div className="mdc-layout-grid__cell row grid-center">
                    <Link to="/register">
                      <button className="mdc-button mdc-button--raised large-button">
                        {this.standardName(id, container)}
                      </button>
                    </Link>
                  </div>)}
                </ul>
            }
            </Subscribe> 
          </div>
        </div>
      </div>
    )
  }
};

export default SubMenu;