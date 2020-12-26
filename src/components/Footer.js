import React  from 'react'
import {withStyles} from "@material-ui/core/styles"
import {BottomNavigation, BottomNavigationAction, SvgIcon} from "@material-ui/core"
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import {Link} from "react-router-dom"

// import myResume from "../MiguelChiauResume.pdf"


const useStyles = withStyles({
    root: {
        "& .MuiBottomNavigationAction-root": {
            minWidth: 0,
            maxWidth: 250
        },
        "& .MuiSvgIcon-root": {
            fill: "blue",
            hover: {
            fill: "#fff",
            fontSize: "1.8rem",
            }
        },

        

    },

})

const Footer = () => {
    const classes = withStyles()
    
    return (
        <BottomNavigation width="auto" style={{background: "#666666"}}>
             <BottomNavigationAction className={classes.root} 
            style={{padding: "0", color: "#fff"}} 
            icon={<GitHubIcon/>}
            target="_blank"
            href="https://github.com/MiguelChiau"

            />

            {/* </a> */}

           
            <BottomNavigationAction style={classes.root} 
            style={{padding: "0", color: "#fff"}} 
            icon={<LinkedInIcon/>}
            target="_blank"
             href="https://www.linkedin.com/in/miguel-chiau-b328b6ba/"
            />

            <BottomNavigationAction className={classes.root} 
            style={{padding: "0", color: "#fff"}} 
            icon={<EmailIcon className={classes.footerIcons} />}
            target="_blank"
            href="mailto:chiau.miguel@gmail.com"
            />

            
        </BottomNavigation>
    )
}

export default Footer 