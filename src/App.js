import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import './domain/Dashboard/dashboard.css';

import HomePage from './domain/Home/HomePage';
import UserPage from './domain/User/UserPage';
import ProfilePage from './domain/Profile/ProfilePage';
import Dashboard from './domain/Dashboard/Dashboard';
function App() {
  const [boardList, setBoardList] = useState([]);

  useEffect(()=>{
    async function fetchData(){
      const response = await fetch("http://localhost:8000");
      const boardList=  await response.json();
      console.log(boardList);
      setBoardList(boardList.boards);
    }
    fetchData();
  },[]);

  return (
   
    <Router>
      <Route exact path="/">
        <HomePage></HomePage>
      </Route>

      <Route path="/user/signin">
        <UserPage option="signin"></UserPage>
      </Route>
      <Route path="/user/signup">
        <UserPage option="signup"></UserPage>
      </Route>
      <Route path="/profile">
        <ProfilePage></ProfilePage>
      </Route>
      <Route path="/dashboard">
          <Dashboard boardList={boardList}></Dashboard>
      </Route>
    </Router>
  );
}

export default App;
