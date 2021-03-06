import React from 'react'
import {Typography, Avatar, Grid, Box, Paper, ListItem} from "@material-ui/core"
import avatar from "../images/prof.jpg"
import img1 from "../images/html5.png"
import img2 from "../images/css.png"
import img3 from "../images/sass.png"
import img4 from "../images/javascript.png"
import img5 from "../images/node-js.png"
import img6 from "../images/react (3).png"
import img7 from "../images/wordpress.png"
import img8 from "../images/git.png"


import Typed from "react-typed"
import {makeStyles} from "@material-ui/core/styles"
import NavBar from "./Navbar"

//The styles
const useStyles = makeStyles(theme => ({
    avatar: {
        width: theme.spacing(35),
        height: theme.spacing(35),
        background: "#fff",
        display: "block",
        marginLeft: "auto",
        marginRight: "auto"


    },

    
    subtitle: {
        // fontWeight: "bold"

    },
    mainContainer: {
        background: "#fff",
        height: "100vh",

    },
    grid: {
        width: "100%",
        margin: "0px",
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
        background: "#fff",
        marginTop: "100px"
    },
     skillSection: {
        padding: theme.spacing(2),
        textAlign: "center",
        background: "#fff",
    },
    skills: {
        width: "100%",
        margin: "0px",
        background: "#fff",
        padding: theme.spacing(2),
        textAlign: "center",
    },
    skillsImgs: {
        width: theme.spacing(10),
        height: theme.spacing(10),
        background: "#fff",
        display: "block",
        marginLeft: "auto",
        marginRight: "auto"

    },

    gridAbout: {
        width: "100%",
        margin: "0px",
        marginTop: "90px"
    },
    paperAbout: {
        padding: theme.spacing(2),
        color: theme.palette.text.secondary,
    },
    paperTitle: {
        textAlign: "center",
        fontWeight: "bold"
    }


}))

const skillsItems = [
{
  skillIcon: img1
},
{
  skillIcon: img2
},
{
  skillIcon: img3
},
{
  skillIcon: img4
},
{
  skillIcon: img5
},
{
  skillIcon: img6
},
{
  skillIcon: img7
},
{
  skillIcon: img8
}
]


const About = () => {
    const classes = useStyles()

    return (
        <>
           <NavBar style={{position: "fixed", top: "0"}}/>

            <Box className={classes.mainContainer}>

                <Grid container spacing={2} className={classes.gridAbout}>

                    <Grid item item md={12} sm={12} xs={12} className={classes.paperTitle}>
                        <Typography className={classes.subtitle} variant="h4">
                            <Typed strings={["Web Developer", "Front-end Developer", "Full-stack Developer"]} 
                            typeSpeed={40}
                            backSpeed={60}
                            loop/>
                        </Typography>
                    </Grid>

                    <Grid container spacing={2}>
                        <Grid item item md={6} sm={6} xs={12}>
                            <Avatar className={classes.avatar} variant="round" src={avatar} alt="Miguel Chiau"/>
                        </Grid>

                       <Grid item item md={6} sm={6} xs={12}>
                           <Paper className={classes.paperAbout}>
                                <Typography className={classes.title} variant="h5" >
                                    <p style={{textAlign: "center", fontWeight: "bold"}}>
                                         Hi, I'm Miguel Chiau. Nice to meet you!
                                    </p>
                                    <p>
                                       In April 2020 I graduated from Quest University Canada with a dual Bachelor of Arts and Sciences.
                                       I'm also a graduate from BrainStation Web Development diploma program. I have a passion for coding and 
                                       to build beautiful web applications. 
        
                                    </p>
                                    <p style={{textAlign: "center", fontWeight: "bold"}}>Random facts about me</p>

                                    <ul>
                                        <li>
                                            I was born and raised in Mozambique, South-East Africa, and I moved to Canada in 2016.
                                        </li>
                                        <li>
                                            I speak four languages: English, Portuguese, Shangaan and Spanish.
                                        </li>
                                    </ul>
                                </Typography>
                            </Paper>
                         </Grid>

                    </Grid>


                </Grid>



                <Grid item xs={12} md={6} style={{textAlign: "center", marginLeft: "auto", marginRight: "auto", marginTop: "20px"}} >
                    <Typography  variant="h4">
                        Skills
                    </Typography>

                    <Grid container spacing={2} className={classes.skills} style={{textAlign: "center"}}>
                         {
                            skillsItems.map((lsItem, key) => (
                            <Grid key={key} item xs={6} md={3} style={{textAlign: "center"}}>
                                 <Paper className={classes.skillSection}>
                                      <Avatar className={classes.skillsImgs} variant="square" src={lsItem.skillIcon} alt=""/>
                                 </Paper>
                            </Grid>
                        ))
                        }
                    </Grid>

                </Grid>
                
            </Box>

        </>
       
    )
}

export default About