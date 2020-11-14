import React from 'react'
import {Container,Row, Col} from 'reactstrap';

import AppNavBar from '../../components/AppNavBar';
import SignIn from './SignIn';
import SignUp from './SignUp';
import './user.css';
import bg from './background.png';

export default function UserPage({option}) {
    return (
        <div className="overflow-hidden">
            <AppNavBar isTransparent={true}></AppNavBar>
            <Container fluid={true}>
                <Row> 
                    <Col xs="6" md="5" className="bg-image d-none d-md-flex" style={{"backgroundImage": `url(${bg})`}}></Col>
                    <Col md="7" lg="6">
                        <div className="login d-flex align-items-center py-5">
                            <Container>
                                <Row>
                                    {
                                        option === "signin"?
                                        <SignIn></SignIn>
                                        : <SignUp></SignUp>
                                    }
                                </Row>
                            </Container>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
