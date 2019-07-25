import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {Form, Button, Alert} from 'react-bootstrap'

import {login} from '../actions'

class Login extends Component{
    constructor(props){
        super(props)
        this.state = {
            isEmpty: false
        }
        this.username_input = React.createRef()
        this.password_input = React.createRef()
        this.handle_submit = this.handle_submit.bind(this)
    }
    handle_submit(){
        const username = this.username_input.current.value.trim()
        const password = this.password_input.current.value.trim()
        if(username && password){
            this.setState({isEmpty: false})
            this.props.onLogin({
                username,
                password
            }, this.props.history)
        } else{
            this.setState({isEmpty: true})
        }
    }
    render(){
        return <Form>
              {
                  this.props.Auth.statusCode === 401
                  ? <Alert variant="danger">{this.props.Auth.errMsg}</Alert>
                  : <div/>
              }
              {
                  this.state.isEmpty
                  ? <Alert variant="danger">Please provide all the parameters</Alert>
                  : <div/>
              }
              <Form.Group>
                <Form.Label>User Name</Form.Label>
                <Form.Control placeholder="User Name" ref={this.username_input} />
              </Form.Group>
              <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" ref={this.password_input} />
              </Form.Group>
              <Button variant="primary" onClick={this.handle_submit}>
                Login
              </Button>
              <Form.Text className="text-muted">
                You can test with the <b>User Name: visitor, Password: 123</b>, and also try with empty and invalid Credentials.
              </Form.Text>
            </Form>
    }
}

const dispatch2props = dispatch => ({
    onLogin: (data, history) => {
        dispatch(login(data, history))
    }
})

const state2props = ({Auth}) => ({
    Auth
})

export default withRouter(connect(state2props, dispatch2props)(Login))
