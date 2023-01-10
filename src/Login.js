import { Button } from '@mui/material'
import { auth, provider } from './firebase'
import React from 'react'
import './Login.css'

function Login() {
    const signIn = () => {
        //do clever google login
        auth.signInWithPopup(provider)
        .catch(error => alert(error.message));
    }
  return (
    <div  className='login'>
        <div className="login__logo">
            <img src='https://i.kym-cdn.com/photos/images/original/001/243/213/52a.png'
            alt=''
            />
        </div>

        <Button onClick={signIn}>Sign In</Button>
    </div>
  )
}

export default Login