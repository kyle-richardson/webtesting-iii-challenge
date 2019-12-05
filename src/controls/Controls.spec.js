import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import * as rtl from '@testing-library/react'
import { initialState, rootReducer } from '../reducers'
import Controls from "./Controls"

function renderWithRedux(
  ui,
  { initialState, store = createStore(rootReducer, initialState) } = {}) {
  return {
    ...rtl.render(<Provider store={store}>{ui}</Provider>),
    store,
  }
}

test('can render with redux with defaults', () => {
    const wrapper = renderWithRedux(<Controls />)
    
    expect(wrapper.queryByText("Lock Gate").disabled).toBe(true)
    expect(wrapper.queryByText("Close Gate").disabled).toBe(false)
})

test('can render with redux with custom initial state', () => {
  const wrapper = renderWithRedux(<Controls />, {
    initialState: { 
        closed: true,
        locked: true
     },
    })
    expect(wrapper.queryByText("Unlock Gate").disabled).toBe(false)
    expect(wrapper.queryByText("Open Gate").disabled).toBe(true)
})

test('test buttons to change text and disable properly', () => {
    const wrapper = renderWithRedux(<Controls />)
    
    const Close = wrapper.getByText("Close Gate")
    rtl.act(()=> {
        rtl.fireEvent.click(Close);
    })
    
    expect(wrapper.queryByText("Lock Gate").disabled).toBe(false)
    expect(wrapper.queryByText("Open Gate").disabled).toBe(false)

    const Lock = wrapper.getByText("Lock Gate")
    rtl.act(()=> {
        rtl.fireEvent.click(Lock);
    })

    expect(wrapper.queryByText("Unlock Gate").disabled).toBe(false)
    expect(wrapper.queryByText("Open Gate").disabled).toBe(true)
})

