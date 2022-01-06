import React from 'react'
import "./side.css"
import {useEffect,useRef,useState} from "react"

export default function Side({addShare}) {

    const username = JSON.parse(localStorage.getItem('user'))[0].username
    const [texts,setTexts] = useState()
 

    const handleChange = (event) => {
        setTexts(event.target.value)
    }

    const handleClick = () => {
        addShare(texts)
        setTexts('')
    }

    return (
        <div className="sideContainer">
            <div className="sideTop">
                <div className="sideCover">
                    <img src="/assets/background/default.jpeg" alt="" className="backgroundImg" />
                    <img src="/assets/user/noImg.png" alt="" className="userImg" />
                </div>
                <div className="sideInfo">
                    <h4 className="userName">{username}</h4>
                </div>
            </div>
            <hr className="sidebarHr" />
            <div className="sideCenter">
                    <div className="sideWrapper">
                        <img src="/assets/user/noImg.png" className="shareImg" />
                        <input placeholder="Share your mind with your friends" onChange={handleChange} maxLength="100" className="shareInput" />
                    </div>
                    <button onClick={handleClick} className="shareButton">share</button>
            </div>
            <hr className="sidebarHr" />
            <div className="sideBottom">
                <h4 className="friendList">Firends List</h4>
                <div className="friendImgs">
                    <img src="/assets/user/friendImg.png" className="friendImg" />
                    <span className="status"></span>
                    <span className="friendName">Jin</span>
                </div>
            </div>
        </div>
    )
}
