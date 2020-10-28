import React, {useState} from 'react'
import {Navbar,NavItem,NavLink,Collapse,NavbarBrand,Nav, NavbarToggler } from 'reactstrap';

export default function AppNavBar() {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    const boardStyle = {
        backgroundColor: '#1e88e5',
    }

    return (
    <div>
        <Navbar style={boardStyle} className="text-light" light expand="md">
            <NavbarBrand href="/" className="text-light">SprintRetro</NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
                <Nav className="ml-auto" navbar>
                    <NavItem active>
                        <NavLink className="text-light" href="#">Sign In</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="text-light" href="#">Sign Up</NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    </div>
    )
}

