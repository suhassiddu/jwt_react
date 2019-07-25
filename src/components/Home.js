import React, {Component} from 'react'
import {connect} from 'react-redux'

import {Home as HomeAction} from '../actions'

class Home extends Component{
    constructor(props){
        super(props)
    }
    componentDidMount(){
        this.props.onHome()
    }
    render(){
        return <div>
            {this.props.Home}
        </div>
    }
}

const state2props = state => ({
    Home: state.Home.msg
})

const dispatch2props = dispatch => ({
    onHome: () => {
        dispatch(HomeAction())
    }
})

export default connect(state2props, dispatch2props)(Home)
