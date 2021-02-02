import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";
import {
  Drawer,
  Button,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from "@material-ui/core";
import { services } from './constants'

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
      {services.map((service) => {
        const {path, key, icon, label} = service;
        return (
          <Link to={path} className={classes.linksDecoration}>
            <ListItem button key={key}>
              <ListItemIcon>
                  {icon}
              </ListItemIcon>
              <ListItemText primary={label}/>
            </ListItem>
          </Link>
        )
      })}
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
