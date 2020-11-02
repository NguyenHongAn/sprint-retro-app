import React from 'react'
import {Col,Button, Form, FormGroup, Label, Input} from "reactstrap";
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faFacebook } from '@fortawesome/free-brands-svg-icons';


export default function SignUp() {
    return (
    <Col md="9" lg="8" className="mx-auto">
        <h3 class="login-heading mb-4">Register</h3>
        <Form method="POST" action="/user/signup">
            <FormGroup className="form-label-group">
                <Input type="email" id="inputEmail" className="form-control" name="email"
                placeholder="Email address" required autofocus></Input>
                <Label for="inputEmail">Email address</Label>
            </FormGroup>
            <FormGroup className="form-label-group">
                <Input type="text" id="inputusername" className="form-control" name="username"
                placeholder="Username" required ></Input>
                <Label for="inputEmail">Username</Label>
            </FormGroup>
            <hr/>
            <FormGroup className="form-label-group">
                <Input type="password" id="inputPassword" class="form-control" name="password"
                placeholder="Password" required></Input>
                <Label for="inputPassword">Password</Label>
            </FormGroup>
            <FormGroup className="form-label-group">
                <Input type="password" id="inputPassword" class="form-control" name="rePassword"
                placeholder="Re Password" required></Input>
                <Label for="inputPassword">Re Password</Label>
            </FormGroup>
            <hr/>
                <Button type="submit" color="primary" size="lg" block
                className="btn-login text-uppercase font-weight-bold mb-2"> Sign Up</Button>   
                <div className="text-center">
                    <Link to="/user/signin">Sign In</Link>
                </div>
            <hr/>
            <Button type="submit" color="danger" size="lg" block className="btn-login text-uppercase mr-2">
                <FontAwesomeIcon icon={faGoogle}> </FontAwesomeIcon>
                <span>Google sign up</span> 
            </Button>
            <Button type="submit" color="primary" size="lg" block className="btn-login text-uppercase mr-2">
                <FontAwesomeIcon icon={faFacebook}> </FontAwesomeIcon>
                 <span> Facebook sign up</span>
            </Button>
        </Form>
    </Col>
    )
}
