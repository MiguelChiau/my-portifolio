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

import demo from "../videos/brainflix.mp4"
import VideoPlayer from 'react-video-js-player';
import pg from "../images/brainflix.png"


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



function Popup4(props) {

const classes = useStyles();

    const {openPopup4, setOpenPopup4} = props


    return (
        <Dialog open={openPopup4}>
            <div style={{display: "flex"}}>
            <CloseIcon className={classes.closeButton} style={{flexGrow: 3 }}
            onClick = {() => {setOpenPopup4(false)}}
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
                          BrainFlix
                     </Typography>
                     <Typography variant="body2" color="textSecondary" component="p">
                         This web app is built with React.js and uses a back-end API build from the ground up to feed the front end data dynamically.
                     </Typography>
                </CardContent>
             </CardActionArea>

            <CardActions>
                   <Button size="small" color="primary"
                   target="_blank"
                   href="https://github.com/MiguelChiau/BrainFlix">
                       <ComputerIcon style={{paddingRight: "5px"}} />
                        Source Code
                   </Button>
            </CardActions>

        </Card>

    </Dialog>

    )
    }

    export default Popup4