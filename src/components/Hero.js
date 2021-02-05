import {
  Box,
  Grid,
  Typography,
  TextField,
  Button,
  Container,
} from "@material-ui/core";
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
    // maxWidth: "350px",
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
    // <Grid container className={classes.contStyles}>
    //   <Grid item xs={1} lg={4}></Grid>
    //   <Grid item xs={10} lg={4} className={classes.heroText}>
    //     <Typography variant="h3" align="center" gutterBottom>
    //       Success starts with hardworking consultants
    //     </Typography>
    //     <Typography align="center" gutterBottom>
    //       Morbi leo tortor, fermentum sed orci vitae, tempor auctor turpis.
    //       Fusce bibendum accumsan fringilla. Nulla aliquam luctus sem, at
    //       posuere nibh lobortis et. Ut ac mollis risus, eu congue libero. Nulla
    //       vestibulum ultricies tortor at ultrices.
    //     </Typography>
    //   </Grid>
    //   <Grid item xs={1} lg={4}></Grid>
    // </Grid>
    <Box className={classes.contStyles}>
      <Container style={{ height: "100%" }}>
        <Grid
          container
          justify="space-between"
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
            <Typography variant="subtitle1" align="center">
              Сглобяване, разнос и транспорт на мебели в цяла България
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4} className={classes.form}>
            <Typography
              variant="subtitl1"
              component="h4"
              align="center"
              gutterBottom
            >
              АЗ ИСКАМ ДА ПОЛЗВАМ УСЛУГИТЕ ВИ
            </Typography>
            <form>
              <TextField
                id="name"
                name="name"
                label="Name"
                fullWidth
                variant="outlined"
                placeholder="Enter your name"
                margin="normal"
                required
              />
              <TextField
                id="email"
                name="email"
                label="Email"
                fullWidth
                variant="outlined"
                placeholder="Enter your email"
                margin="normal"
                required
              />
              <TextField
                id="phone"
                name="phone"
                label="Phone"
                fullWidth
                variant="outlined"
                placeholder="Enter your phone"
                margin="normal"
                required
              />
              <Button
                color="primary"
                variant="contained"
                fullWidth
                size="large"
                style={{ marginTop: "15px" }}
              >
                ОБАДЕТЕ МИ СЕ
              </Button>
            </form>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Hero;
