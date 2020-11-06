import React from "react";
import { useForm } from "react-hook-form";

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
  const { register, handleSubmit } = useForm();
  const onSubmit = handleSubmit((data) => alert(JSON.stringify(data)));

  const classes = useStyles();

  return (
    <Container maxWidth="sm">
      <Grid container spacing={3}>
        <form className={classes.form} onSubmit={onSubmit}>
          <Grid item xs={12}>
            <TextField
              className={classes.container}
              id="standard-basic"
              type="text"
              name="name"
              ref={register}
              label="Full Name"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              className={classes.container}
              id="standard-basic"
              type="text"
              name="email"
              ref={register}
              label="Email"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              className={classes.container}
              id="standard-basic"
              type="text"
              name="password"
              ref={register}
              label="Password"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              className={classes.container}
              id="standard-basic"
              type="text"
              name="confirmPassword"
              ref={register}
              label="Confirm Password"
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              className={classes.container}
              variant="contained"
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
