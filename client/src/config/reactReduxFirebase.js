import firebase from './firebase'
import store from '../store/store'
import { createFirestoreInstance } from 'redux-firestore'

export const rrfConfig = {
    userProfile : 'user',
    useFiresoterForProfile : true,
}

export const rrfProps = {
    firebase,
    config: rrfConfig,
    dispatch: store.dispatch,
    createFirestoreInstance
}