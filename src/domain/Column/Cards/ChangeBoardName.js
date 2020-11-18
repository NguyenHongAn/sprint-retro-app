import React, { useState} from 'react';
import {Button, Form, Row, Col, Label, Input} from 'reactstrap';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit} from '@fortawesome/free-solid-svg-icons';

import './card.css';

export default function ChangeBoardName({board, changeBoardName}) {


    const handleBoardNameChange = (e) => {
        setTitle(e.target.value);
    }


    const [title, setTitle] = useState("");
    const [isOpen, setIsOpen] = useState(false);

    const handleChangeBoardName = async (e) =>{
        e.preventDefault();
        let changedBoard = Object.assign({}, board);
        changedBoard.title = title;
        //console.log(changedBoard);
       changeBoardName(changedBoard); 
       
        toggle();
    }

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Link type="button"  className="go-back-link" to="#/dashboard">/Dashboard</Link>
           
           <Row className="change-board-name-text">
           {isOpen?
                <Form onSubmit={(e) => handleChangeBoardName(e)} className="form">
                    <Row>
                    <Col md={6}>
                        
                        <Input type="text" className="form-input" onChange={handleBoardNameChange}
                        defaultValue={board.title}></Input>
                    </Col>
                    <Col md={4}>
                        <Button color="primary" outline type="submit">Save</Button>
                        <Button color='link' outline onClick={toggle}> Cancel</Button>
                    </Col>
                    </Row>        
                </Form>
           :
           <>
                <Label style={{padding: "10px 30px 0px 30px"}}>{board.title}</Label>
                <Button color="link" onClick={toggle}>
                    <FontAwesomeIcon icon={faEdit}></FontAwesomeIcon>
                </Button>
            </>
            }
            </Row>
            
        </div>
    )
}
