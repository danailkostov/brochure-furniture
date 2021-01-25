import React from "react";
import { AppBar, Grid, Toolbar, Hidden, Tabs, Tab } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { Link } from "react-router-dom";
import BrandingWatermarkIcon from "@material-ui/icons/BrandingWatermark";
import BurgerMenu from "./BurgerMenu";

const useStyles = makeStyles({
  root: {
    background: "#e2dff0",
    color: "#802634",
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
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
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
                <Grid item xs={4}>
                  <Tabs value={value} onChange={handleChange}>
                    <Tab
                      label="Начало"
                      to="/"
                      component={Link}
                      className={classes.tab}
                    />
                    <Tab
                      label="За Нас"
                      to="/about"
                      component={Link}
                      className={classes.tab}
                    />
                    <Tab
                      label="Услуги"
                      to="/services"
                      component={Link}
                      className={classes.tab}
                    />
                    <Tab
                      label="Контакт"
                      to="/contact"
                      component={Link}
                      className={classes.tab}
                    />
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
