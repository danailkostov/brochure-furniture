import React from "react";
import { Box, Card, CardContent, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    background: "transparent",
    color: "white",
    borderRadius: "0px",
    boxShadow: "none",
    borderLeft: "1px solid white",
    borderRight: "1px solid white",
    marginTop: "30px",
    marginBottom: "30px",
  },
});

const FooterCards = () => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <Box textAlign="center">
        <CardContent>
          <Typography variant="h5" component="h2" gutterBottom>
            PATIENT FIRST
          </Typography>
          <Typography variant="body2" component="p">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem modi
            reiciendis quis omnis rerum delectus quos aut non quod consequatur.
          </Typography>
        </CardContent>
      </Box>
    </Card>
  );
};

export default FooterCards;
