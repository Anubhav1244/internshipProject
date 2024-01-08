import {combineReducers} from "@reduxjs/toolkit"

import authReducer from '../services/slices/authSlice'
import profileReducer from '../services/slices/profileSlice'


const rootReducer = combineReducers({
    auth: authReducer,
    profile: profileReducer,
})

export default rootReducer;