import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Subscribe } from 'unstated';

import StandardContainer from '../containers/StandardContainer'
import Students from './Students';
import Header from '../common/Header';


class StandardRegister extends Component {

    getStandardName = (container) => container.selectors.getStandardData(this.props.match.params.id).standardName

render() {
    return (
        <div>
            <Header title=""/>
            <Subscribe to={[StandardContainer]}>{container =>
            <div className="mdc-layout-grid container">
            <div className="mdc-layout-grid__inner">
                <div className="mdc-layout-grid__cell page-header">
                    <span className='page-title'> {this.getStandardName(container)} </span>
                </div>
                <div className="mdc-layout-grid__cell page-header">
                    <Link to="/student-form">
                    <button className="mdc-button" aria-label="add">
                        <i className="material-icons mdc-button__icon">add</i>
                        Add Student
                    </button>
                    </Link>
                </div>
                <div className="mdc-layout-grid__cell row">
                <Students standardName={this.getStandardName(container)}/>
                </div>
            </div>
            </div>}
            </Subscribe>
        </div>
        )
    }
}

export default StandardRegister;