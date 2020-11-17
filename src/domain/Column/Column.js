import React, {useState} from 'react';
import {useLocation} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus} from '@fortawesome/free-solid-svg-icons';
import {Button} from 'reactstrap';

import './column.css';
import AddMessageCard from './Cards/AddMessageCard';
import MessageCard from './Cards/MessageCard';
import EditMessageCard from './Cards/EditMessageCard';
export default function Column({column,
                                messages,
                                addNewMsg,
                                deleteMsg,
                                editMsg,
                            }) {

    const location = useLocation();
    const [tempMsg, settempMsg] = useState("");
    const [changedMsg, setChangedMsg] = useState("");
   
    const [msgIdEdited, setmsgIdEdited] = useState("");                     
    const [isOpenAddCard, setIsOpenAddCard] = useState(false);

     //Add new message =================================================================

     const handleChangeMsg  = (e) => settempMsg (e.target.value);
     const isOpenAddMsgCard = () => setIsOpenAddCard(!isOpenAddCard);
     
     const addNewMessage = async (e) =>{
         e.preventDefault();
 
         const newMsg = {
             columnType: column.type,
             comment: tempMsg,
             isActive: true,
             sprintID: location.pathname.split('/')[2],
             order: 1,
         }
         
         addNewMsg(newMsg);
         setIsOpenAddCard(!isOpenAddCard);
     }
 
     //Edit messgae ====================================================================
     const handleEditMsg = (e) => setChangedMsg(e.target.value);
 
     const editMessage = (e, message)=>{
         e.preventDefault();
         const changedMessage = {
             _id:  message._id,
             columnType: column.type,
             comment: changedMsg,
             isActive: message.isActive,
             sprintID: location.pathname.split('/')[2],
             order: 1,
         }
 
         editMsg(changedMessage);

        setmsgIdEdited(-1);
     }
 
    const openEditFormForMessage = (message) => {
        setChangedMsg(message.comment);
        setmsgIdEdited(message._id);
        console.log("ssssss");
     }
    
     const deleteMessage = (msgid) =>{
         deleteMsg(msgid, column.type);
     }


    return (
        <div className="message-list overflow-hidden">
        <div className="color-picker">
        <span className="color-picker-selected" style={column.style}></span>
        <span className="column-name">{column.name}</span>
        </div>
        <Button outline color="primary" block className="btn-add" onClick={isOpenAddMsgCard}>
            <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
        </Button>
        <ul>
            {isOpenAddCard?
            <li className="message" style={column.style}>
                <AddMessageCard addNewMessage={addNewMessage} handleChangeMsg={handleChangeMsg}></AddMessageCard>
            </li>
            :null
            }
            {
            messages.map(message =>{
                if (msgIdEdited === message._id)
                {                  
                    return <li className="message" style={column.style} key={message._id}>
                        <EditMessageCard 
                        message={message}
                        handleEditMsg={handleEditMsg} 
                        changedMsg={changedMsg}
                        editMessage={editMessage}
                        ></EditMessageCard>
                    </li>
                }
                else{
                    return (
                        <li className="message" style={column.style} key={message._id}>
                            <MessageCard message={message} 
                            openEdit={openEditFormForMessage} 
                            deleteMessage={deleteMessage}>  
                            
                            </MessageCard>
                        </li>);
                }
                
            })  
                                        
            }                                
        </ul>
    </div>
    )
}
