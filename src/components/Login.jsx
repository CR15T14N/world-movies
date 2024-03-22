import React from 'react';
import "../styles/Login.css";
import { useContext } from 'react';
import { DataContext } from '../context/DataContext';

function Login() {
    const { isLoginFormOpen, closeLoginForm } = useContext(DataContext);

    if (!isLoginFormOpen) {
        return null; 
    }


    return (
        <>
            <div className="loginBox">
                <form className="formLogin">
                <button className='closeLForm' id="closeLForm" onClick={closeLoginForm}>X</button>
                    <h1 className="titleLogin">Log in</h1>
                    <label className="labelLogin" htmlFor="username">Username</label>
                    <input className="inputLogin" type="text" id="username" />
                    <label className="labelLogin" htmlFor="password">Password</label>
                    <input className="inputLogin" type="password" id="password" />
                    <button className="btnL">Ingresar</button>
                </form>
            </div>
        </>
    );
}

export default Login;
