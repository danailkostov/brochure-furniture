import { AppBar, Grid, Toolbar, Hidden, Tabs, Tab } from "@material-ui/core";
import BrandingWatermarkIcon from "@material-ui/icons/BrandingWatermark";
import React from "react";
import { makeStyles } from "@material-ui/styles";
import BurgerMenu from "../components/BurgerMenu";
import { Link } from "react-router-dom";

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
              <Grid item xs={3}></Grid>
              <Hidden only={["xs", "sm", "md"]}>
                <Grid item xs={6}>
                  <Tabs value={value} onChange={handleChange}>
                    <Tab label="Начало" to="/" component={Link} />
                    <Tab label="За Нас" to="/about" component={Link} />
                    <Tab label="Услуги" to="/services" component={Link} />
                    <Tab label="Контакт" to="/contact" component={Link} />
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

export default Header;
