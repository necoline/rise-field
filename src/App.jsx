import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Provider } from 'unstated';

import Landing from './Landing';
import Register from './register/Register';
import NewStudent from './student/NewStudent';
import Student from './student/Student';
import UpdateStudent from './student/UpdateStudent';

import StudentContainer from './containers/StudentContainer'

const studentContainer = new StudentContainer


class App extends Component {
  state = {
    students: []
  }

  componentDidMount() {
    studentContainer.fetchAllStudents()
  }

  render() {
    return (
      <div className="app">
        <Provider inject={[studentContainer]}>
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route
              exact
              path="/register"
              component={Register} />
            <Route
              exact
              path="/student/:id"
              component={Student} />
            <Route
              exact
              path="/student/:id/edit"
              component={UpdateStudent} />
            <Route
              path="/student-form"
              component={NewStudent} /> 
          </Switch>
        </Provider> 
      </div>
    )
  }
}

export default App;