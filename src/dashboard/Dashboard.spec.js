import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import * as rtl from '@testing-library/react'
import { initialState, rootReducer } from '../reducers'
import Dashboard from "./Dashboard"
import '@testing-library/jest-dom'

function renderWithRedux(
  ui,
  { initialState, store = createStore(rootReducer, initialState) } = {}) {
  return {
    ...rtl.render(<Provider store={store}>{ui}</Provider>),
    store,
  }
}

test('default state is open and unlocked', ()=> {
    const wrapper = renderWithRedux(<Dashboard/>)

    expect(wrapper.queryByText("Open")).toBeTruthy();
    expect(wrapper.queryByText("Closed")).toBeNull();
    expect(wrapper.queryByText("Lock Gate").disabled).toBe(true)
    expect(wrapper.queryByText("Close Gate")).toBeEnabled
})

test('close button renders closed text', () => {
    const wrapper = renderWithRedux(<Dashboard/>)

    const Close= wrapper.getByText("Close Gate")

    rtl.act(()=> {
        rtl.fireEvent.click(Close);
    })

    expect(wrapper.queryByText("Open")).toBeNull();
    expect(wrapper.queryByText("Closed")).toBeTruthy();
    expect(wrapper.queryByText("Lock Gate").disabled).toBe(false)
    expect(wrapper.queryByText("Open Gate").disabled).toBe(false)
})

test('open button renders open text', () => {
    const wrapper = renderWithRedux(<Dashboard/>)
    
    const Close= wrapper.getByText("Close Gate")
    rtl.act(()=> {
        rtl.fireEvent.click(Close);
    })

    const Open= wrapper.getByText("Open Gate")
    rtl.act(()=> {
        rtl.fireEvent.click(Open);
    })

    expect(wrapper.queryByText("Open")).toBeTruthy();
    expect(wrapper.queryByText("Closed")).toBeNull();
    expect(wrapper.queryByText("Lock Gate").disabled).toBe(true)
    expect(wrapper.queryByText("Close Gate").disabled).toBe(false)
})



test('lock button renders locked text', () => {
    const wrapper = renderWithRedux(<Dashboard/>)

  
    const Lock= wrapper.getByText("Lock Gate")
    const Close= wrapper.getByText("Close Gate")

    rtl.act(()=> {
        rtl.fireEvent.click(Close);
    })

    rtl.act(()=> {
        rtl.fireEvent.click(Lock);
    })

    expect(wrapper.queryByText("Open")).toBeNull();
    expect(wrapper.queryByText("Closed")).toBeTruthy();
    expect(wrapper.queryByText("Locked")).toBeTruthy();
    expect(wrapper.queryByText("Unlock Gate").disabled).toBe(false)
    expect(wrapper.queryByText("Open Gate").disabled).toBe(true)
})

test('unlock button renders unlocked text', () => {
    const wrapper = renderWithRedux(<Dashboard/>)
    
    const Close= wrapper.getByText("Close Gate")
    const Lock = wrapper.getByText("Lock Gate")

    rtl.act(()=> {
        rtl.fireEvent.click(Close);
    })
    rtl.act(()=> {
        rtl.fireEvent.click(Lock);
    })
    const Unlock= wrapper.getByText("Unlock Gate")
    rtl.act(()=> {
        rtl.fireEvent.click(Unlock);
    })

    expect(wrapper.queryByText("Open")).toBeNull();
    expect(wrapper.queryByText("Closed")).toBeTruthy();
    expect(wrapper.queryByText("Unlocked")).toBeTruthy();
    expect(wrapper.queryByText("Lock Gate").disabled).toBe(false)
    expect(wrapper.queryByText("Open Gate").disabled).toBe(false)
})

