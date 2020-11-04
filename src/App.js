import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import './domain/Dashboard/dashboard.css';

import HomePage from './domain/Home/HomePage';
import UserPage from './domain/Auth/UserPage';
import ProfilePage from './domain/Profile/ProfilePage';
import DashboardPage from './domain/Dashboard/DashboardPage';
import ColumnsModal from './domain/Dashboard/ColumnsPage';
function App() {
  

  return (
   
    <Router>
      <Route exact path="/">
        <HomePage></HomePage>
      </Route>

      <Route path="/auth/signin">
        <UserPage option="signin"></UserPage>
      </Route>
      <Route path="/auth/signup">
        <UserPage option="signup"></UserPage>
      </Route>
      <Route path="/profile">
        <ProfilePage></ProfilePage>
      </Route>
        <Switch>
          <Route path="/dashboard/:sprintid">
                    <ColumnsModal></ColumnsModal>
          </Route>
            <Route path="/dashboard">
              <DashboardPage/>
            </Route>
        </Switch>
     
    </Router>
  );
}

export default App;
