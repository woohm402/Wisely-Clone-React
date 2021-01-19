import React from 'react';
import './LoginView.css';

const Login = props => {
    return(
        <div className='loginWrapper'>
            <img className='bgImg' src={require('../../assets/Login/signInBg.png')}></img>
        </div>
    )
}

export default Login;