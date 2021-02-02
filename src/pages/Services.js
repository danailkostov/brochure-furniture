import { Grid, Hidden, Typography } from "@material-ui/core";
import React, { useEffect } from "react";
import installService from "../images/install.jpg";
import deliveryService from "../images/delivery.jpg";
import loadingService from "../images/loading.png";
import { makeStyles } from "@material-ui/core/styles";
import { useGlobalContext } from "../components/context";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.primary.main,
    padding: "70px 0",
  },
  imgItem: {
    [theme.breakpoints.down("sm")]: {
      order: -1,
    },
  },
  header: {
    borderBottom: "1px solid #802634",
    color: theme.palette.secondary.main,
  },
  contentContainer: {
    paddingTop: "100px",
  },
  serviceImages: {
    width: "100%",
    height: "100%",
    borderRadius: "15px",
    border: "1px solid #802634",
  },
  middleLine: {
    alignSelf: "center",
    borderTop: "2px solid #802634",
  },
  textServiceContainer: {
    borderRadius: "15px",
    border: "1px solid #802634",
    padding: "15px",
    [theme.breakpoints.down("sm")]: {
      margin: "20px 0",
    },
  },
  textServiceItem: {
    alignSelf: "center",
    color: theme.palette.secondary.main,
  },
}));

const Services = () => {
  const classes = useStyles();
  const { checkColor } = useGlobalContext();
  useEffect(() => {
    checkColor("#802634");
  }, [checkColor]);
  return (
    <Grid container direction="column" className={classes.root}>
      <Grid item container>
        <Grid item xs={2}></Grid>
        <Grid item xs={8} className={classes.header}>
          <Typography variant="h4" align="center" gutterBottom>
            Какви Са Нашите Услуги
          </Typography>
        </Grid>
        <Grid item xs={2}></Grid>
      </Grid>
      {/* Content start*/}
      {/* First Couple */}
      <Grid item container className={classes.contentContainer}>
        <Grid item xs={2}></Grid>
        <Grid item xs={8} md={3}>
          <img
            src={installService}
            alt="install"
            className={classes.serviceImages}
          />
        </Grid>
        <Hidden only={["xs", "sm"]}>
          <Grid item md={2} className={classes.middleLine}></Grid>
        </Hidden>
        <Hidden only={["md", "lg", "xl"]}>
          <Grid item xs={2}></Grid>
          <Grid item xs={2}></Grid>
        </Hidden>
        <Grid
          item
          xs={8}
          md={3}
          className={classes.textServiceContainer}
          container
        >
          <Grid item className={classes.textServiceItem}>
            <Typography align="center" variant="h4">
              Монтаж
            </Typography>
            <Typography align="center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
              iure dicta a modi eum. Ea. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Optio iure dicta a modi eum. Ea. Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Optio iure dicta a
              modi eum. Ea. Lorem ipsum dolor sit amet consectetur adipisicing
              elit.
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs={2}></Grid>
        {/* First Couple */}
      </Grid>
      {/* Second Couple */}
      <Grid item container className={classes.contentContainer}>
        <Grid item xs={2}></Grid>
        <Grid
          item
          xs={8}
          md={3}
          className={classes.textServiceContainer}
          container
        >
          <Grid item className={classes.textServiceItem}>
            <Typography align="center" variant="h4">
              Доставка
            </Typography>
            <Typography align="center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
              iure dicta a modi eum. Ea. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Optio iure dicta a modi eum. Ea. Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Optio iure dicta a
              modi eum. Ea. Lorem ipsum dolor sit amet consectetur adipisicing
              elit.
            </Typography>
          </Grid>
        </Grid>
        <Hidden only={["xs", "sm"]}>
          <Grid item xs={2} className={classes.middleLine}></Grid>
        </Hidden>
        <Hidden only={["md", "lg", "xl"]}>
          <Grid item xs={2} className={classes.imgItem}></Grid>
          <Grid item xs={2}></Grid>
        </Hidden>

        <Grid item xs={8} md={3} className={classes.imgItem}>
          <img
            src={deliveryService}
            alt="install"
            className={classes.serviceImages}
          />
        </Grid>
        <Grid item xs={2} className={classes.imgItem}></Grid>
        {/* Second Couple */}
      </Grid>
      {/* Third Couple */}
      <Grid item container className={classes.contentContainer}>
        <Grid item xs={2}></Grid>
        <Grid item xs={8} md={3}>
          <img
            src={loadingService}
            alt="install"
            className={classes.serviceImages}
          />
        </Grid>
        <Hidden only={["xs", "sm"]}>
          <Grid item xs={2} className={classes.middleLine}></Grid>
        </Hidden>
        <Hidden only={["md", "lg", "xl"]}>
          <Grid item xs={2}></Grid>
          <Grid item xs={2}></Grid>
        </Hidden>
        <Grid
          item
          xs={8}
          md={3}
          className={classes.textServiceContainer}
          container
        >
          <Grid item className={classes.textServiceItem}>
            <Typography align="center" variant="h4">
              Качване
            </Typography>
            <Typography align="center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
              iure dicta a modi eum. Ea. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Optio iure dicta a modi eum. Ea. Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Optio iure dicta a
              modi eum. Ea. Lorem ipsum dolor sit amet consectetur adipisicing
              elit.
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs={2}></Grid>
        {/* Third Couple */}
      </Grid>
      {/* Content end */}
    </Grid>
  );
};

export default Services;
