import React, { Component } from 'react';
import Recaptcha from 'react-recaptcha';
import {Typography, Divider, Link, Checkbox , FormControlLabel, Avatar, TextField, Button, Grid, Box, Paper, ListItem} from "@material-ui/core"
import CssBaseline from '@material-ui/core/CssBaseline';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import NavBar from "./Navbar"
import ContactMailIcon from '@material-ui/icons/ContactMail';


const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', 
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),

  },
  mainContainer: {
        background: "#fff",
        height: "100vh",


    },
    grid: {
        width: "100%",
        margin: "0px",
        // height: "600px",
    },
}));

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Miguel Chiau
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


class Contacts extends Component {
  constructor(props) {
    super(props)

    this.handleSubscribe = this.handleSubscribe.bind(this);
    this.recaptchaLoaded = this.recaptchaLoaded.bind(this);
    this.verifyCallback = this.verifyCallback.bind(this);
    this.classes = this.useStyles.bind(this)

//   const classes = useStyles();


    this.state = {
      isVerified: false
    }
  }

  recaptchaLoaded() {
    console.log('capcha successfully loaded');
  }

  handleSubscribe() {
    if (this.state.isVerified) {
      alert('You have successfully subscribed!');
    } else {
      alert('Please verify that you are a human!');
    }
  }

  verifyCallback(response) {
    if (response) {
      this.setState({
        isVerified: true
      })
    }
  }

useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));



  

  render() {
    return (

 <Container  style={{background: "#fff"}}>
         <NavBar style={{position: "fixed", top: "0"}}/>

      <CssBaseline />
      <Grid container spacing={2} style={{textAlign: "center", width: "100%"}}>
          
      <Grid item xs={12} md={12} >
      <div className={useStyles.paper} style={{marginTop: "68px"}}>
        
        <Typography component="h1" variant="h5" style={{fontWeight: "bold", textAlign: "center"}}>
           Get in Touch
        </Typography>
         <Typography component="h1" variant="h6"style={{textAlign: "center"}} >
           I will get back to you within 24hrs
        </Typography>
        <form className={useStyles.form} noValidate>



           <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="name"
            label="Name"
            name="name"
            autoComplete="name"
            autoFocus
          /> 
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            id="phone"
            label="Phone Number"
            name="phone"
            autoComplete="phone"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            name="subject"
            label="Subject"
            type="subject"
            id="subject"
            autoComplete="subject"
          />
         
          <TextField
          variant="outlined"
          id="message"
          label="Message"
          type="message"
          multiline
          fullWidth
          rows={6}
        />
        

          
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={useStyles.submit}
            onClick={this.handleSubmit}
            style={{marginTop: "10px",
        marginBottom: "10px"}}
          >
            Send Message
          </Button>
           <Recaptcha
            sitekey="6Ld_Yw8aAAAAAMAFawyxcxgRAVMduy_ylYoHnxTo"
            render="explicit"
            onloadCallback={this.recaptchaLoaded}
            verifyCallback={this.verifyCallback}
          />
         
        </form>
      </div>
      <Grid justify="center">
          <Paper style={{backgroundColor: "#fff", marginTop: "68px"}}>
              <Typography  variant="h6" style={{fontWeight: "bold"}}>
                        More ways to contact me
             </Typography>
             <Divider/>
              <Typography  variant="h6" href="mailto:chiau.miguel@gmail.com">
                        Email me at: 
                        <a href="mailto:chiau.miguel@gmail.com">chiau.miguel@gmail.com</a>
             </Typography>
              <Typography  variant="h6">
                        Phone: +1 (672) 999-0650
             </Typography>
          </Paper>
      </Grid>
      <Box mt={8}>
        <Copyright />
      </Box>
      </Grid>

      {/* <Grid item xs={12} md={6}>
          <Paper style={{backgroundColor: "#fff", marginTop: "68px"}}>
              <Typography  variant="h6" style={{fontWeight: "bold"}}>
                        More ways to get in touch
             </Typography>
              <Typography  variant="h6">
                        Email me at: chiau.miguel@gmail.com
             </Typography>
              <Typography  variant="h6">
                        Phone: +1 (672) 999-0650
             </Typography>
          </Paper>
      </Grid> */}
      </Grid>

    </Container>

    );
  }
}

export default Contacts;