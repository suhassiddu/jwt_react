import API from '../api'

const login = ({username, password}, history) => dispatch => {
    dispatch({
        type:'ISLOADING',
        isLoading: true
    })
    API.post('api/token/', {
        username,
        password
    })
    .then(res => {
        let Auth = {
            isAuthenticated: true,
            accessToken: res.data.access,
            refreshToken: res.data.refresh,
            statusCode: 200,
            errMsg: ''
        }
        console.log(Auth)
        localStorage.setItem('Auth', JSON.stringify(Auth))
        dispatch({
            type: 'AUTH',
            payload: Object.assign({}, Auth)
        })
        history.push('/')
        dispatch({
            type: 'ISLOADING',
            isLoading: false
        })
    })
    .catch(err => {
        let Auth = {
            isAuthenticated: false,
            accessToken: '',
            refreshToken: '',
            statusCode: err.response.status,
            errMsg: err.response.data.detail
        }
        localStorage.setItem('Auth', JSON.stringify(Auth))
        dispatch({
            type: 'AUTH',
            payload: Object.assign({}, Auth)
        })
        dispatch({
            type: 'ISLOADING',
            isLoading: false
        })
    })
}

export default login
