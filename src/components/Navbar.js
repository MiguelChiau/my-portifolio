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
ContactMail
} from "@material-ui/icons"
import avatar from "../images/avatar.JPG"
import {makeStyles} from "@material-ui/core/styles"
import MobileMenuSlider from "@material-ui/core/Drawer"

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
        ListIcon: <Home/>,
        ListText: "Home",
        listPath: "/"
    },
    {
        ListIcon: <AssignmentInd/>,
        ListText: "Resume",
        ListPath: "/resume"

    },
    {
        ListIcon: <Apps/>,
        ListText: "Portfolio",
        // listPath: "/portfolio"

    },
    {
        ListIcon: <ContactMail/>,
        ListText: "Contact me"
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
                {/* //Now to map the menu items */}
                {menuItems.map((lsItem, key) =>(
                    <ListItem button key={key} component={Link} to={lsItem.ListPath}>
                    <ListItemIcon className={classes.ListItem}>
                        {lsItem.ListIcon}
                    </ListItemIcon>
                    <ListItemText className={classes.ListItem} primary={lsItem.ListText}/>
                </ListItem>


                ))}
                
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