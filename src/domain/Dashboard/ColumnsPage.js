import React, {useEffect, useState} from 'react';
import {Form, FormGroup,Label, Input, Button, Col, Row } from 'reactstrap';
import { Redirect, useLocation, useHistory} from "react-router-dom";


import './boardList.css';
import axiosRequest from '../../api/axiosRequest';
import AppNavBar from '../../components/AppNavBar';
import Column from './Column';

export default function ColumnsPage() {

    const location = useLocation();
    const history = useHistory();
    const [title, setTitle] = useState("");
    const [board, setBoard] = useState({});
    const [redirect, setRedirect] = useState(false);
    const [messages,setMessages] = useState({
        0: [],
        1: [],
        2: []
    }); 
   
    const [isRender, setisRender] = useState(false);
    
    const MESSAGE_COLUMNS  = ["Went Well", "To Improve","Action Items",];

    const backToDashboard = ()=> {
        history.push("/dashboard");
      }
    

    // GET data from server ================================================ 
    useEffect(()=>{
        const fetchData = async() =>{
            const response = await axiosRequest('GET',location.pathname);
            let data = response.data;
           
            if (response.status === 200)
            {
                let unsortedMsgs = Array.from(data.columns);
                let tempMessages = Object.assign({}, messages);
                setBoard(data);
                console.log(data);
                if (data.columns.length !== messages[1].length + messages[0].length + messages[2].length)
                {
                    unsortedMsgs.forEach(msg => {
                        const type = msg.columnType;
                        tempMessages[type].push(msg);
                    });
                    setMessages(tempMessages);
                    //setisRender(!isRender);
                }         
                //console.log(tempMessages);
            }
            else{
                setRedirect(true);
            }
        }
        fetchData();
    },[location.pathname, messages]);
    
   
    //Delete message =============================================================

    //Update boardName ============================================================
    const handleBoardNameChange = (e) => {
        setTitle(e.target.value);
    }

    const changeBoardName = async (e) =>{
        e.preventDefault();
        let changedBoard = Object.assign({}, board);
        changedBoard.title = title;
        console.log(changedBoard);
        
        const response = await axiosRequest("PUT",location.pathname, changedBoard);
        if (response.status === 200)
        {
             console.log(response.data);
             setisRender(!isRender);
        }
        else{
            setRedirect(true);
        }
    }

    return (
       redirect? 
       <Redirect to="/error"></Redirect>
       : 
       <div>
            <AppNavBar></AppNavBar>
           
            <div className="column">
            <Button color="link" size="lg" onClick={backToDashboard}> Dashboard</Button>
                <Form onSubmit={(e) => changeBoardName(e)}>
                    <Row style={{alignItems: "flex-end"}}>
                        <Col md="4">
                            <FormGroup >
                                <Label  for="boardName">Board Name</Label>
                                <Input type="text" className="form-control" onChange={handleBoardNameChange}
                                defaultValue={board.title}></Input>
                            </FormGroup>
                        </Col>
                        <Col md="2">
                            <FormGroup>
                                <div></div>
                                <Button color="primary" block outline type="submit">Save</Button>
                            </FormGroup>
                        </Col>
                    </Row>
                    </Form>
                    <hr/>
                    <div className="column-container">
                    {
                    MESSAGE_COLUMNS.map((column,i) =>{
                        return <Column name={column} messages={messages[i]} type={i}></Column>
                    })
                    }
                </div>                              
            </div>
       </div>
    )
    
}
