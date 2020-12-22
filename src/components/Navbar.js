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


import {Link} from "react-router-dom"
import Footer from "./Footer"

//Styles using material ui
const useStyles = makeStyles(theme=>({
    menuSliderContainer: {
        width: "100%",
        background: "#222",
        height: "100%"
    },

    avatar:{
        display: "block",
        margin: "0.5rem auto",
        width: theme.spacing(13),
        height: theme.spacing(13)

    },

    ListItem: {
      color: "tan"  
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
            <Avatar className={classes.avatar} src={avatar} alt=""/>
            <Divider/>
            <List>

                 {/* {menuItems.map((lsItem, key) =>(
                    <ListItem button key={key} component={Link} to={lsItem.ListPath}>
                    <ListItemIcon className={classes.ListItem}>
                        {lsItem.ListIcon}
                    </ListItemIcon>
                    <ListItemText className={classes.ListItem} primary={lsItem.ListText}/>
                </ListItem>


                ))} */}

                 <ListItem button component={Link} to="/">
                    <ListItemIcon className={classes.ListItem}>
                        <Home/>
                    </ListItemIcon>
                    <ListItemText className={classes.ListItem} primary="Home"/>
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

               
                
                
            </List>
        </Box>
    )

    return (
        <>
        <Box component="nav">
            <AppBar position="sticky" style={{background: "#222", position: "fixed"}}>
                <Toolbar>
                    <IconButton onClick={toggleSlider("right", true)}>
                    <ArrowBack style={{color: "tomato"}}/>
                    {/* <Typography variant="h5" style={{color: "tan"}}>Portfolio</Typography> */}
                    </IconButton>
                    <Typography variant="h5" style={{color: "tan"}}>Portfolio</Typography>
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