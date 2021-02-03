import { Grid, Typography } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/styles";
import banner from "../images/banner-img.webp";

const useStyles = makeStyles((theme) => ({
  contStyles: {
    background: `url(${banner}) no-repeat center center`,
    height: "100vh",
    backgroundSize: "cover",
  },
  heroText: {
    color: theme.palette.primary.main,
    alignSelf: "center",
  },
}));

const Hero = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.contStyles}>
      <Grid item xs={1} lg={4}></Grid>
      <Grid item xs={10} lg={4} className={classes.heroText}>
        <Typography variant="h3" align="center" gutterBottom>
          Success starts with hardworking consultants
        </Typography>
        <Typography align="center" gutterBottom>
          Morbi leo tortor, fermentum sed orci vitae, tempor auctor turpis.
          Fusce bibendum accumsan fringilla. Nulla aliquam luctus sem, at
          posuere nibh lobortis et. Ut ac mollis risus, eu congue libero. Nulla
          vestibulum ultricies tortor at ultrices.
        </Typography>
      </Grid>
      <Grid item xs={1} lg={4}></Grid>
    </Grid>
  );
};

export default Hero;
