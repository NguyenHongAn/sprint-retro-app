import React, {useState} from 'react'
import {Col,Button, Form, FormGroup, Label, Input, Alert} from "reactstrap";
import {Link, useLocation, useHistory} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faFacebook } from '@fortawesome/free-brands-svg-icons';
import axiosRequest from '../../api/axiosRequest';

export default function SignIn() {

    const location = useLocation();
    const history = useHistory();

    const [email, setEmail] = useState("");
    const [password, setpassword] = useState("");
    const [notice, setNotice] = useState(location.state ? location.state : {
        message: "",
        status: 404
    });
    

    const login = async (e) =>{
        e.preventDefault();

        const user = {
            email: email,
            password: password,
        };
        try {
            const response= await axiosRequest("POST", "/auth/signin",user);
            const data = response.data;

            if (typeof data.token !== "undefined")
            {
                 //Store token 
                localStorage.setItem("jwt-token", data.token);
                 history.push("/dashboard");
                
            }
            else if (typeof data.message !== "undefined")
            {
                setNotice({
                    message: data.message,
                    status: 404 
                });
            }
          
        } catch (error) {
            
        }
        
    }
    const handleEmailChange = (e) =>
    {
        setEmail(e.target.value);
    }

    const handlePasswordChange = (e) =>
    {
        setpassword(e.target.value);
    }

    const isNewAccount = () =>{
        console.log(notice);
        if (notice.status === 200)
        {
            return (<Alert color="primary">
                {notice.message}
            </Alert>)
        }
        else if (notice.message !== "")
        {
            return (<Alert color="danger">
                    {notice.message}
                </Alert>)
        }
    }

    return (
        <Col md="9" lg="8" className="mx-auto">
            <h3 className="login-heading mb-4">Welcome back!</h3>
            { isNewAccount() }
            <Form onSubmit={(e) => login(e)}>
                <FormGroup className="form-label-group">
                    <Input type="email" id="inputEmail" onChange={handleEmailChange}
                    placeholder="Email" required></Input>
                    <Label for="inputEmail">Email</Label>
                </FormGroup>
                <FormGroup className="form-label-group">
                    <Input type="password" id="inputPassword" onChange={handlePasswordChange}
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
