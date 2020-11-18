import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import {Button} from 'reactstrap';
import '../user.css';

function FacebookButton({getResponseFacebook}) {

    return (
        
        
    <Button color="primary" size="lg" block
     className="btn-login text-uppercase mr-2"
     onClick={() => getResponseFacebook("facebook")}>
        <FontAwesomeIcon icon={faFacebook}> </FontAwesomeIcon>
         <span>sign in with Facebook</span>
    </Button>
    )
}

export default FacebookButton;

