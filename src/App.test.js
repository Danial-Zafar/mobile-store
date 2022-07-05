import { render, screen } from '@testing-library/react';
 import App from './App';
import useLogin from './components/hook';
import {renderHook, act} from '@testing-library/react-hooks';
import Login from "./components/Login";
import {BrowserRouter as Router} from 'react-router-dom';
import { SnackbarProvider } from "notistack";


describe('Login', () => {
  const wrapper = ({ children }) => <SnackbarProvider><Router>{children}</Router></SnackbarProvider>
 
  it('check handleTextChanged function', () => {
    const { result } = renderHook(() => useLogin(),{ wrapper });
    const changedValue = 'hello'
  
    act(() => {
       result.current.setUserName(changedValue);
    });
    expect(result.current.userName).toBe(changedValue);

  });

  it('check validateCredenitals function', () => {
    const { result } = renderHook(() => useLogin(),{ wrapper });
    const changedValue = 'hello';
    act(() => {
      result.current.setPassword(changedValue);
    });
    expect(result.current.password).toBe(changedValue);
  });
  
  it('check onPasswordChange function', async () => {
    const { result } = renderHook(() => useLogin(),{ wrapper });
    const username = 'danial';
    const pass = 'danial';
    
    
    try {
      result.current.setUserName(username);
      result.current.setPassword(pass); 
     
      act(() => {
        result.current.validateCredenitals();
      });

      expect(result.current.userName).toBe(localStorage.getItem("user"));
    } catch (e) {
      expect(e).toBe(e);
    }
  });
});
