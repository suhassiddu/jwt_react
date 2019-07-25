import {combineReducers} from 'redux'

import Auth from './Auth'
import isLoading from './isLoading'
import Home from './Home'
import Protected from './Protected'

export default combineReducers({
    Auth,
    isLoading,
    Home,
    Protected
})
