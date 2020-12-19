import React from 'react'
import Navbar from "./Navbar"
import Header from "./Header"
import Particles from "react-particles-js"
import {makeStyles} from "@material-ui/styles"
import {
Box
} from "@material-ui/core"


const useStyles = makeStyles({
    particlesCanva: {
        position: "absolute",
        color: "red"
    }
})
const Home = () => {

    const classes = useStyles()
    return (
        <Box className={classes.main}>
            <Navbar/>
            <Header/>
            <Particles
            canvasClassName={classes.particlesCanva}
            params={{
                particles: {
                    number: {
                        value: 450
                    },
                    color: {
                    value: "red"
                    }
                }
            }}

            style={{color: "red"}}
            />
        </Box>
    )
}

export default Home