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
import pg from "../images/net.jpg"


const useStyles = makeStyles((theme) => ({
  card: {
    maxWidth: 390,
    margin: "auto"
  },

  media: {
    height: 170
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
              Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
      </CardActionArea>

      <CardActions >
        <Button size="small" color="primary" className={classes.field}
        onClick = {() => setOpenPopup(true)}
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
                image={pg}
                title="Contemplative Reptile"
             />

          <CardContent>
             <Typography gutterBottom variant="h5" component="h2">
               Portfolio Site
            </Typography>

            <Typography variant="body2" color="textSecondary" component="p">
              Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
      </CardActionArea>

      <CardActions >
        <Button size="small" color="primary" className={classes.field}
        onClick = {() => setOpenPopup2(true)}
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
                image={pg}
                title="Contemplative Reptile"
             />

          <CardContent>
             <Typography gutterBottom variant="h5" component="h2">
               Band Site
            </Typography>

            <Typography variant="body2" color="textSecondary" component="p">
              Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica
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
               Videos Site
            </Typography>

            <Typography variant="body2" color="textSecondary" component="p">
              Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica
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



