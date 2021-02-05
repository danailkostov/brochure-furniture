import { Container, Grid, Box, Typography } from "@material-ui/core";
import React from "react";
import galleryImg from "../images/gallery.jpg";
import { makeStyles } from "@material-ui/core/styles";
import { gallery } from "../components/constants";
// #322E18
const useStyles = makeStyles((theme) => ({
  container: {
    background: theme.palette.primary.main,
    padding: "50px 20px",
    borderRadius: "5px",
    boxShadow: "#322E18 0px 2px 4px 0px, #322E18 0px 2px 16px 0px",
  },
  card: {
    maxWidth: 230,
    paddingBottom: "10px",
    margin: "0px 10px",
  },
  cardContainer: {
    textAlign: "-webkit-center",
    marginTop: "50px",
  },
  box: {
    background: theme.palette.secondary.light,
  },
  img: {
    maxWidth: "300px",
  },
  testimonialCont: {
    padding: "120px 0px",
  },
}));
const Features = () => {
  const classes = useStyles();
  return (
    <Box className={classes.box}>
      <Container className={classes.container}>
        <Grid container justify="center">
          <Grid item xs={12}>
            <Typography variant="h4" align="center" gutterBottom>
              Нашите Проекти
            </Typography>
          </Grid>
          {gallery.map(() => {
            return (
              <Grid
                item
                xs={12}
                sm={6}
                md={3}
                className={classes.cardContainer}
              >
                <img src={galleryImg} alt="imgName" className={classes.img} />
              </Grid>
            );
          })}
        </Grid>
      </Container>
      <Container className={classes.testimonialCont}>
        <Grid container justify="center">
          <Grid item xs={10} md={7}>
            <Typography gutterBottom>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit
              quidem inventore eveniet? Eius aliquid quam dolore animi est
              incidunt praesentium, nihil tempore cumque non corporis magnam
              similique nulla illo quia earum natus id explicabo consequuntur
              sit quisquam dolor harum! Perspiciatis!
            </Typography>
            <Typography>от Тодор Стоименов</Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Features;
