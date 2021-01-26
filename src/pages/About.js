import {
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
} from "@material-ui/core";
import React from "react";
// backgroundColor: "#e2dff0",
//     color: "#802634",
const About = () => {
  return (
    <Grid
      container
      style={{
        paddingTop: "70px",
        paddingLeft: "60px",
        backgroundColor: "#e2dff0",
        color: "#802634",
        paddingBottom: "50px",
      }}
    >
      <Grid item xs={2}></Grid>

      <Grid item xs={3} container>
        <Grid item xs={12}>
          <img
            style={{ height: "550px", width: "100%" }}
            src="https://images.unsplash.com/photo-1511376979163-f804dff7ad7b?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mzl8fHdlbGNvbWUlMjBtZWV0aW5nfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
        </Grid>
      </Grid>

      <Grid item xs={5} container>
        <Grid
          item
          xs={12}
          style={{
            paddingLeft: "30px",
          }}
        >
          <Card
            style={{
              backgroundColor: "#e2dff0",
              color: "#802634",
              boxShadow: "none",
            }}
          >
            <CardContent>
              <Typography gutterBottom>WELCOME TO COMPANY NAME</Typography>
              <Typography variant="h5" component="h2">
                We are Furniture Services
              </Typography>
              <br />
              <Typography variant="body2" component="p">
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia. It is a paradisematic country, in
                which roasted parts of sentences fly into your mouth.
              </Typography>
              <br />
              <Typography variant="body2" component="p">
                Even the all-powerful Pointing has no control about the blind
                texts it is an almost unorthographic life One day however a
                small line of blind text by the name of Lorem Ipsum decided to
                leave for the far World of Grammar.
              </Typography>
              <br />
              <Typography variant="body2" component="p">
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia. It is a paradisematic country, in
                which roasted parts of sentences fly into your mouth.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} container>
          <Grid
            item
            style={{
              paddingLeft: "30px",
              width: "250px",
              height: "80px",
              backgroundColor: "#802634",
              color: "#e2dff0",
              paddingTop: "15px",
              borderRadius: '5px',
              marginLeft: '5px'
            }}
          >
            <Typography>20</Typography>
            <Typography>YEARS OF EXPERIENCE</Typography>
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12} container spacing={2} style={{ paddingTop: "100px" }}>
        <Grid item xs={12}>
          <Typography align="center">ABOUT US</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography align="center" variant="h3">
            OUR STAFF
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography align="center" variant="subtitle2">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia
          </Typography>
        </Grid>
        <Grid item xs={12} container spacing={2} style={{ paddingTop: "50px" }}>
          <Grid item xs={2}></Grid>
          <Grid item xs={2}>
            <Card
              style={{
                textAlign: "center",
                backgroundColor: "#e2dff0",
                width: "170px",
              }}
            >
              <CardContent>
                <CardMedia
                  style={{
                    height: "140px",
                    borderRadius: "50%",
                  }}
                  image="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8YXZhdGFyfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                />
                <br />
                <Typography gutterBottom>Lloyd Wilson</Typography>

                <Typography>CEO, FOUNDER</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={2}>
            <Card
              style={{
                textAlign: "center",
                backgroundColor: "#e2dff0",
                width: "170px",
              }}
            >
              <CardContent>
                <CardMedia
                  style={{
                    height: "140px",
                    borderRadius: "50%",
                  }}
                  image="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8YXZhdGFyfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                />
                <br />
                <Typography gutterBottom>Lloyd Wilson</Typography>

                <Typography>CEO, FOUNDER</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={2}>
            <Card
              style={{
                textAlign: "center",
                backgroundColor: "#e2dff0",
                width: "170px",
              }}
            >
              <CardContent>
                <CardMedia
                  style={{
                    height: "140px",
                    borderRadius: "50%",
                  }}
                  image="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8YXZhdGFyfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                />
                <br />
                <Typography gutterBottom>Lloyd Wilson</Typography>

                <Typography>CEO, FOUNDER</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={2}>
            <Card
              style={{
                textAlign: "center",
                backgroundColor: "#e2dff0",
                width: "170px",
              }}
            >
              <CardContent>
                <CardMedia
                  style={{
                    height: "140px",
                    borderRadius: "50%",
                  }}
                  image="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8YXZhdGFyfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                />
                <br />
                <Typography gutterBottom>Lloyd Wilson</Typography>

                <Typography>CEO, FOUNDER</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={2}></Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default About;
