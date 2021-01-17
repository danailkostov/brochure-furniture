import { AppBar, Grid, Toolbar, Typography } from "@material-ui/core";
import BrandingWatermarkIcon from "@material-ui/icons/BrandingWatermark";
import React from "react";

const Header = () => {
  return (
    <AppBar position="static">
      <Grid container>
        <Grid item xs={1} xl={2}></Grid>
        <Grid item xs={10} xl={8}>
          <Toolbar>
            <Grid container>
              <Grid item xs={3}>
                <BrandingWatermarkIcon />
              </Grid>
              <Grid item xs={5}></Grid>
              <Grid item xs={1}>
                <Typography>Home</Typography>
              </Grid>
              <Grid item xs={1}>
                <Typography>About</Typography>
              </Grid>
              <Grid item xs={1}>
                <Typography>Services</Typography>
              </Grid>
              <Grid item xs={1}>
                <Typography>Contact</Typography>
              </Grid>
            </Grid>
          </Toolbar>
        </Grid>
        <Grid item xs={1} xl={2}></Grid>
      </Grid>
    </AppBar>
  );
};

export default Header;
