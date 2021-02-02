import React from "react";
import { AppBar, Grid, Toolbar, Hidden, Tabs, Tab } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { Link } from "react-router-dom";
import BrandingWatermarkIcon from "@material-ui/icons/BrandingWatermark";
import BurgerMenu from "./BurgerMenu";
import { useGlobalContext } from "./context";
import { services } from "../components/constants";

const useStyles = makeStyles({
  root: {
    boxShadow: "none",
  },
  gridItem: {
    marginLeft: "25px",
  },
  tab: {
    minWidth: "50px",
  },
});

const Navbar = () => {
  const classes = useStyles();
  const { colorStyle, checkColor } = useGlobalContext();

  return (
    <AppBar className={classes.root} color="transparent" position="absolute">
      <Grid container>
        <Grid item xs={4} lg={1} xl={2} container alignItems="center">
          <Hidden only={["lg", "xl"]}>
            <BurgerMenu />
          </Hidden>
        </Grid>
        <Grid item xs={4} lg={10} xl={8}>
          <Toolbar style={{color: colorStyle}}>
            <Grid container>
              <Grid item xs={3}>
                <BrandingWatermarkIcon />
              </Grid>
              <Grid item xs={5}></Grid>
              <Hidden only={["xs", "sm", "md"]}>
                <Grid item xs={4}>
                  <Tabs>
                    {services.map((service) => {
                      const { path, label, color } = service;
                      return (
                        <Tab
                          label={label}
                          to={path}
                          component={Link}
                          className={classes.tab}
                          onClick={() => checkColor(color)}
                        />
                      );
                    })}
                  </Tabs>
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

export default Navbar;
