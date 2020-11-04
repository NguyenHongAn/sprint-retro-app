import React, {useState, useEffect} from 'react'
import {Modal,ModalHeader, ModalBody ,Form, FormGroup, Label, Input, Button} from 'reactstrap';
import axiosRequest from '../../api/axiosRequest';
import {Redirect} from 'react-router-dom';

export default function CreateCardModal({modal,toggle, add}) {

    const [boardName, setBoardName] = useState("");
    const [redirect, setRedirect] = useState(false);
    const handleBoardNameChange = (e) =>{
        setBoardName(e.target.value);
    }

    const createNewBoard = async (e) =>{
        e.preventDefault();
        let board = {
            title: boardName,
            userId: "5f9ae7216a959b00f478b1a8",
            isActive: true,
        }
        

       const response = await axiosRequest("POST",'/dashboard', board);
       if (response.status === 200)
       {
            add(response.data);
       }
       else{
           setRedirect(true);
       }
       
    }
    return (
       redirect? 
       <Redirect to="/error"></Redirect>
       :(<Modal isOpen={modal} toggle={toggle} >
            <ModalHeader toggle={toggle} className="text-uppercase justify-content-lg-around"> 
                Create Board
            </ModalHeader>
            <ModalBody>
                <Form onSubmit={(e) => {createNewBoard(e); toggle()}}>
                    <FormGroup >
                        <Label  for="boardName">Board Name</Label>
                        <Input type="text" className="form-control" onChange={handleBoardNameChange}
                        placeholder="Input board name"></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label>Template</Label>
                        <h5>Went Wel - To Improve - Action Items</h5>
                    </FormGroup>                
                    <FormGroup>
                            <Button color="primary" block outline type="submit">Save</Button>
                        </FormGroup>
                </Form>
            </ModalBody>
       </Modal>)
    )
}
