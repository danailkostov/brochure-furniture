import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  Typography,
  Avatar,
} from "@material-ui/core";

const useStyles = makeStyles({
  card: {
    border: "none",
    boxShadow: "none",
    backgroundColor: "transparent",
  },
});

const Pros = () => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={<Avatar aria-label="recipe">R</Avatar>}
        title="Consultation"
      />
      <CardMedia image="/static/images/cards/paella.jpg" title="Paella dish" />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          Phasellus efficitur lacinia turpis eu tincidunt. Nam vitae dolor a
          arcu vulputate pellentesque sed in magna.
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Pros;
