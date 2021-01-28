import { Grid, Typography } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/styles";
import banner from '../images/banner-img.png';

const useStyles = makeStyles({
  contStyles: {
    background: `url(${banner}) no-repeat center center`,
    height: "80vh",
    backgroundSize: "cover",
  },
});

const Hero = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.contStyles}>
      <Grid item xs={1} lg={4}></Grid>
      <Grid item xs={10} lg={4} style={{color: 'white', alignSelf: 'center'}}>
        <Typography variant="h3" align='center' gutterBottom>
          Success starts with hardworking consultants
        </Typography>
        <Typography align='center' gutterBottom>
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
