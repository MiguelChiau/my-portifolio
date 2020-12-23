import React from 'react'
import Logo from "../images/git.png"
import Nav from "./Navbar"
import "./Home.css"
import Typed from "react-typed"

export default function Home() {
  return (
     <div id="body" style={{margin: "0px",
  backgroundColor: "#1e242a", 
  // backgroundColor: "red", 

  // width: "100%", 
  width: "50%", 

  // height: "100%"
  height: "100vh"

  }}>

     <div id="main">
        <div id="box1"></div>
    
        <div id="box2">
            <div id="text">
                {/* Miguel Chiau */}
                <Typed strings={["Hi, I'm Miguel Chiau"]} typeSpeed={40}/>
                
            </div>
        </div>


        <div id="box3">
            <div id="container">

                <div id="logo">
                    <img src={Logo} />
                    <Nav/>
                </div>
        
                <div id="menu">
                    <ul >
                        <li>Home</li>
                        <li>Services</li>
                        <li>About</li>
                        <li>Contact</li>
                        <li>Help</li>
                    </ul>
                </div>
        
        
        
            </div>
        
        </div>
    </div>
    </div>

    
  )
}
