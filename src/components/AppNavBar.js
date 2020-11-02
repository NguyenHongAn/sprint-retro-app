import React, {useState} from 'react'
import {Navbar,NavItem,NavLink,Collapse,NavbarBrand,Nav, NavbarToggler } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
export default function AppNavBar({isTransparent}) {

    const [isOpen, setIsOpen] = useState(false);
    const [isSignin, setIsSignin]  = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    const boardStyle = {
        backgroundColor: '#1e88e5', 
    }
    const transparentStyle = {
        backgroundColor: "transparent", 
    }


    const fontStyle={
        fontFamily: 'thirsty_script_extrabold_deRg',
    }

    const setStyle = () =>
    {
        if (isTransparent)
        {
            return boardStyle;
        }
        else{
            return transparentStyle;
        }
        
    }
    return (
    <div>
        <Navbar style={isTransparent? transparentStyle:boardStyle} className="text-light text-uppercase" fixed="top" light expand="md">
            <NavbarBrand href="/" className="text-light" style={fontStyle}>Sprint Retro</NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
                
                {isTransparent? null :(isSignin?
                    <Nav className="ml-auto" navbar>
                        <NavItem active>
                            <NavLink className="text-light" href="/profile">
                                <FontAwesomeIcon icon={faUserCircle} size="lg"></FontAwesomeIcon>
                            </NavLink>
                        </NavItem>
                    </Nav>
                    :<Nav className="ml-auto" navbar>
                    <NavItem active>
                        <NavLink className="text-light" href="/user/signin">Sign In</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="text-light" href="/user/signup">Sign Up</NavLink>
                    </NavItem>
                </Nav>)}
                
            </Collapse>
        </Navbar>
    </div>
    )
}

