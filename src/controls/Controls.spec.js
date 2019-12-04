import React from "react";
import * as rtl from "@testing-library/react";
import Controls from "./Controls"

test('default has disabled "Lock Gate" and enabled "Close Gate" button', () => {
    const wrapper = rtl.render(<Controls locked={false} closed={false} toggleLocked={()=>{}} toggleClosed={()=>{}}/>)

    expect(wrapper.queryByText("Lock Gate").disabled).toBe(true)
    expect(wrapper.queryByText("Close Gate").disabled).toBe(false)
})