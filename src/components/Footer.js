import React from 'react'
import {AppBar,Grid,Toolbar,Typography} from '@material-ui/core'
import BrandingWatermarkIcon from "@material-ui/icons/BrandingWatermark";


const Footer = () => {
    return (
      <AppBar position="static">
        <Grid container>
          <Grid item xs={1}></Grid>
          <Grid item xs={10}>
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
          <Grid item xs={1}></Grid>
        </Grid>
      </AppBar>
    );
}

export default Footer
