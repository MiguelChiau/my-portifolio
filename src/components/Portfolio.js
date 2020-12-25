import {React, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import GitHubIcon from '@material-ui/icons/GitHub';
import ComputerIcon from '@material-ui/icons/Computer';
import Popup from "./Popup"
import Popup2 from "./Popup2"
import Popup3 from "./Popup3"
import Popup4 from "./Popup4"


import {Link} from "react-router-dom"



import NavBar from "./Navbar"
import pg from "../images/netflix-hero.png"
import pg1 from "../images/port.png"
import pg2 from "../images/band.png"
import pg3 from "../images/brain-flix.png"



const useStyles = makeStyles((theme) => ({
  card: {
    maxWidth: 390,
    margin: "auto"
  },

  media: {
    // height: 170
    height: "200px"

  },

  gridTitle: {
    fontWeight: "bold",
    textAlign: "center", 
    paddingTop: "80px", 
    paddingBottom: "20px", 
    color: "#222", 
    backgroundColor: "#fff",
    width: "100%"
  
  },

  innerGrid:{
    background: "#fff"
},

projectsIcons: {
  paddingRight: "5px"
},

field: {
  backgroundColor: "#f1f1f1",
  '&:hover': {
       backgroundColor: "tomato",
    },
}
})
)


 const Portfolio = () => {
  const classes = useStyles();

  //The Modal
const [openPopup, setOpenPopup] = useState(false)
const [openPopup2, setOpenPopup2] = useState(false)
const [openPopup3, setOpenPopup3] = useState(false)
const [openPopup4, setOpenPopup4] = useState(false)




  return (
    <>
    <NavBar style={{position: "fixed", top: "0"}}/>

    <Grid  xs={12} md={12} >
       <Typography  variant="h4" className={classes.gridTitle}>My Projects</Typography>


    <Grid spacing={2} 
    container
  direction="row"
  justify="center"
  alignItems="center"
    >

      

      <Grid  item xs={12} md={6} className={classes.innerGrid}>
        <Card className={classes.card}>

          <CardActionArea>
             <CardMedia
                className={classes.media}
                image={pg}
                title="Contemplative Reptile"
             />

          <CardContent>
             <Typography gutterBottom variant="h5" component="h2">
               Netflix Clone
            </Typography>

            <Typography variant="body2" color="textSecondary" component="p">
              A clone of the canadian version of Netflix. The web app includes: landing page, login, dashboard and the main browsing page where movie trailers can be viewed.
            </Typography>
          </CardContent>
      </CardActionArea>

      <CardActions >
        <Button size="small" color="primary" className={classes.field}
        onClick = {() => setOpenPopup(true)}
        >
          Demo
        </Button>
        <Button size="small" color="primary"  className={classes.field}
        target="_blank"
        href="https://github.com/MiguelChiau/netflix-clone">
          <GitHubIcon className={classes.projectsIcons}/> Source Code
        </Button>
      </CardActions>

    </Card>
    </Grid>

    <Grid  item xs={12} md={6} className={classes.innerGrid}>
        <Card className={classes.card}>

          <CardActionArea>
             <CardMedia
                className={classes.media}
                image={pg1}
                title="Contemplative Reptile"
             />

          <CardContent>
             <Typography gutterBottom variant="h5" component="h2">
               Portfolio Site
            </Typography>

            <Typography variant="body2" color="textSecondary" component="p">
              This very Portfolio website, is a web application I designed and built from the ground up using React.js
            </Typography>
          </CardContent>
      </CardActionArea>

      <CardActions >
        <Button size="small" color="primary" className={classes.field}
        onClick = {() => setOpenPopup2(true)}
        >
          Demo
        </Button>
        <Button size="small" color="primary"  className={classes.field}
        target="_blank"
        href="https://github.com/MiguelChiau/my-portifolio"
        >
          <GitHubIcon className={classes.projectsIcons} /> Source Code
        </Button>
      </CardActions>

    </Card>
    </Grid>

     <Grid  item xs={12} md={6} className={classes.innerGrid}>
        <Card className={classes.card}>

          <CardActionArea>
             <CardMedia
                className={classes.media}
                image={pg3}
                title="Contemplative Reptile"
             />

          <CardContent>
             <Typography gutterBottom variant="h5" component="h2">
               BrainFlix
            </Typography>

            <Typography variant="body2" color="textSecondary" component="p">
              BrainFlix is a prototype for a videos' streaming platform with dynamic front end data from an API. 
            </Typography>
          </CardContent>
      </CardActionArea>

      <CardActions >
        <Button size="small" color="primary" className={classes.field}
        onClick = {() => setOpenPopup4(true)}
        >
          Demo
        </Button>
        <Button size="small" color="primary"  className={classes.field}>
          <GitHubIcon className={classes.projectsIcons} /> Source Code
        </Button>
      </CardActions>

    </Card>
    </Grid>

    <Grid  item xs={12} md={6} className={classes.innerGrid}>
        <Card className={classes.card}>

          <CardActionArea>
             <CardMedia
                className={classes.media}
                image={pg2}
                title="Contemplative Reptile"
             />

          <CardContent>
             <Typography gutterBottom variant="h5" component="h2">
               Band Site
            </Typography>

            <Typography variant="body2" color="textSecondary" component="p">
              Website for a band, featuring a biography page and a shows' page with dates and locations. 
            </Typography>
          </CardContent>
      </CardActionArea>

      <CardActions >
        <Button size="small" color="primary" className={classes.field}
        onClick = {() => setOpenPopup3(true)}
        >
          Demo
        </Button>
        <Button size="small" color="primary"  className={classes.field}>
          <GitHubIcon className={classes.projectsIcons} /> Source Code
        </Button>
      </CardActions>

    </Card>
    </Grid>


   

    
            
        

    </Grid>
    </Grid>

    <Popup openPopup={openPopup} setOpenPopup={setOpenPopup}></Popup>

    <Popup2 openPopup2={openPopup2} setOpenPopup2={setOpenPopup2}></Popup2>

    <Popup3 openPopup3={openPopup3} setOpenPopup3={setOpenPopup3}></Popup3>

    <Popup4 openPopup4={openPopup4} setOpenPopup4={setOpenPopup4}></Popup4>


    </>
  );
}

export default Portfolio



