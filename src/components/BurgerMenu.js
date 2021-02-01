import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import HomeIcon from "@material-ui/icons/Home";
import GroupIcon from "@material-ui/icons/Group";
import SettingsApplicationsIcon from "@material-ui/icons/SettingsApplications";
import ContactSupportIcon from "@material-ui/icons/ContactSupport";
import { Link } from "react-router-dom";
import {
  Drawer,
  Button,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.primary.main,
    width: 250,
    height: "98vh",
  },
  linksDecoration: {
    textDecoration: "none",
    color: theme.palette.secondary.main,
  },
}));

export default function TemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
     
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List className={classes.root}>
        <Link to="/" className={classes.linksDecoration}>
          <ListItem button key="1">
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Начало" />
          </ListItem>
        </Link>
        <Link to="/about" className={classes.linksDecoration}>
          <ListItem button key="2">
          <ListItemIcon><GroupIcon /></ListItemIcon>
            <ListItemText primary="За Нас" />
          </ListItem>
        </Link>
        <Link to="/services" className={classes.linksDecoration}>
          <ListItem button key="3">
            <ListItemIcon><SettingsApplicationsIcon /></ListItemIcon>
            <ListItemText primary="Услуги" />
          </ListItem>
        </Link>
        <Link to="/contact" className={classes.linksDecoration}>
          <ListItem button key="4">
            <ListItemIcon><ContactSupportIcon /></ListItemIcon>
            <ListItemText primary="Контакт" />
          </ListItem>
        </Link>
      </List>
    </div>
  );

  return (
    <div>
      {["right"].map((anchor) => (
        <React.Fragment>
          <Button onClick={toggleDrawer(anchor, true)} color="inherit">
            <MenuIcon className={classes.gridItem} />
          </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
