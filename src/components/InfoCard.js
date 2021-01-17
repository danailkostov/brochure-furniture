import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
  IconButton,
} from "@material-ui/core";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  card: {
    border: "none",
    boxShadow: "none",
    borderRadius: "0px",
  },
  numbers: {
    borderLeft: "4px solid green",
    paddingLeft: "15px",
  },
  arrows: {
      border: '1px solid black',
  }
});

const InfoCard = () => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="h5" className={classes.numbers}>
          <Typography>01</Typography>
          WELCOME
        </Typography>
        <br />
        <Typography variant="body2" component="p">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit
          amet libero id turpis mattis laoreet id quis magna.
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton>
          <ArrowForwardIosIcon  className={classes.arrows}/>
        </IconButton>
        <Button size="small">Discover</Button>
      </CardActions>
    </Card>
  );
};

export default InfoCard;
