import React, {useEffect, useState} from 'react';
import { useLocation} from "react-router-dom";


import './column.css';
import axiosRequest from '../../api/axiosRequest';
import Column from './Column';
import ChangeBoardName from './Cards/ChangeBoardName';
import MESSAGE_COLUMNS from './ColumnTemplate';


export default function ColumnsPage() {

    const location = useLocation();
    const [board, setBoard] = useState({});
    const [messages,setMessages] = useState({
        0: [],
        1: [],
        2: []
    }); 

    // GET data from server ================================================ 
    useEffect(()=>{
        const fetchData = async() =>{
            try {
            const response = await axiosRequest('GET',location.pathname);
            let data = response.data;
           
            if (response.status === 200)
            {
                let unsortedMsgs = Array.from(data.columns);
                let tempMessages = {
                    0: [],
                    1: [],
                    2: []
                };
                setBoard(data);
               
               
                unsortedMsgs.forEach(msg => {
                    const type = msg.columnType;
                    tempMessages[type].push(msg);
                });
                setMessages(tempMessages);
                //console.log(messages[0].length + messages[1].length + messages[2].length !== unsortedMsgs.length);
                

            }

            } catch (error) {
            
                alert("can not get data from server");
            }
        }
        fetchData();
    },[location.pathname]);

    // CHANGE board name ==================================================================
    const changeBoardName= async (changedBoard) =>{
        try {
            const response = await axiosRequest("PUT",location.pathname, changedBoard);
            if (response.status === 200)
            {
                console.log(response.data);
                const newBoard = Object.assign({}, changedBoard);
                setBoard(newBoard);    
            }
            
        } catch (error) {
            alert("can not change board name");
        }
    }

    //ADD new message ======================================================================
    const addNewMessage = async (newMsg) =>{
        try {
            //B1: post new message to server
            const response = await axiosRequest('POST',location.pathname, newMsg);
            const data = response.data;
            console.log({Post: data});
            //B2: check response status
            if (response.status === 200)
            {
                //B3: Add new message to messages object
                const type = data.columnType;
                const newMessages = Object.assign({}, messages);
                newMessages[type].push(data);               
                setMessages(newMessages);
                
            }
        } catch (error) {
            //error handle
            alert("can not add new message");
        }
    }

    // DELETE message ===============================================================
    const deleteMessage = async (messageID, type) =>{
        try {
            //B1: delete message with DELETE method
            const response = await axiosRequest("DELETE", `${location.pathname}/${messageID}`, messageID);
            
            if (response.status === 200)
            {       
                //B3: Change message and re render  
                
                const newMessages = Object.assign({}, messages);
                //delete messages[type];
                newMessages[type] = messages[type].filter(msg => msg._id !== messageID);
                console.log(messages);
                setMessages(newMessages);
            }
        } catch (error) {
             //error handle
             alert("can not delete message");
        }
    }

    //EDIT message ================================================================
    const editMessage = async (changedMessage) =>{
        try {
            //B1: change message with PUT method
            const response = await axiosRequest('PUT',`${location.pathname}/${changedMessage._id}`, changedMessage);
            const data = response.data;
            console.log({Edit: data});
            //B2: check response status
            if (response.status === 200)
            {               
                //B3: update messages list
                const type = changedMessage.columnType;
                const newMessages = Object.assign({}, messages);
                newMessages[type] = messages[type].map(message =>{
                    if (message._id === data._id)
                    {
                        return data;
                    }
                    return message;
                })
                console.log(newMessages);
                setMessages(newMessages);
            }
            
            
        } catch (error) {
            
        }
    }


    return (
      
       <div>
            <div className="column">
                <ChangeBoardName board={board} changeBoardName={changeBoardName}></ChangeBoardName>
                <hr/>
                <div className="column-container">
                    {
                    MESSAGE_COLUMNS.map((column,i) =>{
                        return <Column column={column} 
                        messages={messages[i]}
                        addNewMsg={addNewMessage}
                        deleteMsg={deleteMessage}
                        editMsg={editMessage}
                        key={i}
                        ></Column>
                    })
                    }
                </div>                              
            </div>
       </div>
    )
    
}
