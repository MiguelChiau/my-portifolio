import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import CloseIcon from '@material-ui/icons/Close';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ComputerIcon from '@material-ui/icons/Computer';

import demo from "../videos/netflix-clone.mp4"
import VideoPlayer from 'react-video-js-player';
// import pg from "../images/netflix-hero.png"


import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({

  media: {
    height: 140,
  },
  closeButton: {
    color: "#0000FF",
    fontWeight: "bold",
    '&:hover': {
       color: "tomato",

    },

  }
}))



function Popup(props) {

const classes = useStyles();

    const {openPopup, setOpenPopup} = props


    return (
        <Dialog open={openPopup}>
            <div style={{display: "flex"}}>
            <CloseIcon className={classes.closeButton} style={{flexGrow: 3 }}
            onClick = {() => {setOpenPopup(false)}}
            />
            </div>

            <Card className={classes.root}>
              <CardActionArea>
                 <CardMedia>
                     <video autoPlay loop muted style={{width:"100%"}}>
                         <source src={demo} type="video/mp4"/>
                    </video>
                 </CardMedia>

                 <CardContent>
                     <Typography gutterBottom variant="h5" component="h2">
                          Netflix Clone
                     </Typography>
                     <Typography variant="body2" color="textSecondary" component="p">
                         This web app uses a movie database API, TMDB, to collect movies for the different categories
                         on Netflix and play their respective trailers using the Youtube Iframe player API
                         The app is build on React js and uses styled components for the UI.
                     </Typography>
                </CardContent>
             </CardActionArea>

            <CardActions>
                   <Button size="small" color="primary"
                   target="_blank"
                   href="https://netflix-clone-5b788.firebaseapp.com/">
                       <ComputerIcon style={{paddingRight: "5px"}} />
                        View Live Preview
                   </Button>
            </CardActions>

        </Card>

    </Dialog>

    )
    }

    export default Popup