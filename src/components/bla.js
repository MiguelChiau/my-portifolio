import React from 'react'
import Logo from "../images/git.png"
import Nav from "./Navbar"
import "./Home.css"
import Typed from "react-typed"
import {Typography, Avatar, Grid, Box, Paper, ListItem} from "@material-ui/core"
import {makeStyles} from "@material-ui/core/styles"


const useStyles = makeStyles((theme) => ({
    homeGrid: {
        // width: "100%",
        margin: "0px"
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: "center",
        // color: theme.palette.text.secondary,
        // background: theme.palette.success.light,
        // backgroundColor: "#1e242a",
        height: "100vh",

    }
}))

export default function Home() {
    const classes = useStyles()
    
  return (

    <Grid container  className={classes.homeGrid}>
        <Grid item xs={12} md={12}>
                
 <div id="body" style={{margin: "0px",
  width: "50%", 
  height: "100vh"

  }}>

     <div id="main">
        <div id="box1"></div>
    
        <div id="box2">
            <div id="text" style={{width: "50%"}}>
                Hi, I'm Miguel Chiau 
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
        </Grid>
    </Grid>
    
    
  )
}
