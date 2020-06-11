import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import About from '../screens/About';
import {
    Collapse, 
    Navbar,
    NavbarToggler,
    NavbarBrand,Nav,NavItem,
    NavLink, Container
} from 'reactstrap';
// import RegisterModal from "./auth/RegisterModal";
// import LoginModal from "./auth/LoginModal";
// import Logout from './auth/Logout';

class AppFooter extends Component {
    
    render() {
        <footer>
            <Container> 
                <Nav>
                    <NavLink href={About} />
                </Nav>
            </Container>
        </footer>
    }
}