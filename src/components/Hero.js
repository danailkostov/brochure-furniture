import { Grid } from "@material-ui/core";
import React from "react";
import HeroCard from "../components/HeroCard";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  contStyles: {
    background:
      "url(https://images.unsplash.com/photo-1573554767873-b553cdf97230?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80) no-repeat center center",
    height: "500px",
    backgroundSize: "cover",
  },
});

const Hero = () => {
  const classes = useStyles();
  return (
      <Grid container className={classes.contStyles}>
        <Grid item xs={4}></Grid>
        <Grid item xs={4}>
          <HeroCard />
        </Grid>
        <Grid item xs={4}></Grid>
      </Grid>
  );
};

export default Hero;
