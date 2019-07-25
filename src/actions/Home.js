import API from '../api'

const Home = () => dispatch => {
    dispatch({
        type:'ISLOADING',
        isLoading: true
    })
    API.get('public/')
    .then(res => {
        dispatch({
            type: 'HOME',
            payload: Object.assign({}, res.data)
        })
        dispatch({
            type: 'ISLOADING',
            isLoading: false
        })
    })
    .catch(err => {
        console.log(err)
        dispatch({
            type: 'ISLOADING',
            isLoading: false
        })
    })
}

export default Home
