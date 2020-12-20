import React from 'react'
import {Typography, Avatar, Grid, Box} from "@material-ui/core"
// import avatar from "../images/avatar.JPG"
import avatar from "../images/prof.jpg"
import Button from '@material-ui/core/Button';
import myResume from "../MiguelChiauResume.pdf"


import Typed from "react-typed"
import {makeStyles} from "@material-ui/core/styles"

//The styles
const useStyles = makeStyles(theme => ({
    avatar: {
        width: theme.spacing(30),
        height: theme.spacing(30),
        margin: theme.spacing(1)
    },

    title: {
        color: "tomato"
    },
    subtitle: {
        color: "tan",
        marginBottom: "3rem"
    },
    typedContainer: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "100vw",
        textAlign: "center",
        zIndex: 1,
        color: "tan"
    }


}))

const Header = () => {

    const classes = useStyles()
    return (
        <Box className={classes.typedContainer}>
            <Grid container justify="center">
            {/* <Avatar className={classes.avatar} variant="round" src={avatar} alt="Miguel Chiau"/> */}
            </Grid>
            <Typography className={classes.title} variant="h4">
                <Typed strings={["Hi, I'm Miguel Chiau"]} typeSpeed={40}/>
            </Typography>
            <br/>
            <Typography className={classes.subtitle} variant="h5">
                <Typed strings={["Web Developer", "Front-end Developer", "Full-stack Developer"]} 
                typeSpeed={40}
                backSpeed={60}
                loop/>
            </Typography>

             <Button variant="contained" 
             style={{backgroundColor: "tomato", 
             color: "tan", 
             boxShadow: "5px 10px 18px #888888", 
             fontWeight: "bold"}} 
             disableElevation
             target="_blank" href={myResume}
             >
               Download my CV
              </Button>
        </Box>
    )
}

export default Header