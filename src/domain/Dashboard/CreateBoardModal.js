import React, {useState} from 'react'
import {Modal,ModalHeader, ModalBody ,Form, FormGroup, Label, Input, Button} from 'reactstrap';

export default function CreateBoardModal({modal,toggle, addNewBoard}) {

    const [boardName, setBoardName] = useState("");
    
    const handleBoardNameChange = (e) => setBoardName(e.target.value);

    const createNewBoard = (e) =>{
        e.preventDefault();
            let board = {
                title: boardName,
                isActive: true,
            }
            addNewBoard(board);
    }
    return (
      
       <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle} className="text-uppercase justify-content-lg-around"> 
                Create Board
            </ModalHeader>
            <ModalBody>
                <Form onSubmit={(e) => {createNewBoard(e); toggle()}}>
                    <FormGroup >
                        <Label  for="boardName">Board Name</Label>
                        <Input type="text" onChange={handleBoardNameChange}
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
       </Modal>
    )
}
