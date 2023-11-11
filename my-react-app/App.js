// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import CreateEmployeeComponent from './components/CreateEmployeeComponent';
import ViewEmployeeComponent from './components/ViewEmployeeComponent';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/list">List Employees</Link>
            </li>
            <li>
              <Link to="/create">Create Employee</Link>
            </li>
            <li>
              <Link to="/view">View Employee</Link>
            </li>
          </ul>
        </nav>

        <hr />

        <Route path="/list" component={ListEmployeeComponent} />
        <Route path="/create" component={CreateEmployeeComponent} />
        <Route path="/view" component={ViewEmployeeComponent} />
      </div>
    </Router>
  );
}

export default App;
