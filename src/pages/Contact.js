import {
  Button,
  Grid,
  TextField,
  Typography,
  CardHeader,
  Avatar,
  Box,
} from "@material-ui/core";
import EmailIcon from "@material-ui/icons/Email";
import CallIcon from "@material-ui/icons/Call";
import ScheduleIcon from "@material-ui/icons/Schedule";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useForm } from "react-hook-form";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#CFCCD6",
    padding: "5rem 0",
  },
  avatar: {
    backgroundColor: theme.palette.secondary.main,
  },
  formStyle: {
    padding: "20px",
    width: "680px",
    margin: "0px auto",
  },
  textFieldStyle: {
    backgroundColor: "white",
    borderRadius: "5px",
  },
  cardsContainer: {
    padding: "7rem 0px",
    [theme.breakpoints.up("sm")]: {
      marginLeft: "40px",
    },
  },
  margins: {
    [theme.breakpoints.up("xl")]: {
      marginLeft: "50px",
    },
  },
}));

const Contact = () => {
  const classes = useStyles();
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <Box className={classes.root}>
      <Grid container direction="column">
        <Grid item container>
          <form className={classes.formStyle} onSubmit={handleSubmit(onSubmit)}>
            <Typography align="center" variant="h5" gutterBottom paragraph>
              НАПРАВИ ЗАЯВКА
            </Typography>

            <Grid item container spacing={2} justify="center">
              <Grid item xs={12} sm={4}>
                <TextField
                  id="name"
                  name="name"
                  placeholder="Въведете вашето име"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  color="secondary"
                  className={classes.textFieldStyle}
                  inputRef={register({ required: true, minLength: 2 })}
                />
                {errors.name && "Името е задължително"}
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  id="email"
                  name="email"
                  placeholder="Въведете вашия имейл"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  color="secondary"
                  className={classes.textFieldStyle}
                  inputRef={register({
                    required: true,
                    pattern: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                  })}
                />
                {errors.email && "Имейла е задължителен"}
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  id="phone"
                  name="phone"
                  placeholder="Въведете вашият номер"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  color="secondary"
                  className={classes.textFieldStyle}
                  inputRef={register({
                    required: true,
                    pattern: /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]*$/g,
                    minLength: 9,
                  })}
                />
                {errors.phone && "Телефонния номер е задължителен"}
              </Grid>

              <Grid item xs={12}>
                <TextField
                  id="message"
                  name="message"
                  variant="outlined"
                  placeholder="Въведете вашето съобщение"
                  multiline
                  margin="normal"
                  size="medium"
                  fullWidth
                  rows={10}
                  color="secondary"
                  className={classes.textFieldStyle}
                  inputRef={register}
                />
              </Grid>
              <Grid item xs={12} sm={2} justify="center">
                <Button
                  type="submit"
                  color="secondary"
                  variant="contained"
                  size="large"
                  fullWidth
                >
                  ЗАЯВКА
                </Button>
              </Grid>
            </Grid>
          </form>
        </Grid>

        <Grid
          item
          container
          spacing={2}
          justify="center"
          className={classes.cardsContainer}
        >
          <Grid item xs={12} md={4} lg={3} xl={2} container>
            <Grid item xs={3}>
              <CardHeader
                avatar={
                  <Avatar aria-label="recipe" className={classes.avatar}>
                    {<EmailIcon />}
                  </Avatar>
                }
              />
            </Grid>
            <Grid item xs={8} md={7}>
              <Typography variant="h5" gutterBottom>
                ИЗПРАТЕТЕ НИ СЪОБЩЕНИЕ
              </Typography>
              <Typography>dia.movers@mail.bg</Typography>
            </Grid>
          </Grid>
          <Grid
            item
            xs={12}
            md={4}
            lg={3}
            xl={2}
            container
            className={classes.margins}
          >
            <Grid item xs={3}>
              <CardHeader
                avatar={
                  <Avatar aria-label="recipe" className={classes.avatar}>
                    {<CallIcon />}
                  </Avatar>
                }
              />
            </Grid>
            <Grid item xs={8}>
              <Typography variant="h5" gutterBottom>
                ОБАДЕТЕ НИ СЕ
              </Typography>
              <Typography>(+359) 89 946 6574</Typography>
              <Typography>(+359) 89 430 5105</Typography>
            </Grid>
          </Grid>
          <Grid item xs={12} md={4} lg={3} xl={2} container>
            <Grid item xs={3}>
              <CardHeader
                avatar={
                  <Avatar aria-label="recipe" className={classes.avatar}>
                    {<ScheduleIcon />}
                  </Avatar>
                }
              />
            </Grid>
            <Grid item xs={9} md={8}>
              <Typography variant="h5" gutterBottom>
                РАБОТНО ВРЕМЕ
              </Typography>
              <Typography>
                09:00 – 18:00
                <br />
                Понеделник - Събота
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Contact;
