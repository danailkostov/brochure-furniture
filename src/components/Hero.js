import { Box, Grid, Typography, Container } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/styles";
import banner from "../images/banner-img.webp";

const useStyles = makeStyles((theme) => ({
  contStyles: {
    background: `url(${banner}) no-repeat center center`,
    height: "800px",
    backgroundSize: "cover",
  },
  heroText: {
    color: theme.palette.primary.main,
    alignSelf: "center",
  },
  form: {
    background: "#CFCCD6",
    padding: "30px",
    borderRadius: "5px",
    boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
  },
  gridContainer: {
    height: "100%",
    [theme.breakpoints.only("sm")]: {
      justifyContent: "center",
    },
  },
}));

const Hero = () => {
  const classes = useStyles();
  return (
    <Box className={classes.contStyles} title="hero">
      <Container style={{ height: "100%" }}>
        <Grid
          container
          justify="center"
          alignItems="center"
          className={classes.gridContainer}
        >
          <Grid item xs={12} md={6}>
            <Typography variant="h2" align="center">
              Dia Movers
            </Typography>
            <Typography variant="h2" align="center">
              Мебелни услуги
            </Typography>
            <Typography variant="h6" align="center">
              Сглобяване, разнос и транспорт на мебели в цяла България
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Hero;
