import React, { useState, useEffect } from 'react'
import Header from "./Header.js";
import Explanation from "./Explanation.js";
import styled from 'styled-components'
import {makeStyles} from './App.js'
import stars from './stars.jpeg'

const Button = styled.button`
padding: 0% 4;
color: palegoldenrod;
border: 5px red outset;
background-color: black;
cursor: pointer;
`


export default function Post(props) {
    
// console.log(props)

const rotate = event => {
    const img = document.querySelector('img');
    if(img.style.transform !=='rotateY(180deg)'){
        document.querySelector('img').style.transform='rotateY(180deg)'
    }else{
        img.style.transform='initial'
    }

}

const enlargeImg = event => {
    const img = document.querySelector('img'); 
        img.style.transition= '1s';
        img.style.transform = 'scale(2)'
}

const smallerImg = event => {
    const img = document.querySelector('img'); 
        img.style.transition= '1s';
        img.style.transform = 'scale(.2)'
}

const resize = event => {
    const img = document.querySelector('img'); 
    if(img.style.transform !=='scale(1)'){
        img.style.transition= '1s'
        img.style.transform = 'scale(1)'
    }else{
        img.style.transform = 'scale(.7)'
    }
}

const reset = event => {
    const img = document.querySelector('img'); 
    img.style.transform = 'scale(1)'
    img.style.transform='initial'
}

    return (

        <div className="post">
            {/* <Header title={props.title} date={props.date} /> */}
            <div className='title' style={makeStyles().whiteText}>{props.title}</div>
            <div className='date' style={{color:'white', backgroundImage: `url(${stars})`}}>{props.date}</div>
            <img src={props.url} className="nasaImg" alt={props.title} onMouseOver={resize}/>
            <Button onClick={rotate}> Rotate </Button>
            <Button onClick={enlargeImg} > + </Button>
            <Button onClick={smallerImg} > - </Button>
            <Button onClick={reset} > reset </Button>

            <div style={{color:'white'}}>{props.explanation}</div>
            {/* <Explanation explanation={props.explanation}/> */}

        </div>

    )


}

// export default Post