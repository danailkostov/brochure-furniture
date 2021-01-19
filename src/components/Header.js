import { AppBar, Grid, Toolbar, Hidden, Button } from "@material-ui/core";
import BrandingWatermarkIcon from "@material-ui/icons/BrandingWatermark";
import React from "react";
import { makeStyles } from "@material-ui/styles";
import ServiceMenu from "../components/ServiceMenu";
import BurgerMenu from '../components/BurgerMenu'

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
            
                <BurgerMenu />  
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
                  <Button color="inherit">Начало</Button>
                </Grid>
                <Grid item xs={1}>
                  <Button color="inherit">За нас</Button>
                </Grid>
                <Grid item xs={1}>
                  <ServiceMenu />
                </Grid>
                <Grid item xs={1}>
                  <Button color="inherit">Контакт</Button>
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
