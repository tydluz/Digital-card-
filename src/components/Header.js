import React from "react"

export default function Header(){
    return(
          
         <header className="header-el">
                <img className="image" src="./images/emma.jpg" alt= "My picture"/>
                <h1>Oladeji Emmanuel</h1>
                <h6>Frontend Developer</h6>
                <p><a className="my-web" href="emmadev.io">Emmadev.io</a></p>
                <button className="email-btn" type="email"><img src="./images/Mail.png" alt="Mail"/>Email</button>
        </header>
