import React, {useState} from 'react'
import {Navbar,NavItem,NavLink,Collapse,NavbarBrand,Nav, NavbarToggler,Dropdown, DropdownItem, DropdownToggle, DropdownMenu } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
export default function AppNavBar({isTransparent}) {

    const [isOpen, setIsOpen] = useState(false);
    const [isSignin, setIsSignin]  = useState(true);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    const dropDown = () => setDropdownOpen(!dropdownOpen);
    const boardStyle = {
        backgroundColor: '#1e88e5', 
    }
    const transparentStyle = {
        backgroundColor: "transparent", 
    }


    const fontStyle={
        fontFamily: 'thirsty_script_extrabold_deRg',
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
                        <Dropdown isOpen={dropdownOpen} toggle={dropDown}>
                            <DropdownToggle className="nav-link" style={transparentStyle}>
                                <FontAwesomeIcon icon={faUserCircle} size="lg"></FontAwesomeIcon>
                            </DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem>
                                    <Link to="/profile" className="text-decoration-none"> Profile</Link>
                                </DropdownItem>
                                <DropdownItem>
                                    <Link to="/auth/signout" className="text-decoration-none"> Sign Out</Link>
                                </DropdownItem>
                            </DropdownMenu>        
                            </Dropdown>
                        </NavItem>           
                    </Nav>
                    :<Nav className="ml-auto" navbar>
                    <NavItem active>
                        <NavLink className="text-light" href="/auth/signin">Sign In</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="text-light" href="/auth/signup">Sign Up</NavLink>
                    </NavItem>
                </Nav>)}
                
            </Collapse>
        </Navbar>
    </div>
    )
}

