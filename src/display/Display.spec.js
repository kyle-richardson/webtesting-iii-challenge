import React from "react";
import * as rtl from "@testing-library/react";
import Display from "./Display"

test('default state is open and unlocked, and green', ()=> {
    const wrapper = rtl.render(<Display locked={false} closed={false}/>)

    expect(wrapper.queryByText("Open")).toBeTruthy();
    expect(wrapper.queryByText("Closed")).toBeNull();

    expect(wrapper.getByText("Open").classList.contains('green-led')).toBe(true)
    expect(wrapper.getByText("Unlocked").classList.contains('green-led')).toBe(true)
    expect(wrapper.getByText("Open").classList.contains('red-led')).toBe(false)
    expect(wrapper.getByText("Unlocked").classList.contains('red-led')).toBe(false)
    
})

test('close gate changes color to red', ()=> {
    const wrapper = rtl.render(<Display locked={false} closed={true}/>)

    expect(wrapper.getByText("Closed").classList.contains('red-led')).toBe(true)
})

test('locked gate changes color to red', ()=> {
    const wrapper = rtl.render(<Display locked={true} closed={true}/>)

    expect(wrapper.getByText("Locked").classList.contains('red-led')).toBe(true)
})
