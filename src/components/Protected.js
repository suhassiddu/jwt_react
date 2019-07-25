import React, {Component} from 'react'
import {connect} from 'react-redux'

import {Protected as ProtectedAction} from '../actions'

class Protected extends Component{
    constructor(props){
        super(props)
    }
    componentDidMount(){
        this.props.onProtected()
    }
    render(){
        return <div>
            {this.props.Protected}
        </div>
    }
}

const state2props = state => ({
    Protected: state.Protected.msg
})

const dispatch2props = dispatch => ({
    onProtected: () => {
        dispatch(ProtectedAction())
    }
})

export default connect(state2props, dispatch2props)(Protected)
