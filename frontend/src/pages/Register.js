import React, { useEffect, useState } from "react";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

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
    csrf: {
      visibility: 'hidden'
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(3),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));

function Register() {
  const classes = useStyles();
  return (
    <>
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                Sign up
                </Typography>
                {/* <form className={classes.form} action={formAction} method="POST" noValidate> */}
                  <TextField
                    name="csrf_token"
                    id="csrf_token"
                    type="hidden"
                    required
                    fullWidth
                    variant="outlined"
                    label="Csrf token"
                    // value={csrfToken}
                    className={classes.csrf}
                  />
                  <Grid container spacing={2}>
                      <Grid item xs={12} sm={6}>
                      
                      <TextField
                          autoComplete="fname"
                          name="traits.name.first"
                          variant="outlined"
                          required
                          fullWidth
                          id="traits.name.first"
                          label="First Name"
                          autoFocus
                          onChange={(event) => {
                            // setFirstName(event.target.value);
                          }}
                      />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                      <TextField
                          variant="outlined"
                          required
                          fullWidth
                          id="traits.name.last"
                          label="Last Name"
                          name="traits.name.last"
                          autoComplete="lname"
                          onChange={(event) => {
                            // setLastName(event.target.value);
                          }}
                      />
                      </Grid>
                      <Grid item xs={12}>
                      <TextField
                          variant="outlined"
                          required
                          fullWidth
                          id="traits.email"
                          label="Email Address"
                          type="email"
                          name="traits.email"
                          autoComplete="email"
                          onChange={(event) => {
                            // setEmail(event.target.value);
                          }}
                      />
                      </Grid>
                      <Grid item xs={12}>
                      <TextField
                          variant="outlined"
                          required
                          fullWidth
                          name="password"
                          label="Password"
                          type="password"
                          id="password"
                          autoComplete="current-password"
                          onChange={(event) => {
                            // setPassword(event.target.value);
                          }}
                      />
                      </Grid>
                  </Grid>
                  <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      color="primary"
                      className={classes.submit}
                      // onClick={handleSignUp}
                  >
                      Sign Up
                  </Button>
                  <Grid container justify="flex-end">
                      <Grid item>
                      <Link href="http://127.0.0.1:3000/login" variant="body2">
                          Already have an account? Sign in
                      </Link>
                      </Grid>
                  </Grid>
                {/* </form> */}
            </div>
        </Container>
    </>
  );
}

export default Register;