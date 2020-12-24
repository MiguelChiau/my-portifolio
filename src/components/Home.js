import React from 'react'
import Nav from "./Navbar"
import "./Home.css"
import Typed from "react-typed"
import {Typography, Avatar, Grid, Box, Paper, ListItem} from "@material-ui/core"
import {makeStyles} from "@material-ui/core/styles"



const useStyles = makeStyles((theme) => ({
    homeGrid: {
        margin: "0px"
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: "center",
        color: theme.palette.text.secondary,
        background: theme.palette.success.light,
        position: "relative",
        left: "-100%",
        animation: "anim3 2s forwards 3s",
        animationDelay: "3s"
    },
    
    grid: {
        width: "100%",
        margin: "0px"
    },

    Box2: {
      width: "auto",
      height: "auto",
      fontFamily: "Arial, Helvetica, sans-serif",
      color: "white",
      fontSize: "3em",
      fontWeight: "500",
      position: "absolute",
      top: "250px",
      left: "100px",
      overflow: "hidden"  
    },

}))

export default function Home() {
    const classes = useStyles()
    
  return (

    <Grid container  className={classes.homeGrid}>
        <Grid item xs={12} md={12} >
            <Box  style={{margin: "0px", width: "50%", height: "100vh", background: "#1e242a"}} >
                <Box 
                style={{
                    width: "100%",
                    height: "100%",
                    position: "absolute",
                    overflow: "hidden"}} >

                     <Box id="box1" >
                     </Box>
    
                    <Grid container className={classes.grid}>
                         <Grid xs={6} md={6} className={classes.Box2}>
                              <Paper className={classes.paper} >Miguel Chiau</Paper>
                         </Grid>
                    </Grid>

                    <Nav/>

                </Box>
            </Box>
        </Grid>
    </Grid>
    
    
  )
}
