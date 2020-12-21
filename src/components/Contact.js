import React, { Component } from 'react';
import {Typography, Link, Checkbox , FormControlLabel, Avatar, TextField, Button, Grid, Box, Paper, ListItem} from "@material-ui/core"
import CssBaseline from '@material-ui/core/CssBaseline';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Recaptcha from "react-recaptcha"


import NavBar from "./Navbar"

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

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
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));


const Contact = () => {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs" style={{background: "#fff"}}>
         <NavBar style={{position: "fixed", top: "0"}}/>

      <CssBaseline />
      <div className={classes.paper} >
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5" style={{fontWeight: "bold"}}>
           Contact Me
        </Typography>
         <Typography component="h1" variant="h6" >
           I will bet back to you within 24hrs
        </Typography>
        <form className={classes.form} noValidate>
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
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            // onClick={this.handleSubmit}
          >
            Submit
          </Button>
         
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}

export default  Contact


// https://joshembling.co.uk/#home
// https://sebkay.com/services/
// https://www.youtube.com/watch?v=RKj3OjgftXc