const logout = () => dispatch => {
    localStorage.removeItem('Auth')
    dispatch({
        type: 'AUTH'
    })
}

export default logout
