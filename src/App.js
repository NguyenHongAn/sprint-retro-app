import React from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';

import './domain/Dashboard/dashboard.css';

import HomePage from './domain/Home/HomePage';
import UserPage from './domain/Auth/UserPage';
import ProfilePage from './domain/Profile/ProfilePage';
import Dashboard from './domain/Dashboard/Dashboard';
import ColumnsPage from './domain/Column/ColumnsPage';
import AppNavBar from './components/AppNavBar';

function App() {
  return (
    
    <Router>
    <AppNavBar></AppNavBar>
      <Switch>
        <Route path="/sprint-retro-app">
          <Redirect to="/"></Redirect>
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
        
        <Route path="/dashboard/:sprintid">
          <ColumnsPage></ColumnsPage>
        </Route>
        <Route path="/dashboard">
          <Dashboard/>
        </Route>
        <Route exact path="/">
          <HomePage></HomePage>
        </Route>
      </Switch>   
    </Router>
  );
}

export default App;
