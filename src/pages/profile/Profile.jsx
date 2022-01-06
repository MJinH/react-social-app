import React from 'react'
import Side from '../../components/side/Side'
import {useState,useEffect} from "react"
import Right from '../../components/right/Right'
import { nanoid } from 'nanoid';
import "./profile.css"

export default function Profile() {

    const [shares,setShares] = useState([])

    useEffect(()=> {
        const savedShares = JSON.parse(
            sessionStorage.getItem('share')
        )
        setShares(savedShares)
    },[])    

    useEffect(()=> {
        sessionStorage.setItem('share',JSON.stringify(shares))
    },[shares])


    const addShare = (text) => {
        const date = new Date();
        const newShare =  {
            id: nanoid(),
            text: text,
            date: date.toLocaleDateString()
        }

        const newShares = [...shares,newShare]
        setShares(newShares)
    }

    const clearShare = (id) => {
        const newShare = shares.filter((share) => share.id !== id)
        setShares(newShare)
    }


    return (
        <div className="profileContainer">
            <div className="profileLeft">
                <Side 
                    addShare = {addShare}
                />
            </div>
            <div className="profileRight">
                {shares.map((share)=> (
                    <Right
                        id={share.id}
                        text={share.text}
                        date={share.date}
                        clearShare={clearShare}
                    />
                ))}
            </div>
        </div>
    )
}
