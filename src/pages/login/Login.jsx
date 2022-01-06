import React from 'react'
import "./login.css"
import {useEffect,useRef,useState} from "react"
import {useNavigate } from "react-router-dom"

export default function Login() {

    const username = useRef()
    const userPassword = useRef()
    const navigate = useNavigate()
    const [user,setUser] = useState()

    useEffect(() => {
        const savedUsers = JSON.parse(
            localStorage.getItem('user')
        );
        setUser(savedUsers)
        console.log(user)
    },[])

    const handleClick = () => {
        if(username.current.value === user[0].username && userPassword.current.value === user[0].password) {
            navigate('/profile')
        } else {
            userPassword.current.setCustomValidity("user id or password invalid")
        }
    }

    const handleRegisterClick = () => {
        navigate('/register')
    }

    return (
        <div className="loginContainer">
            <div className="loginWrapper">
                <div className="leftElement">
                    <h1>Social App</h1>
                    <span className="desc">Chat with friends, family and acquaintances around the world on Social App</span>
                </div>
                <div className="rightElement">
                    <form className="login">
                        <input placeholder='User Name' required ref={username} className="loginInput" />
                        <input placeholder='New password' required ref={userPassword} type='password' minLength='5' className="loginInput" />
                        <button className="loginButton" onClick={handleClick} >login</button>
                        <hr className="line"/>
                        <button className="registerButton" onClick={handleRegisterClick}>Create a new account</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
