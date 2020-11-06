import React from "react";
import { useForm, Controller } from "react-hook-form";

import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

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
  const { handleSubmit, register, control } = useForm();
  const onSubmit = handleSubmit((data) => alert(JSON.stringify(data)));

  const classes = useStyles();

  return (
    <Container maxWidth="sm">
      <Grid container spacing={3}>
        <form className={classes.form} onSubmit={onSubmit}>
          <Grid item xs={12}>
            <Controller
              as={
                <TextField
                  className={classes.container}
                  id="standard-basic"
                  fullWidth
                  type="text"
                  name="name"
                  ref={register}
                  label="Full Name"
                />
              }
              control={control}
              name="name"
              defaultValue=""
            />
          </Grid>
          <Grid item xs={12}>
            <Controller
              as={
                <TextField
                  className={classes.container}
                  id="standard-basic"
                  fullWidth
                  type="text"
                  name="email"
                  ref={register}
                  label="Email"
                />
              }
              control={control}
              name="email"
              defaultValue=""
            />
          </Grid>
          <Grid item xs={12}>
            <Controller
              as={
                <TextField
                  className={classes.container}
                  id="standard-basic"
                  fullWidth
                  type="text"
                  name="password"
                  ref={register}
                  label="Password"
                />
              }
              control={control}
              name="password"
              defaultValue=""
            />
          </Grid>
          <Grid item xs={12}>
            <Controller
              as={
                <TextField
                  className={classes.container}
                  id="standard-basic"
                  fullWidth
                  type="text"
                  name="confirmPassword"
                  ref={register}
                  label="Confirm Password"
                />
              }
              control={control}
              name="confirmPassword"
              defaultValue=""
            />
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
