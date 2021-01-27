import {
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Button,
  CardActionArea,
  Avatar,
  Link,
} from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import React from "react";

// backgroundColor: "#e2dff0",
//     color: "#802634",
const About = () => {
  return (
    <Grid container direction="column" spacing={2}>
      <Grid
        item
        container
        style={{
          height: "30vh",
          backgroundColor: "#802634",
        }}
      >
        <Grid item xs={5}></Grid>
        <Grid item xs={2} style={{ alignSelf: "center", color: "#e2dff0" }}>
          <Typography align="center" variant="h3">
            ABOUT US
          </Typography>
        </Grid>
        <Grid item xs={5}></Grid>
      </Grid>
      <Grid
        item
        container
        style={{
          height: "60vh",
          backgroundColor: "#e2dff0",
        }}
      >
        <Grid item xs={3}></Grid>
        <Grid
          item
          xs={6}
          container
          spacing={10}
          style={{ backgroundColor: "#802634", margin: "100px 0px" }}
        >
          <Grid item xs={7}>
            <Card
              style={{
                backgroundColor: "#802634",
                color: "#e2dff0",
                boxShadow: "none",
              }}
            >
              <CardContent>
                <Typography
                  style={{ borderBottom: "1px solid #e2dff0", width: "4vw" }}
                >
                  About Us
                </Typography>
                <br />
                <Typography variant="h5">
                  We Believe that Interior beauty Lasts Long
                </Typography>
                <br />
                <Typography variant="body2">
                  inappropriate behavior is often laughed off as “boys will be
                  boys,” women face higher conduct standards especially in the
                  workplace. That’s why it’s crucial that as women.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="medium" style={{ backgroundColor: "#e2dff0" }}>
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid
            item
            xs={5}
            style={{
              alignSelf: "center",
              position: "relative",
              left: "5vw",
              padding: "40px 0px",
            }}
          >
            <Card style={{ border: "1px solid white" }}>
              <CardActionArea>
                <CardMedia
                  style={{ height: "25vh" }}
                  image="https://images.unsplash.com/photo-1611689225620-3e70248bc0f0?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                />
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
        <Grid item xs={3}></Grid>
      </Grid>
      <Grid
        item
        container
        style={{
          backgroundColor: "#802634",
          paddingBottom: "130px",
        }}
      >
        <Grid item xs={4}></Grid>
        <Grid item xs={4} style={{ color: "#e2dff0", paddingTop: "15px" }}>
          <Typography align="center">ABOUT US</Typography>
          <br />
          <Typography align="center" variant="h3">
            OUR STAFF
          </Typography>
          <br />
          <Typography align="center" variant="body1">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia
          </Typography>
          <br />
        </Grid>
        <Grid item xs={4}></Grid>
        <Grid item xs={3}></Grid>
        <Grid item xs={6} container justify="space-between">
          <Grid item xs={3}>
            <Card
              style={{
                textAlign: "-webkit-center",
                color: "#e2dff0",
                backgroundColor: "#802634",
                border: "1px solid white",
                paddingTop: "15px",
              }}
            >
              <Avatar
                style={{ width: "150px", height: "150px" }}
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8YXZhdGFyfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Lloyd Wilson
                </Typography>
                <Typography variant="body2" component="p">
                  CEO, FOUNDER
                </Typography>
                <br />
                <Link
                  underline="none"
                  href="https://www.youtube.com/"
                  style={{ color: "white", paddingRight: "5px" }}
                >
                  <FacebookIcon />
                </Link>
                <Link
                  underline="none"
                  href="https://www.youtube.com/"
                  style={{ color: "white", paddingRight: "5px" }}
                >
                  <TwitterIcon />
                </Link>
                <Link
                  underline="none"
                  href="https://www.youtube.com/"
                  style={{ color: "white", paddingRight: "5px" }}
                >
                  <InstagramIcon />
                </Link>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={3}>
            <Card
              style={{
                textAlign: "-webkit-center",
                color: "#e2dff0",
                backgroundColor: "#802634",
                border: "1px solid white",
                paddingTop: "15px",
              }}
            >
              <Avatar
                style={{ width: "150px", height: "150px" }}
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8YXZhdGFyfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Lloyd Wilson
                </Typography>
                <Typography variant="body2" component="p">
                  CEO, FOUNDER
                </Typography>
                <br />
                <Link
                  underline="none"
                  href="https://www.youtube.com/"
                  style={{ color: "white", paddingRight: "5px" }}
                >
                  <FacebookIcon />
                </Link>
                <Link
                  underline="none"
                  href="https://www.youtube.com/"
                  style={{ color: "white", paddingRight: "5px" }}
                >
                  <TwitterIcon />
                </Link>
                <Link
                  underline="none"
                  href="https://www.youtube.com/"
                  style={{ color: "white", paddingRight: "5px" }}
                >
                  <InstagramIcon />
                </Link>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={3}>
            <Card
              style={{
                textAlign: "-webkit-center",
                color: "#e2dff0",
                backgroundColor: "#802634",
                border: "1px solid white",
                paddingTop: "15px",
              }}
            >
              <Avatar
                style={{ width: "150px", height: "150px" }}
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8YXZhdGFyfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Lloyd Wilson
                </Typography>
                <Typography variant="body2" component="p">
                  CEO, FOUNDER
                </Typography>
                <br />
                <Link
                  underline="none"
                  href="https://www.youtube.com/"
                  style={{ color: "white", paddingRight: "5px" }}
                >
                  <FacebookIcon />
                </Link>
                <Link
                  underline="none"
                  href="https://www.youtube.com/"
                  style={{ color: "white", paddingRight: "5px" }}
                >
                  <TwitterIcon />
                </Link>
                <Link
                  underline="none"
                  href="https://www.youtube.com/"
                  style={{ color: "white", paddingRight: "5px" }}
                >
                  <InstagramIcon />
                </Link>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <Grid item xs={3}></Grid>
      </Grid>
    </Grid>
  );
};

export default About;
