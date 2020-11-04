import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle,faClock,faCopy,faClone,faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import {Link, Redirect} from 'react-router-dom';  
import {Button} from 'reactstrap';

import './dashboard.css';
import './boardList.css';
import CreateCardModal from './CreateCardModal';
import axiosRequest from '../../api/axiosRequest';

export default function BoardList({boardList, setBoardList}) {

    const [cardModal, setCardModal] = useState(false);
    const [sprint, setSprint] = useState("");
    const [redirect, setRedirect] = useState(false);
    const toggle = () => setCardModal(!cardModal);

    // open Dialog ==============================================
    const openColumnModal = (sprintid) => 
    {
        setRedirect(!redirect);
        setSprint(sprintid);
        console.log(sprint);
    }

    // DELETE board ====================================================
    const deleteBoard = async (boardId) =>{
        let result = await axiosRequest("DELETE", "/dashboard", boardId);

        if(result.status === 200)
        {
            console.log(result);
            const newBoardList = boardList.filter(board => board._id !== boardId);
            setBoardList(newBoardList);
        }
        else{
            setRedirect(true);
        }
    }

    // handle add new board ============================================
    const addNewBoard = (board) =>{
        let d = new Date(board.createTime);   
        let formatted_date =  d.getDate() + '/' + (d.getMonth() + 1) +'/'+ d.getFullYear();
              
        board.createTime = formatted_date; 
        boardList.push(board);
        const newBoardList = Array.from(boardList);
        setBoardList(newBoardList);
    }
    return (
        <div>
        {redirect?
        <Redirect to={`/dashboard/${sprint}`}></Redirect>
        :(<div>
            <ul>
            <li className="dashboard-item add-item" onClick={()=>{toggle()}}>
                <span className="add">
                <FontAwesomeIcon icon={faPlusCircle} size="4x"/>
                <small>Add board</small>
                </span>
            </li>
            {
                boardList.map(board =>{
                    return (
                        <li className='dashboard-item' key={board._id}>
                            <div className="dashboard-item-body">
                                <div onClick={() => openColumnModal(board._id)}>
                                <p>{board.title}</p>
                                <div className="date-and-number">
                                    <span className="board-date">
                                        <FontAwesomeIcon icon={faClock}></FontAwesomeIcon>
                                        {board.createTime.toLocaleString()}
                                    </span>
                                    <span className="board-date">{board.columns.length} cards</span>
                                </div>
                                </div>
                                <div className="board-actions">
                                    <Button className="text-decoration-none" color="link">
                                        <FontAwesomeIcon icon={faCopy}></FontAwesomeIcon>
                                         URL 
                                    </Button>
                                    <Button className="text-decoration-none" color="link">
                                        <FontAwesomeIcon icon={faClone}></FontAwesomeIcon>
                                        Clone
                                    </Button>
                                    <Button color="link" className="text-decoration-none" onClick={() =>{deleteBoard(board._id)}}>
                                        <FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon>
                                        Delete
                                    </Button>
                                </div>
                            </div>
                        </li>
                    );
                })
            }
        </ul>
            <CreateCardModal modal={cardModal} toggle={toggle} add={addNewBoard} ></CreateCardModal>
        </div>)
        }
        </div>
    )
}
