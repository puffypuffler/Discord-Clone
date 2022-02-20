import React from 'react'
import "./Login.css";
import { Button } from "@material-ui/core"; 
import { auth, provider } from './firebase';

function Login() {
    const signIn = () => {
        // Do google login.
        auth.signInWithPopup(provider).catch(error => alert(error.message));
    };

  return (
    <div className="login">
        <div className="login_logo">
            <img src="https://logos-download.com/wp-content/uploads/2021/01/Discord_Logo-1-700x202.png" alt="" />
        </div>

        <Button onClick={signIn}>Sign In</Button>
    </div>
  )
}

export default Login