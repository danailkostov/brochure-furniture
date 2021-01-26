import {
  Card,
  CardContent,
  Divider,
  Grid,
  Typography,
} from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/styles";
const useStyles = makeStyles({
  gridStyles: {
    backgroundColor: "#e2dff0",
    color: "#802634",
    paddingBottom: "20px",
    paddingTop: '30px'
  },
});
//#DAA03D
//#616427
const Services = () => {
  const classes = useStyles();
  return (
    // <div>
    //     Services Page
    // </div>
    <Grid container className={classes.gridStyles}>
      <Grid
        item
        xs={12}
        container
        alignItems="center"
        style={{ paddingBottom: "20px", paddingTop: "20px" }}
      >
        <Grid item xs={2}></Grid>
        <Grid item xs={3}>
          <Divider />
        </Grid>
        <Grid item xs={2}>
          <Typography align="center">What We Offer</Typography>
        </Grid>
        <Grid item xs={3} style={{ color: "#aeabba" }}>
          <Divider />
        </Grid>
        <Grid item xs={2}></Grid>
      </Grid>
      <Grid item xs={12} container spacing={5}>
        <Grid item xs={2}></Grid>
        <Grid item xs={3}>
          <img
            style={{ width: "100%", borderRadius: "15%" }}
            src="https://images.unsplash.com/photo-1604618161221-fc0055072d1a?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
        </Grid>
        <Grid item xs={2}></Grid>
        <Grid item xs={3}>
          <Card
            style={{
              boxShadow: "none",
              color: "#802634",
            }}
          >
            <CardContent style={{ backgroundColor: "#e2dff0" }}>
              <Typography component="h5" variant="h5">
                Монтаж
              </Typography>
              <Typography variant="subtitle1" color="inherit">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos,
                blanditiis eum dolor id dolorum quae enim praesentium dolores
                sed voluptatem? Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Eos, blanditiis eum dolor id dolorum quae enim
                praesentium dolores sed voluptatem?
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={2}></Grid>

        <Grid item xs={2}></Grid>
        <Grid item xs={3}>
          <Card
            style={{
              boxShadow: "none",
              color: "#802634",
            }}
          >
            <CardContent style={{ backgroundColor: "#e2dff0" }}>
              <Typography component="h5" variant="h5">
                Качване
              </Typography>
              <Typography variant="subtitle1" color="inherit">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos,
                blanditiis eum dolor id dolorum quae enim praesentium dolores
                sed voluptatem? Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Eos, blanditiis eum dolor id dolorum quae enim
                praesentium dolores sed voluptatem?
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={2}></Grid>
        <Grid item xs={3}>
          <img
            style={{ width: "100%", borderRadius: "15%" }}
            src="https://images.unsplash.com/photo-1604618161221-fc0055072d1a?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
        </Grid>
        <Grid item xs={2}></Grid>

        <Grid item xs={2}></Grid>
        <Grid item xs={3}>
          <img
            style={{ width: "100%", borderRadius: "15%" }}
            src="https://images.unsplash.com/photo-1604618161221-fc0055072d1a?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
        </Grid>
        <Grid item xs={2}></Grid>
        <Grid item xs={3}>
          <Card
            style={{
              boxShadow: "none",
              color: "#802634",
            }}
          >
            <CardContent style={{ backgroundColor: "#e2dff0" }}>
              <Typography component="h5" variant="h5">
                Доставка
              </Typography>
              <Typography variant="subtitle1" color="inherit">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos,
                blanditiis eum dolor id dolorum quae enim praesentium dolores
                sed voluptatem? Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Eos, blanditiis eum dolor id dolorum quae enim
                praesentium dolores sed voluptatem?
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={2}></Grid>
      </Grid>
    </Grid>
  );
};

export default Services;
