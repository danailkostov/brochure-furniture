import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { services } from "../components/constants";
import {
  Container,
  Grid,
  Typography,
  CardActionArea,
  CardContent,
  Box,
  Card,
  Avatar,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 300,
    boxShadow: "none",
    textAlign: "-webkit-center",
    background: theme.palette.secondary.light,
    paddingTop: "15px",
  },
  avatar: {
    height: "70px",
    width: "70px",
    border: "5px solid #322E18",
    background: theme.palette.secondary.light,
  },
  container: {
    padding: "100px 0px",
    textAlign: "-webkit-center",
  },
  box: {
    background: theme.palette.secondary.light,
  },
}));
const Services = () => {
  const classes = useStyles();

  return (
    <Box className={classes.box}>
      <Container>
        <Grid container className={classes.container}>
          {services.map((service) => {
            const { icon, name, desc } = service;
            return (
              <Grid item xs={12} sm={4}>
                <Card className={classes.root}>
                  <CardActionArea>
                    <Avatar className={classes.avatar}>{icon}</Avatar>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        {name}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        {desc}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
};

export default Services;
