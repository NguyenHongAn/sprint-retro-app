import React, {useState, useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle,faClock,faCopy,faClone,faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import {useHistory} from 'react-router-dom';  
import {Button} from 'reactstrap';

import './dashboard.css';
import './boardList.css';
import CreateCardModal from './CreateCardModal';
import axiosRequest from '../../api/axiosRequest';

export default function BoardList() {

    const [boardList, setBoardList] = useState([]);
    const [isOpen, setisOpen] = useState(false);
    const [sprint, setSprint] = useState("");
    const history = useHistory();

    const toggle = () => setisOpen(!isOpen);

    useEffect(()=>{
        async function fetchData(){
          try
          {
            let response = await axiosRequest("GET", "/dashboard");
            let data= response.data;
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
          }
          catch(error) {
            history.push('/error');
        }
        }
        fetchData();
        },[history]);


    // open Dialog ==============================================
    const openColumnPage = (sprintid) => 
    {
        setSprint(sprintid);
        console.log(sprint);
        history.push(`/dashboard/${sprintid}`);
    }

    // DELETE board ====================================================
    const deleteBoard = async (boardId) =>{
        try {
            const result = await axiosRequest("DELETE", "/dashboard", boardId);

            if(result.status === 200)
            {
                console.log(result);
                const newBoardList = boardList.filter(board => board._id !== boardId);
                setBoardList(newBoardList);
            }
        } catch (error) {
            history.push("/error");
        }
    }

    // handle add new board ============================================
    const addNewBoard = async (board) =>{
        try {
            const response = await axiosRequest("POST",'/dashboard', board);
            
            if (response.status === 200)
            {
                let d = new Date(response.data.createTime);  
                board = response.data; 
                let formatted_date =  d.getDate() + '/' + (d.getMonth() + 1) +'/'+ d.getFullYear();
                    
                board.createTime = formatted_date; 
                board.columns.length = 0;
                boardList.push(board);
                const newBoardList = Array.from(boardList);
                setBoardList(newBoardList);
            }

        } catch (error) {
            alert(error);
        }
    }

    return (
        <div>
        {(<div>
            <CreateCardModal modal={isOpen} toggle={toggle} addNewBoard={addNewBoard}></CreateCardModal>
            <ul>
            <li className="dashboard-item add-item" onClick={toggle}>
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
                                <div onClick={() => openColumnPage(board._id)}>
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
           
        </div>)
        }
        </div>
    )
}
