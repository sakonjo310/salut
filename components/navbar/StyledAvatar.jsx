import { useState } from "react";
import { NextLinkComposed } from "../../src/Link";
import { signOut } from "next-auth/react";

import {
  Logout,
  Bookmarks,
  Liquor,
  Dashboard,
  Home,
} from "@mui/icons-material";

import {
  Avatar,
  IconButton,
  Tooltip,
  Menu,
  MenuItem,
  Divider,
  ListItemIcon,
  Paper,
  ListItemText,
} from "@mui/material";

function StyledAvatar(props) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Tooltip title="Account">
        <IconButton
          onClick={handleClick}
          aria-controls={open ? "account-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
        >
          <Avatar alt={props.name} src={props.image} />
        </IconButton>
      </Tooltip>
      <Paper sx={{ width: 320, maxWidth: "100%" }}>
        <Menu
          anchorEl={anchorEl}
          id="account-menu"
          open={open}
          onClose={handleClose}
          onClick={handleClose}
          transformOrigin={{ horizontal: "right", vertical: "top" }}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        >
          <MenuItem>
            <IconButton
              component={NextLinkComposed}
              to={{
                pathname: "/",
              }}
            >
              <ListItemIcon>
                <Home fontSize="small" />
              </ListItemIcon>
              <ListItemText>Home</ListItemText>
            </IconButton>
          </MenuItem>
          <MenuItem>
            <IconButton
              component={NextLinkComposed}
              to={{
                pathname: "/user",
              }}
            >
              <ListItemIcon>
                <Dashboard fontSize="small" />
              </ListItemIcon>
              <ListItemText>Dashboard</ListItemText>
            </IconButton>
          </MenuItem>

          <MenuItem>
            <IconButton
              component={NextLinkComposed}
              to={{
                pathname: "/user/favorites",
              }}
            >
              <ListItemIcon>
                <Bookmarks fontSize="small" />
              </ListItemIcon>
              <ListItemText>Favorites</ListItemText>
            </IconButton>
          </MenuItem>

          <MenuItem>
            <IconButton
              component={NextLinkComposed}
              to={{
                pathname: "/user/inventory",
              }}
            >
              <ListItemIcon>
                <Liquor fontSize="small" />
              </ListItemIcon>
              <ListItemText>Inventory</ListItemText>
            </IconButton>
          </MenuItem>
          <Divider />
          <MenuItem>
            <IconButton onClick={() => signOut({ callbackUrl: "/" })}>
              <ListItemIcon>
                <Logout fontSize="small" />
              </ListItemIcon>
              <ListItemText>Logout</ListItemText>
            </IconButton>
          </MenuItem>
        </Menu>
      </Paper>
    </>
  );
}

export default StyledAvatar;