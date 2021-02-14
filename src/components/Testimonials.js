import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import MobileStepper from "@material-ui/core/MobileStepper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import FormatQuoteSharpIcon from "@material-ui/icons/FormatQuoteSharp";
import { comments } from "../utility/constants";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    background: theme.palette.secondary.light,
    boxShadow: "#322E18 0px 2px 4px 0px, #322E18 0px 2px 16px 0px",
    padding: "15px",
  },
  mobileStepper: {
    justifyContent: "center",
    background: theme.palette.secondary.light,
  },
}));

const Testimonials = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = comments.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Card className={classes.root} title='testimonials'>
      <Typography align="center" gutterBottom paragraph>
        <FormatQuoteSharpIcon />
        {comments[activeStep].comment}
        <FormatQuoteSharpIcon />
      </Typography>
      <Grid container alignItems="center" justify="center">
        <Grid item xs={2} sm={1}>
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === "rtl" ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
          </Button>
        </Grid>
        <Grid item xs={8}>
          <Typography variant="h5" align="center" gutterBottom>
            {comments[activeStep].name}
          </Typography>
          <Typography align="center">
            {comments[activeStep].profession}
          </Typography>
        </Grid>
        <Grid item xs={2} sm={1}>
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            {theme.direction === "rtl" ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        </Grid>
      </Grid>
      <MobileStepper
        steps={maxSteps}
        position="static"
        variant="dots"
        activeStep={activeStep}
        className={classes.mobileStepper}
      />
    </Card>
  );
};

export default Testimonials;
