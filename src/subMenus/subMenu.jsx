import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Subscribe } from 'unstated';
import { Button } from '@rmwc/button'
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
            <div className="mdc-layout-grid__cell menu-row row grid-center">
              <Link to="/main-register">
                <Button raised>All Students</Button>
              </Link>
            </div>
            <Subscribe to={[StandardContainer]}>{container =>
              <div>
                {container.selectors.getAllStandards().map(id => 
                  <div key={id} className="mdc-layout-grid__cell menu-row row grid-center">
                    <Link to={`/register/${id}`}>
                      <Button raised>
                        {this.standardName(id, container)}
                      </Button>
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