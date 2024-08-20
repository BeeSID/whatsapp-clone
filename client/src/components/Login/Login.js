import React from 'react'
import {Button} from "@mui/material"
import {auth,provider} from "../../firebase"
import { signInWithPopup } from 'firebase/auth'
import "./Login.css";
import {useStateValue} from "../ContextApi/StateProvider"
import {actionTypes} from "../ContextApi/reducer"

const Login = () => {

    const [state,dispatch] = useStateValue();
console.log(state)

    const signIn = () => {
        signInWithPopup(auth, provider)
        .then((result) => {
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user,
            });
    })
    .catch((err) =>{
        alert(err.message);
    });
    };


  return (
    <div className='login'>
        <div className='login__container'>
            <img 
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL8YMB4nTsMm58HzJZvMgDx3mjQ4xQtAfT9g&s'
            alt='logo'
            />
            <div className='login__text'>
                <h1>Sign in to whatsapp</h1>
            </div>
            <Button onClick={signIn}>
                Sign in with Google
            </Button>
        </div>
    </div>
  )
}

export default Login