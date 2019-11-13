import {
    EMPTY_DATA,
    ADD_DATA,
    DELETE_DATA,
    UPDATE_DATA
} from '../actionTypes'


const initState = {
    data : [],
    status : false,
    message : '',
    type : ''
}

const reducer = (state = initState, action) => {
    switch (action.type) {
        case ADD_DATA:
            return { 
                ...state,
                status : action.payload.status,
                message : action.payload.message,
                type : action.payload.type
            }
        case DELETE_DATA:
            return {
                ...state,
                status : action.payload.status,
                message : action.payload.message,
                type : action.payload.type
            }
        case EMPTY_DATA:
            return {
                ...state,
                status : false,
                message : '',
                type : ''
            }
        case UPDATE_DATA:
            return {
                ...state,
                status : action.payload.status,
                message : action.payload.message,
                type : action.payload.type
            }
        default:
            return state
    }
}

export default reducer