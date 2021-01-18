import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Box, Container, Divider, Grid } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    minHeight: 380,
    display: "grid",
    alignContent: "center",
    border: "none",
    boxShadow: "none",
    borderRadius: "0px",
    background: 'transparent',
    color: 'white',
  },
});

const HeroCard = () => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <Box textAlign="center">
        <CardContent>
          <Typography variant="h5" component="h2" gutterBottom>
            PATIENT FIRST
            <Divider />
          </Typography>
          <Typography variant="body2" component="p">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem modi
            reiciendis quis omnis rerum delectus quos aut non quod consequatur.
          </Typography>
        </CardContent>
        <Box display="flex" justifyContent="center">
          <CardActions>
            <Button color="primary" variant="contained">
              Learn More
            </Button>
          </CardActions>
        </Box>
      </Box>
    </Card>
  );
};

export default HeroCard;
