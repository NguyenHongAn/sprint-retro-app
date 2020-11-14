import React from 'react'
import BoardList from './BoardList';

export default function Dashboard() {
    return (      
          <div className="dashboard">
          
            <h1>My Boards</h1>
            <hr></hr>
            <BoardList></BoardList>
          </div>
    )
}
