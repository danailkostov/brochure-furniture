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
}));

const Contact = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Grid container direction="column">
        <Grid item container>
          <form
            style={{
              padding: "20px",
              width: "680px",
              margin: "0px auto",
            }}
          >
            <Typography align="center" gutterBottom paragraph>
              SEND US A MESSAGE
            </Typography>

            <Grid item container spacing={2} justify="center">
              <Grid item xs={12} sm={4}>
                <TextField
                  variant="outlined"
                  label="Name"
                  placeholder="Enter your name"
                  fullWidth
                  required
                  margin="normal"
                  color="secondary"
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  variant="outlined"
                  label="Email"
                  placeholder="Enter your email"
                  fullWidth
                  required
                  margin="normal"
                  color="secondary"
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  variant="outlined"
                  label="Phone"
                  placeholder="Enter your phone number"
                  fullWidth
                  required
                  margin="normal"
                  color="secondary"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  label="Message"
                  placeholder="Enter your message"
                  multiline
                  margin="normal"
                  size="medium"
                  fullWidth
                  rows={10}
                  color="secondary"
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
          style={{ padding: "7rem 0px" }}
        >
          <Grid item xs={12} sm={4} md={3} lg={2}>
            <CardHeader
              avatar={
                <Avatar aria-label="recipe" className={classes.avatar}>
                  {<EmailIcon />}
                </Avatar>
              }
              title={
                <Typography variant="h5" gutterBottom>
                  MESSAGE US
                </Typography>
              }
            />
            <Typography align="center">testingmail@gmail.com</Typography>
          </Grid>
          <Grid item xs={12} sm={4} md={3} lg={2}>
            <CardHeader
              avatar={
                <Avatar aria-label="recipe" className={classes.avatar}>
                  {<CallIcon />}
                </Avatar>
              }
              title={
                <Typography variant="h5" gutterBottom>
                  CALL US
                </Typography>
              }
            />
            <Typography style={{ paddingLeft: "70px" }}>
              (+1) 96 716 6879
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4} md={3} lg={2}>
            <CardHeader
              avatar={
                <Avatar aria-label="recipe" className={classes.avatar}>
                  {<ScheduleIcon />}
                </Avatar>
              }
              title={
                <Typography variant="h5" gutterBottom>
                  OPENING HOURS
                </Typography>
              }
            />
            <Typography align="center">
              09:30 AM – 11:00 PM
              <br />
              Every Day
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Contact;
