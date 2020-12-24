import React, {useState} from 'react'
import {
AppBar,
Toolbar,
ListItem,
IconButton,
ListItemText,
ListItemIcon,
Avatar,
Divider,
List,
Typography,
Box
} from "@material-ui/core"

import Button from '@material-ui/core/Button';
import Logo from "../images/code.png"

import {
ArrowBack,
AssignmentInd,
Home,
Apps,
ContactMail,
Info
} from "@material-ui/icons"
import avatar from "../images/avatar.JPG"
import {makeStyles} from "@material-ui/core/styles"
import MobileMenuSlider from "@material-ui/core/Drawer"
import myResume from "../MiguelChiauResume.pdf"
import Landing from "./Home"
import GetAppIcon from '@material-ui/icons/GetApp';


import {Link} from "react-router-dom"
import Footer from "./Footer"

//Styles using material ui
const useStyles = makeStyles(theme=>({
    menuSliderContainer: {
        width: "100%",
        // background: "#222",
        background: "#fff",
        height: "100%"
    },

    avatar:{
        display: "block",
        margin: "0.5rem auto",
        width: theme.spacing(5),
        height: theme.spacing(5)

    },

    ListItem: {
    //   color: "tan"
      color: "#666666"  


    }
}))

const menuItems = [
    {
        ListIcon: <Info/>,
        ListText: "About",
        listPath: "/"
    },
    {
        ListIcon: <Apps/>,
        ListText: "Portfolio",
        // listPath: "/portfolio"

    },
    {
        ListIcon: <ContactMail/>,
        ListText: "Contacts"
        // listPath: "/contact-me"

    }
]

export const Navbar = () => {
    const [state, setState] = useState({
        right: false
    })

    const toggleSlider = (slider, open) => () => {
        setState({...state, [slider]: open})
    }

    const classes = useStyles()

    const sideList = slider => (
         <Box className={classes.menuSliderContainer} component="div" onClick={toggleSlider(slider, false)}>
            <Avatar className={classes.avatar} src={Logo} alt=""/>
            <Divider/>
            <List>

                 <ListItem button component={Link} to="/">
                    <ListItemIcon className={classes.ListItem}>
                        <Home/>
                    </ListItemIcon>
                    <ListItemText className={classes.ListItem} primary="Home" />
                </ListItem>

                 <ListItem button component={Link} to="/about">
                    <ListItemIcon className={classes.ListItem}>
                        <Info/>
                    </ListItemIcon>
                    <ListItemText className={classes.ListItem} primary="About"/>
                </ListItem>


                <ListItem button component={Link} to="/projects">
                    <ListItemIcon className={classes.ListItem}>
                        <Apps/>
                    </ListItemIcon>
                    <ListItemText className={classes.ListItem} primary="Portfolio"/>
                </ListItem>

                <ListItem button component={Link} to="/contact-me">
                    <ListItemIcon className={classes.ListItem}>
                        <ContactMail/>
                    </ListItemIcon>
                    <ListItemText className={classes.ListItem} primary="Contact me"/>
                </ListItem>

                
                 <Button variant="contained" 
                 className={classes.ListItem}
                 style={{
                backgroundColor: "#666666",
                color: "white",
                display: "flex",
                justifyContent: "center"}}
                target="_blank" href={myResume}>
                 <GetAppIcon/>
               Resume
              </Button>

               
                
                
            </List>
        </Box>
    )

    return (
        <>
        <Box component="nav">
            <AppBar position="sticky" style={{background: "#666666", position: "fixed"}}>
                <Toolbar>
                    <IconButton onClick={toggleSlider("right", true)}>
                    <ArrowBack style={{color: "#fff"}}/>
                    {/* <Typography variant="h5" style={{color: "tan"}}>Portfolio</Typography> */}
                    </IconButton>
                    <Typography variant="h5" style={{color: "#eeeeee"}}>Portfolio</Typography>
                    <MobileMenuSlider anchor="right" open={state.right} onClose={toggleSlider("right", false)}>
                        {sideList("right")}
                        <Footer/>
                    </MobileMenuSlider>
                </Toolbar>
            </AppBar>
            
        </Box>
        </>
    )
}

export default Navbar