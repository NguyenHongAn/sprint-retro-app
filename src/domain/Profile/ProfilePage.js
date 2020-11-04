import React, {useState, useEffect} from 'react';
import {Container, Row,Col, FormGroup,Form, Label, Input, Button} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

import './profile.css';
import AppNavBar from '../../components/AppNavBar';

export default function ProfilePage() {
    const [changePass, setChangePass] = useState(false);

    const change = ()=>{
        setChangePass(!changePass);
    }
    return (
        <div>
        <AppNavBar></AppNavBar>
       
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
                            <Input type="text" name="fullname" className="form-control" id="fullname"
                                value="{{infor.fullname}}" placeholder="Fullname"/>                               
                        </FormGroup>
                        <FormGroup>
                            <Label className="control-label" for="username">Username</Label>
                            <Input type="text" name="username" className="form-control" id="username"
                                value="userName" placeholder="Username"></Input>
                        </FormGroup>
                        <FormGroup>
                            <Label className="control-label" for="email">Email</Label>
                            <Input type="email" name="email" className="form-control" id="email"
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
                                    <Input type="password" name="new_password" class="form-control" id="new_password"
                                         value="" autocomplete="off" placeholder="New password"></Input>
                                </FormGroup>
                                <FormGroup>
                                    <Label className="control-label" for="renew-password">New password </Label>
                                    <Input type="password" name="renew_password" class="form-control" id="renew_password"
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

    //                     <div class="form-group">
    //                         <div class="input-wrap margin">
    //                             <label class="checkbox">
    //                                 <input type="checkbox" id="is_change_pass" name="is_change_pass" value="checked">
    //                                 Change password?
    //                             </label>
    //                         </div>
    //                     </div>
    //                     <div class="password-group">
    //                         <div class="form-group">
    //                             <label class="control-label" for="old_password">Current password</label>
    //                             <div class="input-wrap">
    //                                 <input type="password" name="old_password" class="form-control" id="old_password"
    //                                     value="" autocomplete="off" placeholder="Current password">
    //                                 <span class="help-block"></span>
    //                             </div>

    //                         </div>

    //                         <div class="form-group">
    //                             <label class="control-label" for="new-password">New password</label>
    //                             <div class="input-wrap">
    //                                 <input type="password" name="new_password" class="form-control" id="new_password"
    //                                     value="" autocomplete="off" placeholder="New password">
    //                                 <span class="help-block"></span>
    //                             </div>
    //                         </div>

    //                         <div class="form-group">
    //                             <label class="control-label" for="re_new_password">Confirm new password</label>
    //                             <div class="input-wrap">
    //                                 <input type="password" name="re_new_password" class="form-control"
    //                                     id="re_new_password" value="" autocomplete="off"
    //                                     placeholder="Confirm new password">
    //                                 <span class="help-block"></span>
    //                             </div>
    //                         </div>

    //                     </div>
    //                     <div class="form-group">
    //                         <button type="submit" class="btn btn-primary btn-block btn-update">Save</button>
    //                     </div>
    //                 </form>
    //             </div>
    //         </div>
    //     </div>
    //     <div class="float-right"><a class="btn btn-danger" href="/account/signout">Sign out</a></div>
    


    )
}
