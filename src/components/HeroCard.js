import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Box,
  Divider,
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    minHeight: 380,
    display: "grid",
    alignContent: "center",
    border: "none",
    boxShadow: "none",
    borderRadius: "0px",
    background: "transparent",
    color: "white",
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
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem modi
            reiciendis quis omnis rerum delectus quos aut non quod consequatur.
          </Typography>
        </CardContent>
        <Box display="flex" justifyContent="center">
          <CardActions>
            <Button color="#802634" variant="contained">
              Learn More
            </Button>
          </CardActions>
        </Box>
      </Box>
    </Card>
  );
};

export default HeroCard;
