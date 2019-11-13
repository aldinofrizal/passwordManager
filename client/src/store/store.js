import { createStore , applyMiddleware, compose } from 'redux'
import ReduxThunk from 'redux-thunk'
import reducer from './reducer/index'

const store = createStore(
    reducer , 
    compose(
        applyMiddleware(ReduxThunk) , 
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
)

export default store


