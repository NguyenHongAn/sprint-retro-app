import React, {useState} from 'react';
import {Col,Button, Form, FormGroup, Label, Input ,Alert} from "reactstrap";
import {Link, useHistory} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faFacebook } from '@fortawesome/free-brands-svg-icons';

import axiosRequest from '../../api/axiosRequest';

export default function SignUp() {

    const [username, setUsername] = useState("");
    const [password, setpassword] = useState("");
    const history = useHistory();
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
            // else if (password.length < 6){
            //     setError("password must be at least 6 character");
            // }
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
        }
        try {
            const response = await axiosRequest("POST","/auth/signup", newUser);
            console.log(response.data);
            if (response.status === 200 && !response.data.message)
            {
                history.push({
                    pathname: "/auth/signin",
                    state: {
                        message: "sign up success !!",
                        status: 200,
                    }
                });
            }
            else{
                setError(response.data.message);
            }

        } catch (error) {
            alert(error);
        }
        
    }
    return (
        <Col md="9" lg="8" className="mx-auto">
        <h3 className="login-heading mb-4">Register</h3>
        {
            error === ""? null:
            <Alert color="danger">
                {error}
            </Alert>
        }
        <Form onSubmit={(e) => {registerNewAccount(e)}}>
            <FormGroup className="form-label-group">
                <Input type="email" id="inputEmail"  onChange={handleEmailChange}
                placeholder="Email address" required></Input>
                <Label for="inputEmail">Email address</Label>
            </FormGroup>
            <FormGroup className="form-label-group">
                <Input type="text" id="inputusername" onChange={handleUsernameChange} 
                placeholder="Username" required ></Input>
                <Label for="inputEmail">Username</Label>
            </FormGroup>
            <hr/>
            <FormGroup className="form-label-group">
                <Input type="password" id="inputPassword" onChange={handlePasswordChange} 
                placeholder="Password" required></Input>
                <Label for="inputPassword">Password</Label>
            </FormGroup>
            <FormGroup className="form-label-group">
                <Input type="password" id="reInputPassword" onChange={handleRePasswordChange} 
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
    </Col>
    )
}
