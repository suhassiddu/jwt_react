import React from 'react'
import {connect} from 'react-redux'
import {Navbar, Nav, Form, Button} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'

import {logout} from '../actions'

const AppNav = props =>    
    <Navbar bg="light" expand="lg">
        <LinkContainer to="/">
            <Navbar.Brand>Home</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                {   
                    props.isAuthenticated
                    ? <LinkContainer to="/protected">
                        <Nav.Link>Protected</Nav.Link>
                    </LinkContainer>
                    : <Nav.Link disabled>
                        Protected
                    </Nav.Link>
                }
                {
                    props.isAuthenticated
                    ? <Form inline>
                        <Button variant="primary" onClick={props.onLogout}>Logout</Button>
                    </Form>
                    : <LinkContainer to="/login">
                        <Nav.Link>Login</Nav.Link>
                    </LinkContainer>
                }
            </Nav>
        </Navbar.Collapse>
    </Navbar>

const state2props = state => ({
    isAuthenticated: state.Auth.isAuthenticated
})

const dispatch2props = dispatch => ({
    onLogout: () => {
        dispatch(logout())
    }
})

export default connect(state2props, dispatch2props)(AppNav)
