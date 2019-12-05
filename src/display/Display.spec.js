import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import * as rtl from '@testing-library/react'
import { initialState, rootReducer } from '../reducers'
import Display from "./Display"

function renderWithRedux(
  ui,
  { initialState, store = createStore(rootReducer, initialState) } = {}) {
  return {
    ...rtl.render(<Provider store={store}>{ui}</Provider>),
    store,
  }
}

test('default state is open and unlocked, and green', ()=> {
    const wrapper = renderWithRedux(<Display />)

    expect(wrapper.queryByText("Open")).toBeTruthy();
    expect(wrapper.queryByText("Closed")).toBeNull();

    expect(wrapper.getByText("Open").classList.contains('green-led')).toBe(true)
    expect(wrapper.getByText("Unlocked").classList.contains('green-led')).toBe(true)
    expect(wrapper.getByText("Open").classList.contains('red-led')).toBe(false)
    expect(wrapper.getByText("Unlocked").classList.contains('red-led')).toBe(false)
    
})

test('close gate changes color to red', ()=> {
    const wrapper = renderWithRedux(<Display />, {
        initialState: { 
            closed: true,
            locked: false
         },
        })

    expect(wrapper.getByText("Closed").classList.contains('red-led')).toBe(true)
})

test('locked gate changes color to red', ()=> {
    const wrapper = renderWithRedux(<Display />, {
        initialState: { 
            closed: true,
            locked: true
         },
        })

    expect(wrapper.getByText("Locked").classList.contains('red-led')).toBe(true)
})



