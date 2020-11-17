import React, {useState, useEffect} from 'react';
import {Container, Row,Col, FormGroup,Form, Label, Input, Button, Alert} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import {useHistory} from "react-router-dom";

import './profile.css';
import axiosRequest from '../../api/axiosRequest';

export default function ProfilePage() {

    const history = useHistory();
    const [changePass, setChangePass] = useState(false);
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [board, setBoard] = useState(0);
    const [password, setpassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const[notice, setNotice] = useState("");
    const[currentUserInfo, setCurrentUserInfo] = useState({});
    
    const handleEmailChange = (e)=> setEmail(e.target.value);

    const handleUsernameChange = (e)=> setUsername(e.target.value);

    const handlePasswordChange = (e)=> setpassword(e.target.value);
    
    const handleNewPasswordChange = (e)=>{
        
        setNewPassword(e.target.value);
        
    }

    useEffect(()=>{
        async function fetchData(){
            try {
                const response = await axiosRequest("GET", "/profile");
                const userInfo = response.data;
                console.log(userInfo);
                
                //set dat for state
                setUsername(userInfo.username);
                setEmail(userInfo.email);
                setBoard(userInfo.sprints.length);
                setCurrentUserInfo(userInfo);
                
            } catch (error) {
                console.log(error.response);
                if (error.response.status >= 400 && error.response.status <= 500)
                {
                    history.push("/auth/signin");
                    localStorage.removeItem("jwt-token");  
                }
                else{
                    setNotice("Can not get data from server");
                }
            }
        }
        fetchData();
    },[history]);


    const changePassword = () => setChangePass(!changePass);

    //  CHANGE user's infomation using POST method ===========================================
    const changeUSerInfo =async (e) =>{
        e.preventDefault();

        // B1: create new user from state
        const changedUser = {
            isPassChange: changePass,
            isEmailChange: true,
            user: {
                username: username,
                email: email,
                password: password,
                newPassword: newPassword,
            }
            
        };
        if (email !== currentUserInfo.email || username !== currentUserInfo.username || changePass)
        {
        
            if (email === currentUserInfo)
            {
                changedUser.isEmailChange = false;
            }
        //B2 : post to server to update info of user
            try {
                const response = await axiosRequest('POST', '/profile', changedUser);
                const data = response.data;
               
                if (typeof data.result !== "undefined" && typeof data.token !== "undefined")
                {
                    setUsername(data.result.username);
                    setEmail(data.result.email);
                    setBoard(data.result.sprints.length);
                    setCurrentUserInfo(data.result);

                    localStorage.removeItem("jwt-token");
                    localStorage.setItem("jwt-token", data.token);

                    setNotice("");
                }
                if(typeof data.message !== "undefined")
                {
                   
                    setNotice(data.message);
                }
            } catch (error) {
                if (error.response.status >= 400 && error.response.status < 500)
                {
                    history.push("/auth/signin");
                    localStorage.removeItem("jwt-token");  
                }
                else{
                    setNotice(error);
                    alert(error);
                }
            }   
        }
        else{
            setNotice("User's information did not change");
        }
    }

    return (
        <div>
       
        <Container >
            <h2 className="text-center profile-header">Thông tin tài khoản</h2>
            <Row className="justify-content-md-center profile">
                <Container > {
                    notice!==""? <Alert color="warning" className="text-lg-center">{notice}</Alert>
                    : null
                }
                </Container>
                <Col lg="2">
                    <FontAwesomeIcon icon={faUserCircle} size="6x"></FontAwesomeIcon>
                </Col>
                <Col lg="8">
                    <Form onSubmit={(e) => changeUSerInfo(e)}>
                        <FormGroup>
                            <Label className="control-label" for="username">Username</Label>
                            <Input type="text" id="username" onChange={handleUsernameChange}
                                value={username} placeholder="Username"/>                               
                        </FormGroup>
                      
                        <FormGroup>
                            <Label className="control-label" for="email">Email</Label>
                            <Input type="email" id="email" onChange={handleEmailChange}
                                value={email} placeholder="Email"></Input>
                        </FormGroup>
                            <Label >Number of board: {board}</Label>
                        <hr/>
                        <FormGroup>     
                            <Input type="checkbox" id="is_change_pass" name="is_change_pass"
                                checked={changePass} onChange={changePassword}></Input>                     
                            <Label className="control-label" for="is_change_pass">Change password?</Label>    
                        </FormGroup>
                        {
                            changePass?
                            <FormGroup>
                                <FormGroup>
                                    <Label className="control-label" for="password">Password </Label>
                                    <Input type="password" id="password" onChange={handlePasswordChange}
                                         value={password} autoComplete="off" placeholder="password"></Input>
                                </FormGroup>
                                <FormGroup>
                                    <Label className="control-label" for="new-password">New password </Label>
                                    <Input type="password" id="new_password" onChange={handleNewPasswordChange}
                                         value={newPassword} autoComplete="off" placeholder="New password"></Input>
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
