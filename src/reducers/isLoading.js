function isLoading(state=false, action){
    switch(action.type){
        case 'ISLOADING':
            return action.isLoading
        default:
            return state
    }
}

export default isLoading
