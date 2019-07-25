import React from 'react'
import {connect} from 'react-redux'
import {ProgressBar} from 'react-bootstrap'

const AppProgressBar = props => {
    if(props.isLoading){
        return <ProgressBar animated now={100} />
    } else {
        return <div/>
    }
}

const state2props = ({isLoading}) => ({
    isLoading
})

export default connect(state2props)(AppProgressBar)
