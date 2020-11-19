import React, {useState} from 'react'
import {Navbar,NavItem,NavLink,Collapse,NavbarBrand,Nav, NavbarToggler,Dropdown, DropdownItem, DropdownToggle, DropdownMenu } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { Link, useLocation, useHistory } from 'react-router-dom';


export default function AppNavBar() {

    const [isOpen, setIsOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const location = useLocation();
    const history= useHistory();
    const toggle = () => setIsOpen(!isOpen);
    const dropDown = () => setDropdownOpen(!dropdownOpen);

    const fontStyle={
        fontFamily: 'thirsty_script_extrabold_deRg',
    }

    const isTranparent = () =>{
        console.log(location.pathname);
        if (location.pathname.indexOf("auth") !== -1 )
        {
           return { backgroundColor: "transparent"};
        }
        return {backgroundColor: '#1e88e5'} 
    }

    const signOut = ()=>{
        localStorage.removeItem("jwt-token");
        history.push('/');
    }

    const signOutBtn = {
        border: "none",
        backgroundColor: "transparent",
        padding: '0px',
    }
    return (
    <div>
        <Navbar style={isTranparent()} 
        className="text-light" fixed="top" light expand="md">
            <NavbarBrand href="/" className="text-light" style={fontStyle}>Sprint Retro</NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
                
                {localStorage.getItem('jwt-token')?
                    <Nav className="ml-auto" navbar>
                        <NavItem active>
                        <Dropdown isOpen={dropdownOpen} toggle={dropDown} >
                            <DropdownToggle className="nav-link" style={{backgroundColor: "transparent"}}>
                                <FontAwesomeIcon icon={faUserCircle} size="lg"></FontAwesomeIcon>
                            </DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem>
                                    <Link to="/profile" className="text-decoration-none"> Profile</Link>
                                </DropdownItem>
                                <DropdownItem>
                                    <button onClick={signOut} className="btn-link" style={signOutBtn}>Sign Out</button>
                                </DropdownItem>
                                <DropdownItem>
                                    <Link to="/dashboard" className="text-decoration-none"> Dashboard</Link>
                                </DropdownItem>
                            </DropdownMenu>        
                            </Dropdown>
                        </NavItem>           
                    </Nav>
                    :<Nav className="ml-auto" navbar>
                    <NavItem active>
                        <Link className="text-light nav-link" to="/auth/signin">Sign In</Link>
                    </NavItem>
                    <NavItem active>
                        <Link className="text-light nav-link" to="/auth/signup">Sign Up</Link>
                    </NavItem>
                </Nav>}
                
            </Collapse>
        </Navbar>
    </div>
    )
}

