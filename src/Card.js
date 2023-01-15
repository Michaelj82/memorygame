import React, { useEffect, useState } from "react"
import Board from './Board'
import uniqid from 'uniqid'
import './style.css'
export default function Card(props){
    const [id] = useState(uniqid())
    const [image, setImage] = useState(props.image)
    function sendCue(){
        props.parentCallback(id)

    }


    return(
        <div id={id} onClick={sendCue} className={'card'}>
            <img src={image}></img>
        </div>
    )
}