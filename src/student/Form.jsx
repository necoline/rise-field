import React, { Component } from 'react';
import { Button } from '@rmwc/button'
import PropTypes from 'prop-types';

import InputField from '../common/InputField';


class Form extends Component {
  state = {
    firstName: '',
    lastName: '',
    preferredName: '',
    guardianFirstName: '',
    guardianLastName: '',
    individualNumber: '',
    dob: 0,
    gender: '',
    class: '',
    teacher: '',
  };

  setSubmission = formAction => (event) => {
    event.preventDefault()
    formAction(this.state)
    this.props.proceedToRegister()
  }

  handleChange = ({target}) =>  {
    this.setState({[target.id]: target.value})
  }

  render() {
    return (
          <form className="mdc-layout-grid__inner" onSubmit={this.setSubmission(this.props.formAction)}>
            <div className="mdc-layout-grid__cell form">
              <InputField 
                onChange={this.handleChange} 
                value={this.state.firstName}
                id={'firstName'}
                label="First Name"/>
              <InputField 
                onChange={this.handleChange}
                value={this.state.middleName}
                id={'middleName'} 
                label="Middle Name"/>
              <InputField 
                onChange={this.handleChange}
                value={this.state.lastName} 
                id={'lastName'}
                label="Last Name"/>
              <InputField 
                onChange={this.handleChange}
                value={this.state.preferredName} 
                id={'preferredName'}
                label="Preferred Name"/>
              <InputField 
                onChange={this.handleChange}
                value={this.state.guardianFirstName}
                id={'guardianFirstName'}
                label="Guardian's First Name"/>
              <InputField 
                onChange={this.handleChange}
                value={this.state.guardianLastName}
                id={'guardianLastName'} 
                label="Guardian's Last Name"/>
              {/* <InputField 
                handleChange={this.handleDobChange} 
                value={this.state.dob}
                id={'dob'} 
                label="Date of Birth"/>
              <DropDownField 
                handleChange={this.handleGenderChange} 
                value={this.state.gender}
                id{'gender'} 
                label="Gender"/>
              <DropDownField 
                handleChange={this.handleGradeChange} 
                value={this.state.grade} 
                id={'grade'}
                label="Grade"/> */}
            </div> 

            <div className="mdc-layout-grid__cell grid-center">
              <Button raised> {this.props.submitText}</Button>
            </div>
          </form>
    );
  }
}

Form.propTypes = {
  submitText: PropTypes.string.isRequired,
  formAction: PropTypes.func.isRequired,
  proceedToRegister: PropTypes.func

};

Form.defaultProps = {
  proceedToRegister: PropTypes.func
};

export default Form;