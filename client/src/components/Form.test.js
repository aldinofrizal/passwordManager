import React from 'react';
import { render, fireEvent } from '@testing-library/react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'
import '@testing-library/jest-dom/extend-expect'
import Form from './Form'

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

    const form = render(
        <Provider store={store}>
            <Form />
        </Provider>
    )
    
    const input = document.querySelectorAll('input')
    const button = document.querySelector('button')
    const formElement = document.querySelector('form')
    expect(input).toHaveLength(3)
    expect(button).toBeInTheDocument()
    expect(formElement).toBeInTheDocument()
    
});