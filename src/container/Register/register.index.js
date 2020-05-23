import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import { TextField, Text } from "@material-ui/core";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { useForm, Controller } from "react-hook-form";
import { useInjectReducer, useInjectSaga } from "redux-injectors";

import { registerAPI } from "./actions";
import registerSaga from "./saga";
import reducerRegister from "./reducer";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp() {
  const dispatch = useDispatch();
  const classes = useStyles();
  const { handleSubmit, control, errors, register, setError } = useForm();

  useInjectSaga({ key: "reducerRegister", saga: registerSaga });

  const onSubmit = (data) => {
    console.log("submit", data);
    dispatch(registerAPI(data));
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form
          className={classes.form}
          noValidate
          onSubmit={handleSubmit(onSubmit)}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12}>
              <TextField
                name="name"
                id="name"
                label="User Name"
                variant="outlined"
                fullWidth
                inputRef={register}
                error={!!errors.name}
                helperText={errors.name && "Lỗi"}
              />
              {errors.name && "This is required"}
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                name="email"
                id="email"
                label="Email"
                variant="outlined"
                fullWidth
                inputRef={register}
                error={!!errors.email}
                helperText={errors.email && "Lỗi"}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="password"
                id="password"
                label="Password"
                variant="outlined"
                fullWidth
                inputRef={register}
                error={!!errors.password}
                helperText={errors.password && "Lỗi"}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="password2"
                id="password2"
                label="Confirm Password"
                variant="outlined"
                fullWidth
                inputRef={register}
                error={!!errors.password2}
                helperText={errors.password2 && "Lỗi"}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="/login" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}
