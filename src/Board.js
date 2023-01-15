import React, { useEffect, useState } from "react"
import Card from './Card'
import uniqid from 'uniqid'
let GUESSED = NaN
export default function Board(){
    const [elements, setElements] = useState([
        <Card image={require("./images/sauron.jpg")} parentCallback={callBackFunction} key ={uniqid()}></Card>,
        <Card image={require("./images/samwise.jpg")} parentCallback={callBackFunction} key ={uniqid()}></Card>,
        <Card image={require("./images/frodo.jpg")} parentCallback={callBackFunction} key ={uniqid()}></Card>,
        <Card image={require("./images/aragorn.jpg")} parentCallback={callBackFunction} key ={uniqid()}></Card>,
        <Card image={require("./images/bilbo.jpg")} parentCallback={callBackFunction} key ={uniqid()}></Card>,
        <Card image={require("./images/boromir.jpg")} parentCallback={callBackFunction} key ={uniqid()}></Card>,
        <Card image={require("./images/gandalf.jpg")} parentCallback={callBackFunction} key ={uniqid()}></Card>,
        <Card image={require("./images/gimli.jpg")} parentCallback={callBackFunction} key ={uniqid()}></Card>,
        <Card image={require("./images/gollum.jpg")} parentCallback={callBackFunction} key ={uniqid()}></Card>,
        <Card image={require("./images/legolas.jpg")} parentCallback={callBackFunction} key ={uniqid()}></Card>,
        <Card image={require("./images/merry.jpg")} parentCallback={callBackFunction} key ={uniqid()}></Card>,
        <Card image={require("./images/Galadriel.jpg")} parentCallback={callBackFunction} key ={uniqid()}></Card>,


    ])
    const [guessed, setGuessed] = useState([])
    const [bestScore, setBestScore] = useState(0)
    const [numberCorrect, setNumberCorrect] = useState(0)
    function callBackFunction(id){
        console.log(bestScore)
        let shuffled = elements
            .map(value=> ({value, sort:Math.random()}))
            .sort((a,b) => a.sort - b.sort)
            .map(({value}) => value)
        setElements(shuffled)



        if (guessed.includes(id) === false){
            setGuessed(guessed.push(id))
            console.log(guessed)
            setNumberCorrect(guessed.length)

        }else if(guessed.includes(id) === true){
            setGuessed(guessed.splice(0, guessed.length))
            setNumberCorrect(0)



        }
    }
    
    useEffect(() => {
    if (numberCorrect > bestScore){
        let newScore = numberCorrect
        setBestScore(newScore)
    }
    }, [numberCorrect])

    useEffect(() => {
        let header = document.getElementById('numbercorrect')
        header.classList.add('fade')
        setTimeout(function(){
            header.classList.remove('fade')
        },500)
    }, [numberCorrect])

    useEffect(() => {
        let header = document.getElementById('bestscore')
        header.classList.add('fade')
        setTimeout(function(){
            header.classList.remove('fade')
        },500)
    }, [bestScore])


    return(
        <div>
            <div id="header">
                <div id="title">
                    <h2>Lord of the Rings Memory Game</h2>
                    <p>Get points by clicking on an image, but don't click on any more than once!</p>
                </div>
                <div id='numbercorrect'>
                    Number in a row correct: {numberCorrect}
                </div>
                <div id='bestscore'>
                    Best Score: {bestScore}
                </div>
            </div>
            <div id={'gameboard'}>
                {elements}
                
            </div>
        </div>
    )
}