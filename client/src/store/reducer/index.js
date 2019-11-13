import { combineReducers } from 'redux'
import { firebaseReducer } from 'react-redux-firebase'
import { firestoreReducer } from 'redux-firestore'
import password from './password'

const reducer = combineReducers({
    firebase :firebaseReducer,
    firestore : firestoreReducer,
    password
})

export default reducer

