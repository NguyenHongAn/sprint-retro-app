import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import{Button} from 'reactstrap';
import './card.css'
export default function MessageCard({message, openEdit,deleteMessage}) {
    return (
        <>
        <div className="message-body">
            <div className="text">
                {message.comment}
            </div>
            </div>
            <Button onClick={() => openEdit(message)} 
            color="link" style={{color: "white"}}>
                <FontAwesomeIcon icon={faEdit}></FontAwesomeIcon>
            </Button>
            <Button onClick={() => deleteMessage(message._id)} 
            color="link" style={{color: "white"}}>
                <FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon>
            </Button>
        </>
    )
}
