import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Provider } from 'unstated';

import Landing from './Landing';
import Register from './register/Register';
import NewStudent from './student/NewStudent';
import Student from './student/Student';
import UpdateStudent from './student/UpdateStudent';
import SubMenu from './subMenus/subMenu';

import StudentContainer from './containers/StudentContainer'
import StandardContainer from './containers/StandardContainer'

const studentContainer = new StudentContainer
const standardContainer = new StandardContainer


class App extends Component {
  state = {
    students: []
  }

  componentDidMount() {
    studentContainer.fetchAllStudents()
    standardContainer.fetchAllStandards()
  }

  render() {
    return (
      <div className="app">
        <Provider inject={[studentContainer, standardContainer]}>
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route
              exact
              path="/subMenu"
              component={SubMenu} />
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