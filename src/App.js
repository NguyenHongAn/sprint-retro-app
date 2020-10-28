import React, {useState, useEffect} from 'react';
import './App.css';
import AppNavBar from './components/AppNavBar';
import BoardList from './components/BoardList';


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
    <div>
    <AppNavBar></AppNavBar>
    <div className="dashboard">
      <h1>My Boards</h1>
      <hr></hr>
      <BoardList boardList={boardList}></BoardList>
    </div>
    </div>
  );
}

export default App;
