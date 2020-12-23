import React from 'react'
import Navbar from "./Navbar"
import Header from "./Header"
import Particles from "react-particles-js"
import {makeStyles} from "@material-ui/styles"
import {
Box
} from "@material-ui/core"
import bg from "../images/coffee-apple.jpg"



const useStyles = makeStyles({
    particlesCanva: {
        position: "relative",
    }

   
})
const Home = () => {

    const classes = useStyles()
    return (
        <Box>
            <Navbar/>
            <Header/>
                {/* <Particles
            canvasClassName={classes.particlesCanva}
            params={{
                particles: {
                    number: {
                        value: 250,
                         density: {
	                       enable: true,
	                       value_area: 2000
	                    }
                    },
                    line_linked: {
                        enable: true,
	                    opacity: 0.4
                    },
                    shape: {
                        type: "circle",
                        stroke: {
                            width: 1,
                            color: "tomato"
                        }
                    }
                }
            }}

            /> */}


            
            
        </Box>
    )
}

export default Home