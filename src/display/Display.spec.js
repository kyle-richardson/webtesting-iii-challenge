import React from "react";
import * as rtl from "@testing-library/react";
import Display from "./Display"

test('default state is open and unlocked', ()=> {
    const wrapper = rtl.render(<Display locked={false} closed={false}/>)

    expect(wrapper.queryByText("Open")).toBeTruthy();
    expect(wrapper.queryByText("Closed")).toBeNull();
    
})