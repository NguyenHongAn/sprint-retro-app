import React from 'react'
import {Col,Button, Form, FormGroup, Label, Input} from "reactstrap";
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faFacebook } from '@fortawesome/free-brands-svg-icons';

export default function SignIn() {
    return (
        <Col md="9" lg="8" className="mx-auto">
            <h3 class="login-heading mb-4">Welcome back!</h3>
            <Form method="POST" action="/user/signin">
                <FormGroup className="form-label-group">
                    <Input type="email" id="inputEmail" className="form-control" name="email"
                    placeholder="Email address" required autofocus></Input>
                    <Label for="inputEmail">Email address</Label>
                </FormGroup>
                <FormGroup className="form-label-group">
                    <Input type="password" id="inputPassword" class="form-control" name="password"
                     placeholder="Password" required></Input>
                    <Label for="inputPassword">Password</Label>
                </FormGroup>
                <hr/>
                    <Button type="submit" color="primary" size="lg" block
                    className="btn-login text-uppercase font-weight-bold mb-2"> Sign In</Button>   
                    <div className="text-center">
                        <Link to="#">Forgot password?</Link>
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
            // <div class="col-md-9 col-lg-8 mx-auto">
            //   <h3 class="login-heading mb-4">Welcome back!</h3>
            //   <form>
            //     <div class="form-label-group">
            //       <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus>
            //       <label for="inputEmail">Email address</label>
            //     </div>

            //     <div class="form-label-group">
            //       <input type="password" id="inputPassword" class="form-control" placeholder="Password" required>
            //       <label for="inputPassword">Password</label>
            //     </div>

            //     <div class="custom-control custom-checkbox mb-3">
            //       <input type="checkbox" class="custom-control-input" id="customCheck1">
            //       <label class="custom-control-label" for="customCheck1">Remember password</label>
            //     </div>
            //     <button class="btn btn-lg btn-primary btn-block btn-login text-uppercase font-weight-bold mb-2" type="submit">Sign in</button>
            //     <div class="text-center">
            //       <a class="small" href="#">Forgot password?</a></div>
            //   </form>
            // </div>
        
    )
}
