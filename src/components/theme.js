import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#847979",
    },
    secondary: {
      main: "#322E18",
      light: "#CFCCD6",
    },
  },
  typography: {
    fontFamily: ["Arvo", "serif"].join(","),
  },
});

export default theme;
