import React, { Component } from 'react';
import { Subscribe } from 'unstated';
import { Link } from "react-router-dom";
import { Button, ButtonIcon } from '@rmwc/button'
import PropTypes from 'prop-types';
import firebase from '../firebase';

import Header from '../common/Header';
import StudentContainer from '../containers/StudentContainer'
import TextField from '../common/TextField';

class Student extends Component {
  state = {
    student: null,
    redirect: false
   }

  componentDidMount() {
    const studentRef = firebase.database().ref(`/student/${this.props.match.params.id}`)
    studentRef.on('value', data => {
      this.setState({
        student: data.val(),
        id: this.props.match.params.id
       })
    })
  }

  setRemoveStudent = removeStudent => (event) => {
    event.preventDefault()
    removeStudent(this.state.id)
    this.props.history.push('/register')
  } 

  render() {
    const { student, id } = this.state

    return student && (
      <div>
        <Header />
        <div className="mdc-layout-grid container">
          <div className="mdc-layout-grid__inner">
            <div className="mdc-layout-grid__cell">
              <Button tag={Link} to={`/student/${id}/edit`} aria-label="edit">
                <ButtonIcon icon="edit" />
              </Button>
            </div>
            <div className="mdc-layout-grid__cell page-title">
            {`${student.firstName} ${student.lastName}`}
            </div>
            <div className="mdc-layout-grid__cell page-sub-title">
            {`Individual Number: ${student.individualNumber}`}
            </div>
             <div className="mdc-layout-grid__cell form">
              <TextField 
                value={student.preferredName}
                id='preferredName' 
                label="Preferred Name"/>
              <TextField 
                value={`${student.guardianFirstName} ${student.guardianLastName}`}
                id='guardianFirstName' 
                label="Guardian"/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

Student.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.object.isRequired
  }).isRequired
  // history: PropTypes.function
};
  
  // Student.defaultProps = {
  //   history: () => {}
  // };


export default Student;

