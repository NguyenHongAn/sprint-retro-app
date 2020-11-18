import React, {useState, useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle,faClock,faCopy,faClone,faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import {useHistory} from 'react-router-dom';  
import {Button} from 'reactstrap';

import './dashboard.css';
import './boardList.css';
import CreateBoardModal from './CreateBoardModal';
import axiosRequest from '../../api/axiosRequest';
import ShareLinkModal from './ShareLinkModal';
export default function BoardList() {

    const [boardList, setBoardList] = useState([]);
    const [isOpenAdd, setisOpenAdd] = useState(false);
    const [isOpenShare, setisOpenShare] = useState(false);
    const [sprint, setSprint] = useState("");
    const history = useHistory();
    const [shareLink, setShareLink] = useState("");

    const handleOpenAddModal = () => setisOpenAdd(!isOpenAdd);

    const handleOpenShareModal = () => setisOpenShare(!isOpenShare);
    useEffect(()=>{
        async function fetchData(){
          try
          {
            const response = await axiosRequest("GET", "/dashboard");
            let data = response.data;
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
            if (error.response.status >= 400 && error.response.status < 500)
            {
                history.push("/auth/signin");
                localStorage.removeItem("jwt-token");
            }
            else{
                alert(error);
            }
            
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
    const deleteBoard = async (deletedboard) =>{
        try {
            const result = await axiosRequest("DELETE", "/dashboard", deletedboard);
            console.log({deletedboard});
            if(result.status === 200)
            {
                console.log(result);
                const newBoardList = boardList.filter(board => board._id !== deletedboard._id);
                setBoardList(newBoardList);
            }
        } catch (error) {
            if (error.response.status >= 400 && error.response.status < 500)
            {
                history.push("/auth/signin");
                localStorage.removeItem("jwt-token");
            }
            else{
                alert(error);
            }
            
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
                boardList.push(board);
                const newBoardList = Array.from(boardList);
                setBoardList(newBoardList);
            }

        } catch (error) {
            if (error.response.status >= 400 && error.response.status < 500)
            {
                history.push("/auth/signin");
                localStorage.removeItem("jwt-token");
            }
            else
            {
                alert(error);
            }
            
        }
    }

    //SHARE board link ===========================================================
    const shareBoardLink = (board) =>{
        const webLink = process.env.REACT_APP_ENV === 'develop'? process.env.REACT_APP_CLIENT :process.env.REACT_APP_PRODUCT;
        setShareLink(`${webLink}/#/dashboard/${board._id}`);
        handleOpenShareModal();
    }

    return (
        <div>
        {(<div>
            <CreateBoardModal modal={isOpenAdd} toggle={handleOpenAddModal}
             addNewBoard={addNewBoard}></CreateBoardModal>
             <ShareLinkModal modal={isOpenShare} toggle={handleOpenShareModal}
             link={shareLink}></ShareLinkModal>
            <ul>
            <li className="dashboard-item add-item" onClick={handleOpenAddModal}>
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
                                    <Button className="text-decoration-none" color="link"
                                     onClick={() => shareBoardLink(board)}>
                                        <FontAwesomeIcon icon={faCopy}></FontAwesomeIcon>
                                         URL 
                                    </Button>                                    
                                    <Button color="link" className="text-decoration-none" onClick={() =>{deleteBoard(board)}}>
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
