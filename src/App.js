import React from 'react'
import {connect} from 'react-redux'
import {Container} from 'react-bootstrap'
import {BrowserRouter, Route, Redirect} from 'react-router-dom'

import {AppNav, AppProgressBar, Home, Protected, Login} from './components'

let PrivateRoute = ({component: Component, isAuthenticated, ...rest}) =>
    <Route
        {...rest}
        render = {props =>
            isAuthenticated
            ? <Component {...props} />
            : <Redirect
                to = {{
                    pathname: "/login",
                    state: {from: props.location}
                }}
            />
        }
    />

const state2props = state => ({
    isAuthenticated: state.Auth.isAuthenticated
})

PrivateRoute = connect(state2props, null)(PrivateRoute)

const App = props =>
    <BrowserRouter>
        <AppProgressBar />
        <AppNav />
        <Container className="pt-5">
            <Route path="/" exact component={Home} />
            <Route path="/login" component={Login} />
            <PrivateRoute path="/protected" component={Protected} />
        </Container>
    </BrowserRouter>

export default App
