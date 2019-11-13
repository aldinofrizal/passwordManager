import React from 'react';
import { render, fireEvent } from '@testing-library/react'
import { Provider } from 'react-redux'
import '@testing-library/jest-dom/extend-expect'
import { createStore, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'
import DeleteDoc from './DeleteDoc'


test('renders without crashing', () => {
    const initState = {
        dummy : ''
    }

    const reducer = (state = initState, action) => {
        return {
            ...state
        }
    }

    const store = createStore(reducer, applyMiddleware(ReduxThunk))

    const deleteDoc = render(
        <Provider store={store}>
            <DeleteDoc id={'dummyId'} />
        </Provider>
    )

    const button = document.querySelector('button')
    expect(button).toBeInTheDocument()
    expect(button).toHaveTextContent(/Delete/)
    fireEvent.click(button)
    let confirmButton = document.querySelectorAll('button')
    expect(confirmButton).toHaveLength(3)
    expect(confirmButton[1]).toHaveTextContent('No')
    expect(confirmButton[2]).toHaveTextContent('Yes')
    fireEvent.click(confirmButton[2])
});