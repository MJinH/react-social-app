import React from 'react'
import "./register.css"
import {useRef,useState,useEffect} from "react"
import {useNavigate } from "react-router-dom"


export default function Register() {

    const username = useRef()
    const password = useRef()
    const confirmPassword = useRef()
    const navigate = useNavigate()

    const [user,setUser] = useState([])


    const handleSaveClick = async () => {
        if(confirmPassword.current.value !== password.current.value) {
            confirmPassword.current.setCustomValidity("Password does not match")
        }
        else {
            const newUser = {
                username:username.current.value,
                password:password.current.value,
                confirmPassword:confirmPassword.current.value
            }
            const newUsers = [...user,newUser]
            await setUser(newUsers)

            try {
                navigate("/")
            } catch (err) {
                console.log(err)
            }
            
        }
    }


    useEffect(() => {
        localStorage.setItem(
            'user',
            JSON.stringify(user)
        );
    },[user])

    

    return (
        <div className="registerContainer">
            <div className="registerWrapper">
                <div className="leftElement">
                    <h1>Social App</h1>
                    <span>Chat with friends, family and acquaintances around the world on Social App</span>
                </div>
                <div className="rightElement">
                    <form className="register">
                        <input placeholder='User Name' required ref={username} className="registerInput" />
                        <input placeholder='New password' required ref={password} type='password' minLength='5' className="registerInput" />
                        <input placeholder='Confirm password' required ref={confirmPassword} type='password' minLength='5' className="registerInput" />
                        <button className="registerButton" onClick={handleSaveClick}>Create a new account</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
