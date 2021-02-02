import React, { useEffect } from "react";
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
  Hidden,
} from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import { makeStyles } from "@material-ui/styles";
import { useGlobalContext } from "../components/context";

const useStyles = makeStyles((theme) => ({
  header: {
    height: "30vh",
    backgroundColor: theme.palette.secondary.main,
  },
  headerItems: {
    alignSelf: "center",
    color: theme.palette.primary.main,
  },
  contentContainer: {
    backgroundColor: theme.palette.primary.main,
  },
  contentItems: {
    backgroundColor: theme.palette.secondary.main,
    margin: "100px 0px",
  },
  contentCardWrapper: {
    alignSelf: "center",
    padding: "10px",
  },
  card: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.primary.main,
    boxShadow: "none",
  },
  cardContent: {
    borderBottom: "1px solid #e2dff0",
    width: "12vw",
  },
  cardImageContainer: {
    alignSelf: "center",
    position: "relative",
    left: "5vw",
    padding: "40px 0px",
  },
  cardImage: {
    height: "25vh",
    border: "1px solid white",
  },
  staffContainer: {
    backgroundColor: theme.palette.secondary.main,
    paddingBottom: "130px",
  },
  ourStaff: {
    color: theme.palette.primary.main,
    paddingTop: "15px",
  },
  personCard: {
    textAlign: "-webkit-center",
    color: theme.palette.primary.main,
    backgroundColor: theme.palette.secondary.main,
    border: "1px solid white",
    paddingTop: "15px",
  },
  personAvatar: {
    width: "150px",
    height: "150px",
  },
  personIcons: {
    color: "white",
    paddingRight: "5px",
  },
}));

const About = () => {
  const classes = useStyles();
  const { checkColor } = useGlobalContext();
  useEffect(() => {
    checkColor("e2dff0");
  }, [checkColor]);
  return (
    <Grid container direction="column">
      {/* About us Header */}
      <Grid item container className={classes.header}>
        <Grid item xs={3}></Grid>
        <Grid item xs={6} className={classes.headerItems}>
          <Typography align="center" variant="h3">
            ABOUT US
          </Typography>
        </Grid>
        <Grid item xs={3}></Grid>
      </Grid>
      {/* About us Header */}

      {/* About us Content */}
      <Grid item container className={classes.contentContainer}>
        <Grid item xs={1} lg={3}></Grid>
        <Grid item xs={10} lg={6} container className={classes.contentItems}>
          <Grid item xs={12} md={7} className={classes.contentCardWrapper}>
            <Card className={classes.card}>
              <CardContent>
                <Typography className={classes.cardContent}>
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
                <Button size="medium" color="primary">
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Hidden only={["xs", "sm"]}>
            <Grid item xs={5} className={classes.cardImageContainer}>
              <Card>
                <CardActionArea>
                  <CardMedia
                    className={classes.cardImage}
                    image="https://images.unsplash.com/photo-1611689225620-3e70248bc0f0?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                  />
                </CardActionArea>
              </Card>
            </Grid>
          </Hidden>
        </Grid>
        <Grid item xs={1}></Grid>
      </Grid>
      {/* About us Content */}
      {/* Staff Content */}
      <Grid item container className={classes.staffContainer}>
        <Grid item xs={3}></Grid>
        <Grid item xs={6} className={classes.ourStaff}>
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
        <Grid item xs={3}></Grid>
        <Grid item xs={1} md={3}></Grid>
        <Grid item xs={10} md={6} container justify="space-between" spacing={2}>
          <Grid item xs={12} sm={5} md={6} lg={5} xl={4}>
            <Card className={classes.personCard}>
              <Avatar
                className={classes.personAvatar}
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
                  className={classes.personIcons}
                >
                  <FacebookIcon />
                </Link>
                <Link
                  underline="none"
                  href="https://www.youtube.com/"
                  className={classes.personIcons}
                >
                  <TwitterIcon />
                </Link>
                <Link
                  underline="none"
                  href="https://www.youtube.com/"
                  className={classes.personIcons}
                >
                  <InstagramIcon />
                </Link>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={5} md={6} lg={5} xl={4}>
            <Card className={classes.personCard}>
              <Avatar
                className={classes.personAvatar}
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
                  className={classes.personIcons}
                >
                  <FacebookIcon />
                </Link>
                <Link
                  underline="none"
                  href="https://www.youtube.com/"
                  className={classes.personIcons}
                >
                  <TwitterIcon />
                </Link>
                <Link
                  underline="none"
                  href="https://www.youtube.com/"
                  className={classes.personIcons}
                >
                  <InstagramIcon />
                </Link>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <Grid item xs={1}></Grid>
      </Grid>
      {/* Staff Content */}
    </Grid>
  );
};

export default About;
