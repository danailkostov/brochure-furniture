import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Container, Grid, Typography, Avatar } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  avatar: {
    height: "250px",
    width: "250px",
    marginBottom: "30px",
  },
  emptyItem: {
    height: "350px",
    background: theme.palette.primary.main,
    paddingBottom: "50px",
    [theme.breakpoints.only("xs")]: {
        paddingBottom: '100px',
    },
  },
  grid: {
    textAlign: "-webkit-center",
    position: "relative",
    bottom: "120px",
  },
  box: {
    background: theme.palette.secondary.light,
  },
}));

const About = () => {
  const classes = useStyles();

  return (
    <Box className={classes.box}>
      <Container disableGutters>
        <Grid container className={classes.emptyItem} alignItems="center">
          <Grid item xs={12}>
            <Typography variant="h2" align="center">
              Нашият екип
            </Typography>
            <Typography
              variant="subtitle1"
              align="center"
              gutterBottom
              paragraph
            >
              Кратко описание на екипа, може би хвалебствия
            </Typography>
          </Grid>
        </Grid>
        <Grid container justify="space-around" className={classes.grid}>
          <Grid item xs={12} sm={4}>
            <Avatar
              className={classes.avatar}
              alt="Remy Sharp"
              src="data:image/png;base64,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"
            />
            <Typography variant="h5" gutterBottom>
              Fred Morrison
            </Typography>
            <Typography variant="subtitle1" gutterBottom paragraph>
              Accountant-audito
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Avatar
              className={classes.avatar}
              alt="Remy Sharp"
              src="data:image/png;base64,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"
            />
            <Typography variant="h5" gutterBottom>
              Fred Morrison
            </Typography>
            <Typography variant="subtitle1" gutterBottom paragraph>
              Accountant-audito
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Avatar
              className={classes.avatar}
              alt="Remy Sharp"
              src="data:image/png;base64,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"
            />
            <Typography variant="h5" gutterBottom>
              Fred Morrison
            </Typography>
            <Typography variant="subtitle1" gutterBottom paragraph>
              Accountant-audito
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default About;
