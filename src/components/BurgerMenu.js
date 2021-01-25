import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";
import {
  Drawer,
  Button,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
  linksDecoration: {
    textDecoration: "none",
  },
});

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
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <Link to="/" className={classes.linksDecoration}>
          <ListItem button key="1">
            <ListItemText primary="Начало" />
          </ListItem>
        </Link>
        <Link to="/about" className={classes.linksDecoration}>
          <ListItem button key="2">
            <ListItemText primary="За Нас" />
          </ListItem>
        </Link>
        <Link to="/services" className={classes.linksDecoration}>
          <ListItem button key="3">
            <ListItemText primary="Услуги" />
          </ListItem>
        </Link>
        <Link to="/contact" className={classes.linksDecoration}>
          <ListItem button key="4">
            <ListItemText primary="Контакт" />
          </ListItem>
        </Link>
      </List>
    </div>
  );

  return (
    <div>
      {["left"].map((anchor) => (
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
