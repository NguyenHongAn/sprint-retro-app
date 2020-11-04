import React, {useState} from 'react';
import {useLocation} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus,faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import {Form, FormGroup, Input, Button, Col, Row } from 'reactstrap';

import './boardList.css';
import axiosRequest from '../../api/axiosRequest';



export default function Column({name, messages, type}) {

    const location = useLocation();
    const [tempMsg, settempMsg] = useState("");
    const [changedMsg, setChangedMsg] = useState("");
   
    const [msgIdEdited, setmsgIdEdited] = useState("");
   
    
    const [isOpenAddDialog, setIsOpenAddDialog] = useState(false);

     //Add new message =================================================================
     const handleChangeMsg  = (e) => settempMsg (e.target.value);
     const isOpenAddMsgDialog = () => {
         setIsOpenAddDialog(!isOpenAddDialog);
     }
     
     
     const addNewMessage = async (e) =>{
         e.preventDefault();
 
         const newMsg = {
             columnType: type,
             comment: tempMsg,
             isActive: true,
             sprintID: location.pathname.split('/')[2],
             order: 1,
         }
 
         const response = await axiosRequest('POST',location.pathname, newMsg);
         let data = response.data;
         console.log({Post: data});
         if (response.status === 200)
         {
             messages.push(data);
             
             setIsOpenAddDialog(false);
         }
         else{
         }
     }
 
     //Edit messgae ====================================================================
     const handleEditMsg = (e) => setChangedMsg(e.target.value);
 
     const changeMessage = async (e, type)=>{
         e.preventDefault();
 
         const changedMsg = {
             _id:  msgIdEdited,
             columnType: type,
             comment: tempMsg,
             isActive: true,
             sprintID: location.pathname.split('/')[2],
             order: 1,
         }
 
         const response = await axiosRequest('PUT',`${location.pathname}/${msgIdEdited}`, changedMsg);
         let data = response.data;
         console.log({Post: data});
         if (response.status === 200)
         {               
           
         }
         else{
         }
     }
 
    const openEditFormForMessage = (msgId) => {
         //setIsEdit(true);
         setmsgIdEdited(msgId);
         console.log("ssssss");
     }
    
     const deleteMessage = async (msgid) =>{
         const response = axiosRequest("DELETE", `${location.pathname}/${msgid}`, msgid);
         if (response.status === 200)
         {               
            messages = Array.from(messages.filter(msg => msg._id !== msgid));
            console.log(response.data);
            
         }
         else{
         }
     }
    return (
        <div className="message-list overflow-hidden">
        <div className="color-picker">
        <span className={`front-${type +1} color-picker-selected`}></span>
        <span className="column-name">{name}</span>
        </div>
        <Button outline color="primary" block className="btn-add" onClick={() =>isOpenAddMsgDialog(type)}>
            <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
        </Button>
        <ul>
            
            {isOpenAddDialog?
            <li className={`front-${type +1} message`}>
            <Form onSubmit={(e) => addNewMessage(e)}>
                <Row className="flex-end-btn">
                    <Col xs="8">
                        <FormGroup> 
                            <Input type="text" className="form-control" onChange={handleChangeMsg}></Input>
                        </FormGroup>
                    </Col>
                    <Col xs="3">
                        <FormGroup>
                            <div></div>
                            <Button color="primary" block type="submit">Save</Button>
                        </FormGroup>
                    </Col>
                </Row>
            </Form>
            </li>
            :null
            }
            {
            messages.map(message =>{
                if (message._id === msgIdEdited)
                {
                    setChangedMsg(message.comment);
                    return <li className={`front-${type +1} message`}>
                    <Form onSubmit={(e) => changeMessage(e,type)}>
                        <Row className="flex-end-btn">
                            <Col xs="8">
                                <FormGroup> 
                                    <Input type="text" className="form-control" onChange={handleEditMsg}
                                    value={changedMsg}></Input>
                                </FormGroup>
                            </Col>
                            <Col xs="3">
                                <FormGroup>
                                    <div></div>
                                    <Button color="primary" block type="submit">Save</Button>
                                </FormGroup>
                            </Col>
                        </Row>
                    </Form>
                    </li>
                }
                else{
                    return (
                        <li className={`front-${type +1} message`}>
                            <div className="message-body">
                                <div className="text">
                                    {message.comment}
                                </div>
                            </div>
                            <Button onClick={() => openEditFormForMessage(message._id)} 
                            color="link" style={{color: "white"}}>
                                <FontAwesomeIcon icon={faEdit}></FontAwesomeIcon>
                            </Button>
                            <Button onClick={() => deleteMessage(message._id)} 
                            color="link" style={{color: "white"}}>
                                <FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon>
                            </Button>
                        </li>);
                }
                
            })  
                                        
            }                                
        </ul>
    </div>
    )
}
