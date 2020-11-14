import React from 'react';
import {Form, Row, Col, FormGroup, Input, Button} from 'reactstrap';
export default function EditMessageCard({message,
                                         handleEditMsg, 
                                         changedMsg,
                                        editMessage
                                    }) {
    return (
        <Form onSubmit={(e) => editMessage(e,message)}>
            <Row className="flex-end-btn">
                <Col xs="8">
                    <FormGroup> 
                        <Input type="text" onChange={handleEditMsg}
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
    )
}
