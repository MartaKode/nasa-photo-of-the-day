import React, { useState, useEffect } from 'react'
import Header from "./Header.js";

export default function Post(props) {
    
// console.log(props)

    return (

        <div className="post">
            <Header title={props.title} date={props.date} />
            <img src={props.url} className="nasaImg" alt={props.title} />


        </div>

    )


}