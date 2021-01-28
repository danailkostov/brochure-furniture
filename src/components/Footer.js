import React from "react";
import {
  AppBar,
  Grid,
  Toolbar,
  Typography,
  Link,
  Box,
} from "@material-ui/core";
import MailIcon from "@material-ui/icons/Mail";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import YouTubeIcon from "@material-ui/icons/YouTube";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  root: {
    background: "#283345",
    padding: "10px 0",
    boxShadow: "none",
  },
});

const Footer = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <AppBar position="static" className={classes.root}>
        <Grid container>
          <Grid item xs={0}></Grid>
          <Grid item xs={12}>
            <Toolbar>
              <Grid container>
                <Grid item xs={12}>
                  <Typography gutterBottom align="center" paragraph>
                    Copyright © Company Name, Inc.
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography align="center" gutterBottom paragraph>
                    <Grid container>
                      <Grid item xl={3}></Grid>
                      <Grid item xs={4} xl={2}>
                        <Link href="#" color="inherit" underline="always">
                          About Us
                        </Link>
                      </Grid>
                      <Grid item xs={4} xl={2}>
                        <Link href="#" color="inherit" underline="always">
                          Terms of Use
                        </Link>
                      </Grid>
                      <Grid item xs={4} xl={2}>
                        <Link href="#" color="inherit" underline="always">
                          Privacy Policy
                        </Link>
                      </Grid>
                    </Grid>
                  </Typography>
                </Grid>
                <Grid item xs={0}></Grid>
                <Grid item xs={12} justify="center" container>
                  <MailIcon />
                  <TwitterIcon />
                  <FacebookIcon />
                  <YouTubeIcon />
                </Grid>
              </Grid>
            </Toolbar>
          </Grid>
          <Grid item xs={2}></Grid>
        </Grid>
      </AppBar>
    </Box>
  );
};

export default Footer;
