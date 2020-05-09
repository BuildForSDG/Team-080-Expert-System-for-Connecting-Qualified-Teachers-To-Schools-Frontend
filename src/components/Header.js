import React, { Component } from 'react';
import { Nav, Navbar, NavbarToggler, NavbarBrand, Collapse, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import hands2 from '../banner/hands2.png';


class Header extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
          isNavOpen: false
        };
        this.toggleNav = this.toggleNav.bind(this);
        
    }

    toggleNav() {
        this.setState({
          isNavOpen: !this.state.isNavOpen
        });
    }
    

    render() {
        return(
            <div>
                <Navbar dark expand="md">
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav} />
                        <NavbarBrand className="mr-auto" href="/"> Teachers Connect
                    	</NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
                <div className="banner">
	                <img src={hands2} alt="Banner" />
	                <h2>Teachers Connect</h2>
			    </div>
            </div>
        );
    }
}

export default Header;