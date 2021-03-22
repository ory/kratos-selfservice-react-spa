import React, { useEffect, useState } from "react";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

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
    csrf: {
      visibility: 'hidden',
    },
}));

function Recovery() {
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
                Reset password
                </Typography>
                {/* <form className={classes.form} action={formAction} method="POST" noValidate> */}
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
                  <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      color="primary"
                      className={classes.submit}
                  >
                      Reset
                  </Button>
                  <Grid container>
                      <Grid item>
                      <Link href="http://127.0.0.1:4433/self-service/registration/browser" variant="body2">
                          {"Don't have an account? Sign Up"}
                      </Link>
                      </Grid>
                  </Grid>
                  <TextField
                      name="csrf_token"
                      id="csrf_token"
                      type="hidden"
                      required
                      fullWidth
                      variant="outlined"
                      label="Csrf token"
                    //   value={csrfToken}
                      className={classes.csrf}
                    />
                {/* </form> */}
            </div>
        </Container>
    </>
  );
}

export default Recovery;