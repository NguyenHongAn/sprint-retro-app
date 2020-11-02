import React from 'react'
import AppNavBar from '../../components/AppNavBar';
import BoardList from './BoardList';

export default function Dashboard({ boardList }) {
    return (
        <div>
            <AppNavBar isTransparent={false}></AppNavBar>
            <div className="dashboard">
          
                <h1>My Boards</h1>
                <hr></hr>
                <BoardList boardList={boardList}></BoardList>
            </div>
        </div>
    )
}
