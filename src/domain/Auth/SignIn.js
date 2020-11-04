import React, {useState, useEffect} from 'react'
import {Col,Button, Form, FormGroup, Label, Input, Alert} from "reactstrap";
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faFacebook } from '@fortawesome/free-brands-svg-icons';
import axiosRequest from '../../api/axiosRequest';

export default function SignIn() {

    const [usename, setUsername] = useState("");
    const [password, setpassword] = useState("");
    const [error, setError] = useState("");

    const login = async (e) =>{
        e.preventDefault();

        let user = {
            usename: usename,
            password: password,
        };
        
        let response= await axiosRequest("POST", "/auth/signin",user)
        if (response.status === 200)
       {
            console.log(response.data);
       }
       else{
           setError(response.message);
       }
    }
    const handleUsernameChange = (e) =>
    {
        setUsername(e.target.value);
    }

    const handlePasswordChange = (e) =>
    {
        setpassword(e.target.value);
    }
    return (
        <Col md="9" lg="8" className="mx-auto">
            <h3 class="login-heading mb-4">Welcome back!</h3>
            {
                error === ""? null:
                <Alert color="danger">
                    {error}
                </Alert>
            }
            <Form onSubmit={(e) => login(e)}>
                <FormGroup className="form-label-group">
                    <Input type="text" id="inputUsernanme" className="form-control" onChange={handleUsernameChange}
                    placeholder="Username" required></Input>
                    <Label for="inputUsername">Username</Label>
                </FormGroup>
                <FormGroup className="form-label-group">
                    <Input type="password" id="inputPassword" class="form-control" onChange={handlePasswordChange}
                     placeholder="Password" required></Input>
                    <Label for="inputPassword">Password</Label>
                </FormGroup>
                <hr/>
                    <Button type="submit" color="primary" size="lg" block
                    className="btn-login text-uppercase font-weight-bold mb-2"> Sign In</Button>   
                    <div className="text-center">
                        <Link to="#">Forgot password?</Link>
                    </div>
                    <div className="text-center">
                        <Link to="/auth/signup">Sign up</Link>
                    </div>
                <hr/>
                <Button type="submit" color="danger" size="lg" block className="btn-login text-uppercase mr-2">
                    <FontAwesomeIcon icon={faGoogle}> </FontAwesomeIcon>
                    <span>Google sign in</span> 
                </Button>
                <Button type="submit" color="primary" size="lg" block className="btn-login text-uppercase mr-2">
                    <FontAwesomeIcon icon={faFacebook}> </FontAwesomeIcon>
                     <span> Facebook sign in</span>
                </Button>
            </Form>
        </Col>
    )
}
