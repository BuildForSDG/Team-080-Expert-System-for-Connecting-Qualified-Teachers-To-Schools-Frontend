import React, { Component } from 'react';
import { Nav, Navbar, NavbarBrand, Button, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import logo from '../banner/logo.png';


class Header extends Component {
    
    render() {
        return(
            <div>
                <Navbar dark expand="md">
                    <div className="container">
                        <NavbarBrand className="mr-auto logo" href="/"> <img src={logo} alt="Logo" />
                    	</NavbarBrand>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <NavLink className="nav-link" to='/schools'><span className="fa fa-user-plus fa-lg"></span><Button className="butn"> For Schools</Button></NavLink>
                                </NavItem>
                            </Nav>
                    </div>
                </Navbar>
            </div>
        );
    }
}

export default Header;