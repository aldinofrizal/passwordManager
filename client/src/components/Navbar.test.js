import React from 'react';
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { BrowserRouter as Router } from 'react-router-dom'
import Navbar from './Navbar'

test('renders without crashing', () => {
    const nav = render( 
        <Router>
            <Navbar />
        </Router>
        )

    nav.debug()

    const button = document.querySelector('button')
    expect(button).toBeInTheDocument()
    expect(button).toHaveTextContent('React Password')
    
    fireEvent.click(button)

    const anchor = document.querySelectorAll('a')
    expect(anchor[0]).toBeInTheDocument()
    expect(anchor[1]).toBeInTheDocument()
    expect(anchor).toHaveLength(2)
    expect(anchor[0]).toHaveTextContent('Password')
    expect(anchor[1]).toHaveTextContent('Password')

});