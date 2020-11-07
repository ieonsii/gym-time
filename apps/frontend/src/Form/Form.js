import React from "react";
import { useForm, Controller } from "react-hook-form";

import { ErrorMessage } from "@hookform/error-message";

import {
  makeStyles,
  Container,
  Grid,
  TextField,
  Button,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  form: {
    padding: theme.spacing(2),
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    width: "100%",
    justifyContent: "center",
  },
  container: {
    margin: theme.spacing(2),
  },
}));

const Form = () => {
  const { handleSubmit, register, control, errors } = useForm();

  const signup = (data) => {
    return fetch("http://localhost:8080/customers/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Create Success: ", data);
      })
      .catch((error) => {
        console.error("ERROR: ", error);
      });
  };

  const classes = useStyles();

  return (
    <Container maxWidth="sm">
      <Grid container spacing={3}>
        <form className={classes.form} onSubmit={handleSubmit(signup)}>
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
              rules={{ required: "Name is required." }}
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
              rules={{ required: "Email is required." }}
            />
            <ErrorMessage errors={errors} name="email" />
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
              rules={{ required: "Password is required." }}
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
              rules={{ required: "Password is required." }}
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
      </Grid>
    </Container>
  );
};

export default Form;
