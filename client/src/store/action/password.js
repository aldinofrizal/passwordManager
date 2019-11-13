import {
    EMPTY_DATA,
    ADD_DATA,
    DELETE_DATA,
    UPDATE_DATA
} from '../actionTypes'

import { auth , provider } from '../../config/firebaseAuth'
import ref from '../../config/firebaseFirestore'

export const googleAuth = () => {
    auth
        .signInWithPopup(provider)
        .then((result) => {
            console.log(result)
        })
        .catch(function (err) {
            console.log(err);
        });
}


export const emptyState = () => {
    return dispatch => {
        dispatch({
            type: EMPTY_DATA
        })
    }
}

export const addData = (payload) => {
    return dispatch => {
        ref.add({
            ...payload,
            createdAt: new Date(),
            updatedAt: new Date()
        })
            .then(ref => {
                dispatch({
                    type: ADD_DATA,
                    payload: {
                        status: true,
                        type: ADD_DATA,
                        message: 'successfully added password data to database'
                    }
                })
            })
            .catch(err => {
                dispatch({
                    type: ADD_DATA,
                    payload: {
                        status: false,
                        type: ADD_DATA,
                        message: 'fail to add new collection to database'
                    }
                })
            })
    }
}

export const deleteData = ({ id }) => {
    return dispatch => {
        ref.doc(id).delete()
            .then(ref => {
                dispatch({
                    type: DELETE_DATA,
                    payload: {
                        status: true,
                        type: DELETE_DATA,
                        message: 'successfully deleted data from database!'
                    }
                })
            })
            .catch(err => {
                dispatch({
                    type: DELETE_DATA,
                    payload: {
                        status: false,
                        type: DELETE_DATA,
                        message: 'fail to delete data from database!'
                    }
                })
            })
    }
}

export const updateData = ({ value, field, id }) => {
    return dispatch => {
        let update = {}
        switch (field) {
            case 'url':
                update = { url: value, updatedAt: new Date() }
                break;
            case 'password':
                update = { password: value, updatedAt: new Date() }
                break;
            case 'username':
                update = { username: value, updatedAt: new Date() }
                break;
            default:
                break;
        }
        ref.doc(id).update(update)
            .then(ref => {
                dispatch({
                    type: UPDATE_DATA,
                    payload: {
                        status: true,
                        type: UPDATE_DATA,
                        message: 'successfully update data from database!'
                    }
                })
            })
            .catch(err => {
                dispatch({
                    type: UPDATE_DATA,
                    payload: {
                        status: false,
                        type: UPDATE_DATA,
                        message: 'fail to update collection from database'
                    }
                })
            })
    }
}
