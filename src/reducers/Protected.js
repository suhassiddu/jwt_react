function Protected(state={msg:''}, action){
    switch(action.type){
        case 'PROTECTED':
            return action.payload
        default:
            return state
    }
}

export default Protected
