import React from 'react'; 
import {Button} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';

import '../user.css';

function GoogleButton({getResponseGoogle}) {

    return (
       
        <Button color="danger" size="lg" block className="btn-login mr-2 text-uppercase"
        onClick={() => getResponseGoogle("google")}>
            <FontAwesomeIcon icon={faGoogle}> </FontAwesomeIcon>
            <span>sign in with Google</span> 
        </Button>
    )
}

export default GoogleButton;
