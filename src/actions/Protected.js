import API from '../api'
import logout from './logout'

const Protected = () => (dispatch, getState) => {
    dispatch({
        type:'ISLOADING',
        isLoading: true
    })
    let config = {
        headers: {
            Authorization: `Bearer ${getState().Auth.accessToken}`
        }
    }
    API.get('protected/', config)
    .then(res => {
        dispatch({
            type: 'PROTECTED',
            payload: Object.assign({}, res.data)
        })
        dispatch({
            type: 'ISLOADING',
            isLoading: false
        })
    })
    .catch(err => {
        console.log(err)
        dispatch(logout())
        dispatch({
            type: 'ISLOADING',
            isLoading: false
        })
    })
}

export default Protected
