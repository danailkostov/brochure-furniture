import {
  Button,
  Grid,
  TextField,
  Typography,
  CardHeader,
  Avatar,
  CardContent,
} from "@material-ui/core";
import EmailIcon from "@material-ui/icons/Email";
import CallIcon from "@material-ui/icons/Call";
import ScheduleIcon from "@material-ui/icons/Schedule";
import React from "react";

const Contact = () => {
  return (
    <>
      <form
        style={{
          padding: "20px",
          width: "680px",
          margin: "20px auto",
        }}
      >
        <Typography align="center" gutterBottom paragraph>
          SEND US A MESSAGE
        </Typography>

        <Grid container spacing={2} justify="center">
          <Grid item xs={4}>
            <TextField
              variant="outlined"
              label="Name"
              placeholder="Enter your name"
              fullWidth
              required
              margin="normal"
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              variant="outlined"
              label="Email"
              placeholder="Enter your email"
              fullWidth
              required
              margin="normal"
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              variant="outlined"
              label="Phone"
              placeholder="Enter your phone number"
              required
              margin="normal"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              label="Message"
              placeholder="Enter your message"
              multiline
              margin="normal"
              size="medium"
              fullWidth
              rows={10}
            />
          </Grid>
          <Grid item xs={2} justify="center">
            <Button type="submit" color="primary" variant="contained">
              Sign In
            </Button>
          </Grid>
        </Grid>
      </form>
      <Grid container spacing={2} justify="center" style={{paddingBottom: '50px'}}>
        <Grid item xs={2}>
          <CardHeader
            avatar={<Avatar aria-label="recipe">{<EmailIcon />}</Avatar>}
            title={
              <Typography variant="h5" gutterBottom>
                MESSAGE US
              </Typography>
            }
          />
          <Typography align="center">testingmail@gmail.com</Typography>
        </Grid>
        <Grid item xs={2}>
          <CardHeader
            avatar={<Avatar aria-label="recipe">{<CallIcon />}</Avatar>}
            title={
              <Typography variant="h5" gutterBottom>
                CALL US
              </Typography>
            }
          />
          <Typography style={{ paddingLeft: "70px" }}>
            (+1) 96 716 6879
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <CardHeader
            avatar={<Avatar aria-label="recipe">{<ScheduleIcon />}</Avatar>}
            title={
              <Typography variant="h5" gutterBottom>
                OPENING HOURS
              </Typography>
            }
          />
          <Typography align="center">
            09:30 AM – 11:00 PM
            <br />
            Every Day
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default Contact;
