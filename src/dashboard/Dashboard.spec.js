// Test away

import React from "react";
import * as rtl from "@testing-library/react";
import Dashboard from "./Dashboard"

test ('open button renders open text', () => {
    const wrapper = rtl.render(<Dashboard/>)

  
    const Open= wrapper.getByText(/open/i)

    rtl.act(()=> {
        rtl.fireEvent.click(Open);
    })

    expect(wrapper.queryByText("Open")).toBeTruthy();
    expect(wrapper.queryByText("Closed")).toBeNull();
    expect(wrapper.queryByText("Lock Gate").disabled).toBe(true)
    expect(wrapper.queryByText("Close Gate").disabled).toBe(false)
})

test ('close button renders closed text', () => {
    const wrapper = rtl.render(<Dashboard/>)

  
    const Close= wrapper.getByText(/close/i)

    rtl.act(()=> {
        rtl.fireEvent.click(Close);
    })

    expect(wrapper.queryByText("Open")).toBeNull();
    expect(wrapper.queryByText("Closed")).toBeTruthy();
})

