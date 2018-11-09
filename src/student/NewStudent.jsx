import React from 'react';
import PropTypes from 'prop-types';
import { Subscribe } from 'unstated';

import Form from './Form';
import Header from '../common/Header';
import StudentContainer from '../containers/StudentContainer';

  const NewStudent = (props) => (
      <div>
        <Header />
        <div className="mdc-layout-grid container">
          <Subscribe to={[StudentContainer]}>{({addStudent}) =>
            <Form formAction={addStudent} proceedToRegister={() => props.history.push('/register')} submitText={"Add Student"} />}
          </Subscribe>
        </div>
      </div>
    );

NewStudent.propTypes = {
  history: PropTypes.obj
};

NewStudent.defaultProps = {
  history: PropTypes.obj
};

export default NewStudent;