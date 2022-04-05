import React from 'react';
import './Login.css';

const Login = () => {
    return(
        <div className='login-page'>
            <h2 className='login-page__title'>
                Iniciar Sessão
            </h2>
            <input className='login-page__user-info' type="email" placeholder='Escreva seu email' />
            <input className='login-page__user-info' type="password" placeholder='Escreva sua senha' />
            <button className='login-page__btn'>
                Entrar
            </button>
        </div>
    )
}

export default Login;