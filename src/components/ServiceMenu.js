// import React from "react";
// import { withStyles } from "@material-ui/core/styles";
// import Menu from "@material-ui/core/Menu";
// import MenuItem from "@material-ui/core/MenuItem";
// import ListItemText from "@material-ui/core/ListItemText";
// import { Button } from '@material-ui/core'

// const StyledMenu = withStyles({
//   paper: {
//     border: "1px solid #d3d4d5",
//   },
// })((props) => (
//   <Menu
//     elevation={0}
//     getContentAnchorEl={null}
//     anchorOrigin={{
//       vertical: "bottom",
//       horizontal: "center",
//     }}
//     transformOrigin={{
//       vertical: "top",
//       horizontal: "center",
//     }}
//     {...props}
//   />
// ));

// const StyledMenuItem = withStyles((theme) => ({
//   root: {
//     "&:focus": {
//       backgroundColor: theme.palette.primary.main,
//       "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
//         color: theme.palette.common.white,
//       },
//     },
//   },
// }))(MenuItem);

// export default function CustomizedMenus() {
//   const [anchorEl, setAnchorEl] = React.useState(null);

//   const handleClick = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleClose = () => {
//     setAnchorEl(null);
//   };

//   return (
//     <div>
//       <Button
//         aria-controls="customized-menu"
//         aria-haspopup="true"
//         color='inherit'
//         onMouseEnter={handleClick}
//       >
//         Services
//       </Button>
//       <StyledMenu
//         id="customized-menu"
//         anchorEl={anchorEl}
//         keepMounted
//         open={Boolean(anchorEl)}
//         onClose={handleClose}
//       >
//         <StyledMenuItem>
//           <ListItemText primary="Монтаж" />
//         </StyledMenuItem>
//         <StyledMenuItem>
//           <ListItemText primary="Транспорт" />
//         </StyledMenuItem>
//         <StyledMenuItem>
//           <ListItemText primary="Качване" />
//         </StyledMenuItem>
//       </StyledMenu>
//     </div>
//   );
// }
import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

function SimpleMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  function handleClick(event) {
    if (anchorEl !== event.currentTarget) {
      setAnchorEl(event.currentTarget);
    }
  }

  function handleClose() {
    setAnchorEl(null);
  }

  return (
    <div>
      <Button
      color='inherit'
        aria-owns={anchorEl ? "simple-menu" : undefined}
        aria-haspopup="true"
        onClick={handleClick}
        onMouseOver={handleClick}
      >
        Services
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        MenuListProps={{ onMouseLeave: handleClose }}
      >
        <MenuItem onClick={handleClose}>Монтаж</MenuItem>
        <MenuItem onClick={handleClose}>Транспорт</MenuItem>
        <MenuItem onClick={handleClose}>Качване</MenuItem>
      </Menu>
    </div>
  );
}

export default SimpleMenu;