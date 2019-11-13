import React from 'react';
import { render, fireEvent } from '@testing-library/react'
import { Provider } from 'react-redux'
import '@testing-library/jest-dom/extend-expect'
import { createStore, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'
import Notification from './Notification'


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
    const notification = render(
        <Provider store={store}>
            <Notification />
        </Provider>
    )

    expect(notification.queryByText(/TESTING NOTIF/)).toBeInTheDocument()
    expect(notification.queryByText(/Success/)).toBeInTheDocument()
    const anchor = document.querySelector('a')
    expect(anchor).toBeInTheDocument()  
})

test('renders without crashing', () => {
    const initState = {
        password: {
            status: false,
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
    const notification = render(
        <Provider store={store}>
            <Notification />
        </Provider>
    )

    expect(notification.queryByText(/TESTING NOTIF/)).toBeInTheDocument()
    expect(notification.queryByText(/Fail/)).toBeInTheDocument()
    const anchor = document.querySelector('a')
    expect(anchor).toBeInTheDocument()
})

