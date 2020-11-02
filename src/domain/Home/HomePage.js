import React from 'react'
import "./HomePage.css";
import {Container} from "reactstrap";
import AppNavBar from '../../components/AppNavBar';
import bg from './background.png';
import {Link} from 'react-router-dom';

export default function HomePage() {
   
    return (
        <div>
            <AppNavBar isTransparent={false}/>
            <div className="background active" 
            style={{"backgroundImage": `url(${bg})`}}>
                <div className="carousel-caption" style={{ "bottom": "30%"}}>
                <Container className="heading">
                    Improve with Sprint Retrospectives 
                <p className="lead">This is a description for the first slide.</p>
                <Link className="btn-start" to="/user/signup"> Get Started for Free </Link>
                </Container>
                
                </div>
            </div>
        </div>
    )
}