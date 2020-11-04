import React, {useState, useEffect} from 'react'
import BoardList from './BoardList';
import axiosRequest from '../../api/axiosRequest';
import {Redirect} from 'react-router-dom';

export default function Dashboard() {
    const [boardList, setBoardList] = useState([]);
    const [redirect, setredirect] = useState(false);

    useEffect(()=>{
      async function fetchData(){
        let response = await axiosRequest("GET", "/dashboard");
        let data= response.data;
        console.log(response);
        if (response.status=== 200)
        {
          data = data.boards.map(sprint =>{
              let d = new Date(sprint.createTime);   
              let formatted_date =  d.getDate() + '/' + (d.getMonth() + 1) +'/'+ d.getFullYear();
              
              sprint.createTime = formatted_date; 
              return sprint;
          });
          console.log(data);
          setBoardList(data);
        }
        else {
           setredirect(true);
        }
      }
      fetchData();
      },[]);

    return (
        redirect?
          <Redirect to="/error"></Redirect>
          :
          <div className="dashboard">
          
            <h1>My Boards</h1>
            <hr></hr>
            <BoardList boardList={boardList} setBoardList={setBoardList}></BoardList>
        </div>
    )
}
