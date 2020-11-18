import React, {useState, useEffect} from 'react'
import {Col,Button, Form, FormGroup, Label, Input, Alert} from "reactstrap";
import {Link, useLocation, useHistory} from "react-router-dom";

import FacebookButton from './Buttons/FacebookButton';
import GoogleButton from './Buttons/GoogleButton';
import axiosRequest from '../../api/axiosRequest';
import './user.css';
import Cookies from 'js-cookie';

export default function SignIn() {

    const location = useLocation();
    const history = useHistory();
    const HOST_URL = process.env.REACT_APP_ENV === "develop"? process.env.REACT_APP_DEV_SITE: process.env.REACT_APP_PRODUCT_SITE;
    const [email, setEmail] = useState("");
    const [password, setpassword] = useState("");
    const [notice, setNotice] = useState(location.state ? location.state : {
        message: "",
        status: 404
    });
    //let popup = null;
    
    useEffect(() =>{
        const localToken = localStorage.getItem("jwt-token");
        if (localToken)
        {
            history.push("/dashboard");
            return;
        }

        const socialToken = Cookies.get('jwt-token');
        if (socialToken)
        {
            console.log(socialToken);
            localStorage.setItem("jwt-token", socialToken);
            Cookies.remove('jwt-token');
            history.push("/dashboard");
            return;
        }
    }, [history]);

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


    const getResponse = (type) =>{
        const width = 600, height = 600;
        const left = (window.innerWidth / 2) - (width / 2);
        const top = (window.innerHeight / 2) - (height / 2);
        const url = `${HOST_URL}/auth/${type}`

        return window.open(url, "_self",       
          `toolbar=no, location=no, directories=no, status=no, menubar=no, 
          scrollbars=no, resizable=no, copyhistory=no, width=${width}, 
          height=${height}, top=${top}, left=${left}`
        );


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
       
        if (typeof notice !== "undefined")
        {
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
                <FormGroup>
                    <FacebookButton getResponseFacebook={getResponse} ></FacebookButton>
                    <GoogleButton 
                    getResponseGoogle={getResponse}
                    ></GoogleButton>
                </FormGroup>
                
            </Form>
        </Col>
    )
}
