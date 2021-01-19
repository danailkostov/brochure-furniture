import { AppBar, Grid, Toolbar, Typography, Hidden, Button } from "@material-ui/core";
import BrandingWatermarkIcon from "@material-ui/icons/BrandingWatermark";
import React from "react";
import { makeStyles } from "@material-ui/styles";
import MenuIcon from "@material-ui/icons/Menu";
import ServiceMenu from '../components/ServiceMenu'

const useStyles = makeStyles({
  root: {
    background: "black",
  },
  gridItem: {
    marginLeft: "25px",
  },
});

const Header = () => {
  const classes = useStyles();
  return (
    <AppBar position="static" className={classes.root}>
      <Grid container>
        <Grid item xs={4} lg={1} xl={2} container alignItems="center">
          <Hidden only={["lg", "xl"]}>
            <MenuIcon className={classes.gridItem} />
          </Hidden>
        </Grid>
        <Grid item xs={4} lg={10} xl={8}>
          <Toolbar>
            <Grid container>
              <Grid item xs={3}>
                <BrandingWatermarkIcon />
              </Grid>
              <Grid item xs={5}></Grid>
              <Hidden only={["xs", "sm", "md"]}>
                <Grid item xs={1}>
                  <Button color="inherit">Home</Button>
                </Grid>
                <Grid item xs={1}>
                  <Button color="inherit">About</Button>
                </Grid>
                <Grid item xs={1}>
                  {/* <Typography>Services</Typography> */}
                  <ServiceMenu />
                </Grid>
                <Grid item xs={1}>
                  <Button color="inherit">Contact</Button>
                </Grid>
              </Hidden>
            </Grid>
          </Toolbar>
        </Grid>
        <Grid item xs={4} lg={1} xl={2}></Grid>
      </Grid>
    </AppBar>
  );
};

export default Header;
