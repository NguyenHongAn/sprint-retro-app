import React, {useState} from 'react';
import {Container, Row,Col, FormGroup,Form, Label, Input, Button} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

import './profile.css';


export default function ProfilePage() {
    const [changePass, setChangePass] = useState(false);

    const change = ()=>{
        setChangePass(!changePass);
    }
    return (
        <div>
       
        <Container >
            <h2 className="text-center">Thông tin tài khoản</h2>
            <Row className="justify-content-md-center profile">
                <Col lg="2">
                    <FontAwesomeIcon icon={faUserCircle} size="6x"></FontAwesomeIcon>
                </Col>
                <Col lg="8">
                    <Form method="POST" action="/profile">
                        <FormGroup>
                            <Label className="control-label" for="fullname">Fullname</Label>
                            <Input type="text" name="fullname"  id="fullname"
                                value="{{infor.fullname}}" placeholder="Fullname"/>                               
                        </FormGroup>
                        <FormGroup>
                            <Label className="control-label" for="username">Username</Label>
                            <Input type="text" name="username"  id="username"
                                value="userName" placeholder="Username"></Input>
                        </FormGroup>
                        <FormGroup>
                            <Label className="control-label" for="email">Email</Label>
                            <Input type="email" name="email" id="email"
                                value="Email" placeholder="Email"></Input>
                        </FormGroup>
                        <hr/>
                        <FormGroup>     
                            <Input type="checkbox" id="is_change_pass" name="is_change_pass"
                                checked={changePass} onChange={change}></Input>                     
                            <Label className="control-label" for="is_change_pass">Change password?</Label>    
                        </FormGroup>
                        {
                            changePass?
                            <FormGroup>
                                <FormGroup>
                                    <Label className="control-label" for="new-password">New password </Label>
                                    <Input type="password" name="new_password" id="new_password"
                                         value="" autocomplete="off" placeholder="New password"></Input>
                                </FormGroup>
                                <FormGroup>
                                    <Label className="control-label" for="renew-password">New password </Label>
                                    <Input type="password" name="renew_password" id="renew_password"
                                         value="" autocomplete="off" placeholder="Input new password"></Input>
                                </FormGroup>
                            </FormGroup>
                            :null
                        }
                        <FormGroup>
                            <Button color="primary" size="lg" outline type="submit">Save</Button>
                        </FormGroup>
                    </Form>
                </Col>
            </Row>
        </Container>
        </div>                                    

    )
}
