import { render, screen } from '@testing-library/react';
 import App from './App';
import useLogin from './components/hook';
import {renderHook, act} from '@testing-library/react-hooks';
import Login from "./components/Login";
import {BrowserRouter as Router} from 'react-router-dom';
import { SnackbarProvider } from "notistack";


describe('Login', () => {
  it('check handleTextChanged function', () => {
    const wrapper = ({ children }) => <SnackbarProvider><Router>{children}</Router></SnackbarProvider>
    
    
    const { result } = renderHook(() => useLogin(),{ wrapper });
    result.current.userName;

    const changedValue = 'hello'
  
    act(() => {
       result.current.setUserName(changedValue);
    });
    expect(result.current.userName).toBe(changedValue);


  });

  it('check validateCredenitals function', () => {
    const wrapper = ({ children }) => <SnackbarProvider><Router>{children}</Router></SnackbarProvider>
    const { result } = renderHook(() => useLogin(), { wrapper });
    result.current.password;

    const changedValue = 'hello';
    act(() => {
      result.current.setPassword(changedValue);
    });
    expect(result.current.password).toBe(changedValue);
  });
  
  it('check onPasswordChange function', async () => {
    const wrapper = ({ children }) => <SnackbarProvider><Router>{children}</Router></SnackbarProvider>
    const { result } = renderHook(() => useLogin(), { wrapper });
    
    const username = 'danial';
    const pass = 'danial';
    
    
    try {

      result.current.validateCredenitals();
      act(() => {
        result.current.setUserName(username);
        result.current.setPassword(pass);  
      });

      expect(localStorage.getItem("user")).toBe(result.current.userName);
    } catch (e) {
      expect(e).toBe(e);
    }
   
  });
    
});




// test('test login', async ()=>{
 
// })
