import React, { useState, useRef } from 'react';
import { useForm, Controller } from 'react-hook-form';

import { ErrorMessage } from '@hookform/error-message';

import logo from './logo.jpg';

import {
  makeStyles,
  Container,
  Grid,
  Card,
  TextField,
  Button,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  logo: {
    padding: theme.spacing(2),
    textAlign: 'center',
    display: 'flex',
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  logoImage: {
    width: '100%',
    maxWidth: '146px',
    height: 'auto',
    textAlign: 'center',
    flexDirection: 'column',
    margin: '0 auto',
  },
  box: {
    padding: theme.spacing(2),
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    justifyContent: 'center',
  },
  container: {
    margin: theme.spacing(2),
  },
  confirmation: {
    margin: theme.spacing(2),
    padding: theme.spacing(2),
  },
  message: {
    padding: theme.spacing(1),
  },
}));

const Form = () => {
  const { handleSubmit, register, control, errors, watch } = useForm();
  const [error, setError] = useState(false); // show duplication error
  const [confirm, setConfirm] = useState(false); // hide form when complete and show confirmation message

  /**
   * grab current value of password
   */
  const password = useRef({});
  password.current = watch('password', '');

  const signup = (data) => {
    return fetch('http://localhost:8080/customers/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        !data.success ? setError(true) : setConfirm(true);
      })
      .catch((error) => {
        setError(true);
      });
  };

  const classes = useStyles();

  return (
    <Container maxWidth="sm">
      <Grid container spacing={3}>
        <div className={classes.logo}>
          <img className={classes.logoImage} src={logo} alt="Gym Time Logo" />
        </div>

        {/* Check if state is confirmed */}
        {!confirm ? (
          <form className={classes.box} onSubmit={handleSubmit(signup)}>
            <Grid item xs={12}>
              <Controller
                as={
                  <TextField
                    className={classes.container}
                    id="standard-basic"
                    fullWidth
                    type="text"
                    ref={register}
                    label="Full Name"
                  />
                }
                control={control}
                name="name"
                defaultValue=""
                rules={{ required: 'Name is required.' }}
              />
              <ErrorMessage errors={errors} name="name" />
            </Grid>
            <Grid item xs={12}>
              <Controller
                as={
                  <TextField
                    className={classes.container}
                    id="standard-basic"
                    fullWidth
                    type="text"
                    ref={register}
                    label="Email"
                  />
                }
                control={control}
                name="email"
                defaultValue=""
                rules={{
                  required: 'Email is required.',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Invalid email address',
                  },
                }}
              />
              <ErrorMessage errors={errors} name="email" />
              {error && <span>The email has been used already</span>}
            </Grid>
            <Grid item xs={12}>
              <Controller
                as={
                  <TextField
                    className={classes.container}
                    id="standard-basic"
                    fullWidth
                    type="text"
                    ref={register}
                    label="Password"
                  />
                }
                control={control}
                name="password"
                defaultValue=""
                rules={{
                  required: 'Password is required.',
                  minLength: {
                    value: 8,
                    message: 'Password must have at least 8 characters',
                  },
                }}
              />
            </Grid>
            <ErrorMessage errors={errors} name="password" />
            <Grid item xs={12}>
              <Controller
                as={
                  <TextField
                    className={classes.container}
                    id="standard-basic"
                    fullWidth
                    type="text"
                    ref={register}
                    label="Confirm Password"
                  />
                }
                control={control}
                name="confirmPassword"
                defaultValue=""
                rules={{
                  required: 'Password is required.',
                  validate: (value) =>
                    value === password.current || 'The passwords do not match',
                }}
              />
              <ErrorMessage errors={errors} name="confirmPassword" />
            </Grid>
            <Grid item xs={12}>
              <Button
                className={classes.container}
                variant="contained"
                fullWidth
                color="primary"
                type="submit"
              >
                Sign Up
              </Button>
            </Grid>
          </form>
        ) : (
          <Card className={classes.box}>
            <p className={classes.message}>
              Thank you for signing up to <strong>Gym Time</strong>, please
              check your email (don't forget spam) for your activation link!
            </p>
            <Button
              className={classes.box}
              variant="contained"
              fullWidth
              color="primary"
              onClick={() => window.location.reload()}
            >
              Back to sign up
            </Button>
          </Card>
        )}
      </Grid>
    </Container>
  );
};

export default Form;
