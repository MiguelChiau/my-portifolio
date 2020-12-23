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

import demo from "../videos/preview 2.mp4"
import VideoPlayer from 'react-video-js-player';
import pg from "../images/net.jpg"


import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
//   root: {
//     maxWidth: 345,
//   },
  media: {
    height: 140,
  },
});



function Popup(props) {

const classes = useStyles();

    const {title, children, openPopup, setOpenPopu} = props

    // const VideoSRC = demo

    return (
        <Dialog open={openPopup}>
                 <CloseIcon />

            {/* <DialogTitle>
                This is the title

            </DialogTitle>
            <DialogContent>
                Bla bla bla jb/lraw
                Let Google help apps determine location. This means sending anonymous location data to
            Google, even when no apps are running.

            </DialogContent> */}

            <Card className={classes.root}>
      <CardActionArea>
        {/* <CardMedia
          className={classes.media}
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        /> */}

        <CardMedia>

            <video autoPlay loop muted width="500"
            height="400" style={{marginLeft: "20px"}}>
                <source src={demo} type="video/mp4"/>
            </video>

        </CardMedia>

        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
            <ComputerIcon style={{paddingRight: "5px"}} />
          View Live Preview
        </Button>
       
      </CardActions>
    </Card>

            
        </Dialog>

    
     
    )
    }

    export default Popup