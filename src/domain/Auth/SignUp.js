import React, {useState, useEffect} from 'react';
import {Col,Button, Form, FormGroup, Label, Input ,Alert} from "reactstrap";
import {Link, Redirect} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faFacebook } from '@fortawesome/free-brands-svg-icons';

import axiosRequest from '../../api/axiosRequest';

export default function SignUp() {

    const [username, setUsername] = useState("");
    const [password, setpassword] = useState("");
    const [redirect, setRedirect] = useState(false);
    const [rePassword, setRePassword] = useState("");
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");

    const handleEmailChange = (e)=>{
        setEmail(e.target.value);
    }

    const handleUsernameChange = (e)=>{
        setUsername(e.target.value);
    }

    const handlePasswordChange = (e)=>{
        setpassword(e.target.value);
    }
    
    const handleRePasswordChange = (e)=>{
        comparePassword(password,e.target.value);
        setRePassword(e.target.value);
        
    }
    
    const comparePassword = (password, rePassword) =>{
        if (password !== "")
        {
            if (password !== rePassword)
            {
                setError("Password is not match!!!");
            }
            else{
                setError("");
            }
        }
    }

    const registerNewAccount = async (e)=>{
        e.preventDefault();

        let newUser = {
            email: email,
            username: username,
            password: password,
            repassword:rePassword,
        }

        let response = await axiosRequest("POST","/auth/signup", newUser);
        if (response.status === 200)
        {
            setRedirect(true);
        }
        else{
            setError(response.message);
        }
    }
    return (
        redirect?
            <Redirect to="/auth/signin"></Redirect>
            :(<Col md="9" lg="8" className="mx-auto">
        <h3 class="login-heading mb-4">Register</h3>
        {
            error === ""? null:
            <Alert color="danger">
                {error}
            </Alert>
        }
        <Form onSubmit={(e) => {registerNewAccount(e)}}>
            <FormGroup className="form-label-group">
                <Input type="email" id="inputEmail" className="form-control" onChange={handleEmailChange}
                placeholder="Email address" required></Input>
                <Label for="inputEmail">Email address</Label>
            </FormGroup>
            <FormGroup className="form-label-group">
                <Input type="text" id="inputusername" className="form-control" onChange={handleUsernameChange} 
                placeholder="Username" required ></Input>
                <Label for="inputEmail">Username</Label>
            </FormGroup>
            <hr/>
            <FormGroup className="form-label-group">
                <Input type="password" id="inputPassword" class="form-control" onChange={handlePasswordChange} 
                placeholder="Password" required></Input>
                <Label for="inputPassword">Password</Label>
            </FormGroup>
            <FormGroup className="form-label-group">
                <Input type="password" id="reInputPassword" class="form-control" onChange={handleRePasswordChange} 
                placeholder="Re Password" required></Input>
                <Label for="reInputPassword">Re Password</Label>
            </FormGroup>
            <hr/>
                <Button type="submit" color="primary" size="lg" block
                className="btn-login text-uppercase font-weight-bold mb-2"> Sign Up</Button>   
                <div className="text-center">
                    <Link to="/auth/signin">Sign In</Link>
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
    </Col>)
    
    )
}
