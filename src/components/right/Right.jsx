import React from 'react'
import { MdDeleteForever } from 'react-icons/md';
import "./right.css"


export default function Right({id,text,date,clearShare}) {

    console.log(text)

    return (
        <div className="rightContainer">
            <div className="userShares">
                <img src="/assets/user/noImg.png" className="shareImg" />
                <span>{text}</span>
            </div>
            <div className="userSharesBottom">
                <span className="date">{date}</span>
                <MdDeleteForever
                        className="deleteShare"
                        onClick={()=>clearShare(id)}
                />                    
            </div>
        </div>
    )
}
