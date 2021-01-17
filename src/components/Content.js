import { Divider, Grid } from "@material-ui/core";
import React from "react";
import InfoCard from "../components/InfoCard";
import Pros from "../components/Pros";
import Company from "../components/Company";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  containerBackground: {
    background:
      "url(https://cdn.dribbble.com/users/48837/screenshots/615840/background.jpg?compress=1&resize=400x300) no-repeat center center",
    backgroundSize: "cover",
  },
  container: {
    paddingTop: "40px",
    paddingLeft: "15px",
    paddingBottom: "40px",
  },
  test: {
    backgroundColor: "lightgrey",
  },
});

const Content = () => {
  const classes = useStyles();
  return (
    <>
      <Grid container className={classes.container}>
        <Grid item xs={1} xl={2}></Grid>
        <Grid item xs={10} xl={8} container>
          <Grid item xs={12} md={3}>
            <InfoCard />
          </Grid>
          <Grid item xs={12} md={3}>
            <InfoCard />
          </Grid>
          <Grid item xs={12} md={3}>
            <InfoCard />
          </Grid>
          <Grid item xs={12} md={3}>
            <InfoCard />
          </Grid>
        </Grid>
        <Grid item xs={1} xl={2}></Grid>
      </Grid>
      <Divider />
      <Grid container className={classes.containerBackground}>
        <Grid item xs={1} xl={2}></Grid>
        <Grid item xs={10} xl={8} container className={classes.container}>
          <Grid item xs={12} md={4}>
            <Pros />
          </Grid>
          <Grid item xs={12} md={4}>
            <Pros />
          </Grid>
          <Grid item xs={12} md={4}>
            <Pros />
          </Grid>
          <Grid item xs={12} md={4}>
            <Pros />
          </Grid>
          <Grid item xs={12} md={4}>
            <Pros />
          </Grid>
          <Grid item xs={12} md={4}>
            <Pros />
          </Grid>
        </Grid>
        <Grid item xs={1} xl={2}></Grid>
      </Grid>
      <Divider />
      <Grid container className={classes.test}>
        <Grid item xs={1} xl={2}></Grid>
        <Grid
          item
          xs={10}
          xl={8}
          container
          spacing={3}
          className={classes.container}
        >
          <Grid item xs={12} md={4}>
            <Company />
          </Grid>
          <Grid item xs={12} md={4}>
            <Company />
          </Grid>
          <Grid item xs={12} md={4}>
            <Company />
          </Grid>
        </Grid>
        <Grid item xs={1} xl={2}></Grid>
      </Grid>
    </>
  );
};

export default Content;
