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

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.primary.main,
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
  },
  cardsContainer: {
    padding: "7rem 0px",
  },
  margins: {
    [theme.breakpoints.up("xl")]: {
      marginLeft: "50px",
    },
  },
}));

const Contact = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Grid container direction="column">
        <Grid item container>
          <form className={classes.formStyle}>
            <Typography align="center" gutterBottom paragraph>
              SEND US A MESSAGE
            </Typography>

            <Grid item container spacing={2} justify="center">
              <Grid item xs={12} sm={4}>
                <TextField
                  id="name"
                  name="name"
                  label="Name"
                  variant="outlined"
                  placeholder="Enter your name"
                  fullWidth
                  required
                  margin="normal"
                  color="secondary"
                  className={classes.textFieldStyle}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  id="email"
                  name="email"
                  label="Email"
                  variant="outlined"
                  placeholder="Enter your email"
                  fullWidth
                  required
                  margin="normal"
                  color="secondary"
                  className={classes.textFieldStyle}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  id="phone"
                  name="phone"
                  label="Phone"
                  variant="outlined"
                  placeholder="Enter your phone number"
                  fullWidth
                  required
                  margin="normal"
                  color="secondary"
                  className={classes.textFieldStyle}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="message"
                  name="message"
                  label="Message"
                  variant="outlined"
                  placeholder="Enter your message"
                  multiline
                  margin="normal"
                  size="medium"
                  fullWidth
                  rows={10}
                  color="secondary"
                  className={classes.textFieldStyle}
                />
              </Grid>
              <Grid item xs={4} sm={2} justify="center">
                <Button type="submit" color="secondary" variant="contained">
                  Sign In
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
            <Grid item xs={5} md={7}>
              <Typography variant="h5" gutterBottom>
                MESSAGE US
              </Typography>
              <Typography>testingmail@gmail.com</Typography>
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
            <Grid item xs={5}>
              <Typography variant="h5" gutterBottom>
                CALL US
              </Typography>
              <Typography>(+1) 96 716 6879</Typography>
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
            <Grid item xs={7} md={8}>
              <Typography variant="h5" gutterBottom>
                OPENING HOURS
              </Typography>
              <Typography>
                09:30 AM – 11:00 PM
                <br />
                Every Day
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Contact;
