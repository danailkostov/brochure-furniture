import { Grid, Hidden, Typography } from "@material-ui/core";
import React from "react";
import installService from "../images/install.jpg";
import deliveryService from "../images/delivery.jpg";
import loadingService from "../images/loading.png";

const Services = () => {
  return (
    <Grid container direction="column" style={{ padding: "70px 0" }}>
      <Grid item container>
        <Grid item xs={2}></Grid>
        <Grid
          item
          xs={8}
          style={{ borderBottom: "1px solid #802634", color: "#802634" }}
        >
          <Typography variant="h4" align="center" gutterBottom>
            Какви Са Нашите Услуги
          </Typography>
        </Grid>
        <Grid item xs={2}></Grid>
      </Grid>
      {/* Content start*/}
      {/* First Couple */}
      <Grid item container style={{ paddingTop: "100px" }}>
        <Grid item xs={2}></Grid>
        <Grid item xs={8} md={3}>
          <img
            src={installService}
            alt="install"
            style={{
              width: "100%",
              height: "100%",
              borderRadius: "15px",
              border: "1px solid #802634",
            }}
          />
        </Grid>
        <Hidden only={["xs", "sm"]}>
          <Grid
            item
            md={2}
            style={{ alignSelf: "center", borderTop: "2px solid #802634" }}
          ></Grid>
        </Hidden>
        <Hidden only={["md", "lg", "xl"]}>
          <Grid item xs={2}></Grid>
          <Grid item xs={2}></Grid>
        </Hidden>
        <Grid
          item
          xs={8}
          md={3}
          style={{
            borderRadius: "15px",
            border: "1px solid #802634",
            padding: "15px",
          }}
          container
        >
          <Grid item style={{ alignSelf: "center", color: "#802634" }}>
            <Typography align="center" variant="h4">
              Монтаж
            </Typography>
            <Typography align="center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
              iure dicta a modi eum. Ea. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Optio iure dicta a modi eum. Ea. Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Optio iure dicta a
              modi eum. Ea. Lorem ipsum dolor sit amet consectetur adipisicing
              elit.
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs={2}></Grid>
        {/* First Couple */}
      </Grid>
      {/* Second Couple */}
      <Grid item container style={{ paddingTop: "100px" }}>
        <Grid item xs={2}></Grid>
        <Grid
          item
          xs={8}
          md={3}
          style={{
            borderRadius: "15px",
            border: "1px solid #802634",
            padding: "15px",
          }}
          container
        >
          <Grid item style={{ alignSelf: "center", color: "#802634" }}>
            <Typography align="center" variant="h4">
              Доставка
            </Typography>
            <Typography align="center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
              iure dicta a modi eum. Ea. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Optio iure dicta a modi eum. Ea. Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Optio iure dicta a
              modi eum. Ea. Lorem ipsum dolor sit amet consectetur adipisicing
              elit.
            </Typography>
          </Grid>
        </Grid>
        <Hidden only={["xs", "sm"]}>
          <Grid
            item
            xs={2}
            style={{ alignSelf: "center", borderTop: "2px solid #802634" }}
          ></Grid>
        </Hidden>
        <Hidden only={["md", "lg", "xl"]}>
          <Grid item xs={2}></Grid>
          <Grid item xs={2}></Grid>
        </Hidden>

        <Grid item xs={8} md={3}>
          <img
            src={deliveryService}
            alt="install"
            style={{
              width: "100%",
              height: "100%",
              borderRadius: "15px",
              border: "1px solid #802634",
            }}
          />
        </Grid>
        <Grid item xs={2}></Grid>
        {/* Second Couple */}
      </Grid>
      {/* Third Couple */}
      <Grid item container style={{ paddingTop: "100px" }}>
        <Grid item xs={2}></Grid>
        <Grid item xs={8} md={3}>
          <img
            src={loadingService}
            alt="install"
            style={{
              width: "100%",
              height: "100%",
              borderRadius: "15px",
              border: "1px solid #802634",
            }}
          />
        </Grid>
        <Hidden only={["xs", "sm"]}>
          <Grid
            item
            xs={2}
            style={{ alignSelf: "center", borderTop: "2px solid #802634" }}
          ></Grid>
        </Hidden>
        <Hidden only={["md", "lg", "xl"]}>
          <Grid item xs={2}></Grid>
          <Grid item xs={2}></Grid>
        </Hidden>
        <Grid
          item
          xs={8}
          md={3}
          style={{
            borderRadius: "15px",
            border: "1px solid #802634",
            padding: "15px",
          }}
          container
        >
          <Grid item style={{ alignSelf: "center", color: "#802634" }}>
            <Typography align="center" variant="h4">
              Качване
            </Typography>
            <Typography align="center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
              iure dicta a modi eum. Ea. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Optio iure dicta a modi eum. Ea. Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Optio iure dicta a
              modi eum. Ea. Lorem ipsum dolor sit amet consectetur adipisicing
              elit.
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs={2}></Grid>
        {/* Third Couple */}
      </Grid>
      {/* Content end */}
    </Grid>
  );
};

export default Services;
