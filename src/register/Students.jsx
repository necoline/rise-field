import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Subscribe } from 'unstated';

import StudentContainer from '../containers/StudentContainer'

class Students extends Component {

    studentName = (id, container) => {
        const { firstName, lastName } = container.selectors.getStudentData(id)
        return `${lastName}, ${firstName}`
    }

    studentNumber = (id, container) => {
        const { individualNumber } = container.selectors.getStudentData(id)
        return `${individualNumber}`
    }

  render() {
    return (
        <ul className="mdc-list">
        <Subscribe to={[StudentContainer]}>{container =>
        <div>
            <div className="list-header">
                    <li className="mdc-layout-grid__inner mdc-list-item">
                        <span className="list-text-left">Name</span>
                        <span className="list-text-right">Number</span>
                    </li>
                <li role="separator" className="mdc-list-divider"/> 
            </div>
            {container.selectors.getStudentsInStandard(this.props.standardName).map(id => 
            <div key={id}>
                <Link to={`/student/${id}`}>
                    <li className="mdc-layout-grid__inner mdc-list-item">
                        <span className="list-text-left">{this.studentName(id, container)}</span>
                        <span className="list-text-right">{this.studentNumber(id, container)}</span>
                    </li>
                </Link>
                <li role="separator" className="mdc-list-divider"/> 
            </div>)}
            </div>}
        </Subscribe>     
        </ul>
        )
    }
};

export default Students;
