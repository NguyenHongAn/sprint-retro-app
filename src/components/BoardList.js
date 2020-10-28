import React from 'react'
import './dashboard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle,faClock,faCopy,faClone } from '@fortawesome/free-solid-svg-icons';

export default function BoardList({boardList}) {

    //const 

    return (
        <ul>
            <li className="dashboard-item add-item">
                <span className="add">
                <FontAwesomeIcon icon={faPlusCircle} size="4x"/>
                <small>Add board</small>
                </span>
            </li>
            {
                boardList.map(board =>{
                    return (
                        <li className='dashboard-item'>
                            <div className="dashboard-item-body">
                                <p>{board.title}</p>
                                <span className="board-date">
                                    <FontAwesomeIcon icon={faClock}></FontAwesomeIcon>
                                    {board.createTime}
                                </span>
                                <ul></ul>
                                <div className="board-actions">
                                    <a href="#">
                                        <FontAwesomeIcon icon={faCopy}></FontAwesomeIcon>
                                         URL 
                                    </a>
                                    <a href="#">
                                        <FontAwesomeIcon icon={faClone}></FontAwesomeIcon>
                                        Clone
                                    </a>
                                </div>
                            </div>
                        </li>
                    );
                })
            }
        </ul>
    )
}
