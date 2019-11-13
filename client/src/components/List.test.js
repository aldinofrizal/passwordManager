import React from 'react';
import { render, fireEvent } from '@testing-library/react'
import { Provider } from 'react-redux'
import '@testing-library/jest-dom/extend-expect'
import { createStore, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'
import List from './List'

test('renders without crashing', () => {    
    const initState = {
        password: {
            status: true,
            message: 'TESTING NOTIFICATION',
            type: 'ADD_DATA'
        }
    }

    const reducer = (state = initState, action) => {
        return {
            ...state
        }
    }

    const store = createStore(reducer, applyMiddleware(ReduxThunk))
    const dummy = {
        foo : 'bar'
    }
    const list = render(
        <Provider store={store}>
            <List record={dummy} field="foo" />
        </Provider>
    )
    const edit = list.getAllByRole('button')    
    expect(edit[0]).toBeInTheDocument()
    expect(edit[1]).toBeInTheDocument()
    fireEvent.click(edit[0])
    expect(edit[0]).not.toBeInTheDocument()
    expect(edit[1]).not.toBeInTheDocument()
    const textarea = document.querySelector('textarea')
    const icon = document.querySelector('i')
    expect(icon).toBeInTheDocument()
    expect(textarea).toBeInTheDocument()
});