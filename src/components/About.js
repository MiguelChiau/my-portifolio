import React from 'react'
import {Typography, Avatar, Grid, Box, Paper} from "@material-ui/core"
import avatar from "../images/prof.jpg"
import img1 from "../images/html5.png"
import img2 from "../images/css.png"
import img3 from "../images/javascript.png"
import img4 from "../images/node-js.png"
import img5 from "../images/react (3).png"
import img6 from "../images/adobe-xd.png"






import Typed from "react-typed"
import {makeStyles} from "@material-ui/core/styles"
import NavBar from "./Navbar"

//The styles
const useStyles = makeStyles(theme => ({
    avatar: {
        width: theme.spacing(40),
        height: theme.spacing(40),
        background: "#fff",
        display: "block",
        marginLeft: "auto",
        marginRight: "auto"

    },

    title: {
        color: "tomato",
        padding: theme.spacing(2),
        textAlign: "center",
        color: theme.palette.text.secondary,
        background: "#fff",

        boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)"
    },
    subtitle: {
        color: "tan",
        marginBottom: "3rem"
    },
    mainContainer: {
        background: "#fff",
        height: "100vh",

    },
    grid: {
        width: "100%",
        margin: "0px",
        height: "600px",
    },

    paper: {
        padding: theme.spacing(2),
        textAlign: "center",
        color: theme.palette.text.secondary,
        background: theme.palette.success.light
    },
     profile: {
        padding: theme.spacing(2),
        textAlign: "center",
        background: "#fff"
    }


}))


const About = () => {
    const classes = useStyles()

    return (
        <>
           <NavBar style={{position: "fixed", top: "0"}}/>

            <Box className={classes.mainContainer}>
                <Grid container 
            spacing={2}
            direction="row"
            justify="center"
            alignItems="center"
            className={classes.grid}
            >

                <Grid item xs={12} md={6} style={{textAlign: "center"}}>

                    <Paper className={classes.profile}>
                    <Avatar className={classes.avatar} variant="round" src={avatar} alt="Miguel Chiau"/>

                    </Paper>
                </Grid>

                <Grid item xs={12} md={6} style={{textAlign: "center"}}>
                    
                    {/* <Paper className={classes.paper}>2-TWO</Paper> */}
                    <Typography className={classes.title} variant="h6">
                        Hi, I'm Miguel Chiau.
                    </Typography>

                    <Typography className={classes.title} variant="h6">
                     Your next web developer. In April 2020 I graduated from Quest University Canada with a dual Bachelor of Arts and Sciences.
                     I'm also a graduate from BrainStation Web Development diploma program.
                    </Typography>

                     <Typography className={classes.title} variant="h6">
                      Interesting things about me
                      1. I was born and raised in Mozambique, South-East Africa, I came to Canada in 2016
                      2. I speak four languages: English, Portuguese, Shangaan and Spanish.
                      </Typography>
                </Grid>

                <Grid item xs={12} md={6} style={{textAlign: "center"}}>
                    <Typography  variant="h6">
                        Experience with:
                    </Typography>

                    <Avatar src={img1} variant="square" alt=""/>
                    <Avatar src={img2} variant="square" alt=""/>
                    <Avatar src={img3} variant="square" alt=""/>
                    <Avatar src={img4} variant="square" alt=""/>
                    <Avatar src={img5} variant="square" alt=""/>
                    <Avatar src={img6} variant="square" alt=""/>


                    
                </Grid>
                

            </Grid>

            </Box>


            



            


        </>
        
       
    )
}

export default About