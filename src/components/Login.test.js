import { fireEvent, render,screen } from "@testing-library/react"
import Login from "./login/Login"


test("username input should be rendered", ()=>{
    render(<Login/>);
    const userInput = screen.getByPlaceholderText(/username/i);//expresion regular
    expect(userInput).toBeInTheDocument();
})

test("password input should be rendered", ()=>{
    render(<Login/>);
    const passwordInput = screen.getByPlaceholderText(/password/i);
    expect(passwordInput).toBeInTheDocument();
})

test("button should be rendered", ()=>{
    render(<Login/>);
    const button = screen.getByRole("button"); 
    expect(button).toBeInTheDocument();
})

test("username input should be empty", ()=>{
    render(<Login/>);
    const userInput = screen.getByPlaceholderText(/username/i);
    expect(userInput.value).toBe("");
})
test("password input should be empty", ()=>{
    render(<Login/>);
    const passwordInput = screen.getByPlaceholderText(/username/i); 
    expect(passwordInput.value).toBe("");
})

test("button should be disabled", ()=>{
    render(<Login/>);
    const button = screen.getByRole("button");
    expect(button).toBeDisabled();
})

test("error msg should not be visible", ()=>{
    render(<Login/>);
    const error = screen.getByTestId("error");
    expect(error).not.toBeVisible();
})

test("username input should change", ()=>{
    render(<Login/>);
    const userInput = screen.getByPlaceholderText(/username/i);
    const testValue = "test"//valor que deberia venir de alguna api

    fireEvent.change(userInput, {target:{value: testValue}});//evento on change

    expect(userInput.value).toBe(testValue);
})
test("password input should change", ()=>{
    render(<Login/>);
    const passwordInput = screen.getByPlaceholderText(/username/i); 
    const testValue = "test";
    fireEvent.change(passwordInput, {target:{value: testValue}});

    expect(passwordInput.value).toBe(testValue);
})

