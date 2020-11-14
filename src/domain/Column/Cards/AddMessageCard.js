import React from 'react'
import {Form, FormGroup, Row, Col ,Input, Button}from 'reactstrap';

export default function AddMessageCard({addNewMessage, handleChangeMsg}) {
    return (
        <Form onSubmit={addNewMessage}>
                <Row className="flex-end-btn">
                    <Col xs="8">
                        <FormGroup> 
                            <Input type="text" onChange={handleChangeMsg}></Input>
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
