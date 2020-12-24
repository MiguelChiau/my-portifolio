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

const portfolioItems = [
  {
    media: pg,
    title: "Netflix Clone",
    description: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"
  },
   {
    media: pg,
    title: "My Portfolio",
    description: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"
  },
  {
    media: pg,
    title: "Band Site",
    description: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"
  },
  {
    media: pg,
    title: "Video site",
    description: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"
  }
]




 const Portfolio = () => {
  const classes = useStyles();

  //The Modal
const [openPopup, setOpenPopup] = useState(false)


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

      {
        portfolioItems.map((lsItem, key) => (

      <Grid key={key} item xs={12} md={6} className={classes.innerGrid}>
        <Card className={classes.card}>

          <CardActionArea>
             <CardMedia
                className={classes.media}
                image={lsItem.media}
                title="Contemplative Reptile"
             />

          <CardContent>
             <Typography gutterBottom variant="h5" component="h2">
               {lsItem.title}
            </Typography>

            <Typography variant="body2" color="textSecondary" component="p">
              {lsItem.description}
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
            
        ))
      }

    </Grid>
    </Grid>

    <Popup
    openPopup={openPopup}
    setOpenPopup={setOpenPopup}
    >

    </Popup>

    </>
  );
}

export default Portfolio