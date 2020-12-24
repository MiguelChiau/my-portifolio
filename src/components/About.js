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
        // height: "600px",
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
        // textAlign: "center",
        color: theme.palette.text.secondary,
        // background: theme.palette.success.light
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


            {/* <Grid container 
            spacing={2}
            direction="row"
            justify="center"
            alignItems="center"
            // className={classes.grid}
            > */}

        

                <Grid container spacing={2} className={classes.gridAbout}>
                    <Grid item item md={6} sm={6} xs={12}>
                        <Paper className={classes.paperAbout}>
                             <Avatar className={classes.avatar} variant="square" src={avatar} alt="Miguel Chiau"/>
                            {/* ONE */}
                        </Paper>
                    </Grid>
                    <Grid item md={6} sm={6} xs={12}>
                        <Paper className={classes.paperAbout}>
                            <Typography className={classes.title} variant="h5">
                         <p>
                             Hi, I'm Miguel Chiau.
                        </p>
                         <p>
                             In April 2020 I graduated from Quest University Canada with a dual Bachelor of Arts and Sciences.
                             I'm also a graduate from BrainStation Web Development diploma program.
                         </p>
                         <p>Random facts about me</p>
                      <p>I was born and raised in Mozambique, South-East Africa, I came to Canada in 2016</p>
                      <p>I speak four languages: English, Portuguese, Shangaan and Spanish.</p>
                        </Typography>
                        </Paper>
                    </Grid>
                </Grid>



                <Grid item xs={12} md={12} style={{textAlign: "center"}} >

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