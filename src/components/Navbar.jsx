import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircle from "@mui/icons-material/AccountCircle";
import React, { useState } from "react";
import { Logout, Settings } from "@mui/icons-material";
import TagIcon from "@mui/icons-material/Tag";
import { Link } from "react-router-dom";
import {
  alpha,
  AppBar,
  IconButton,
  styled,
  Toolbar,
  Typography,
  InputBase,
  Badge,
  Box,
  Menu,
  MenuItem,
  Divider,
  Avatar,
  ListItemIcon,
  Paper,
  List,
  ListItem,
  ListItemButton,
  CssBaseline,
} from "@mui/material";

const Search = styled("div")(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  width: "auto",
  display: "flex",
  flexGrow: 4,
}));

const Navbar = (props) => {
  const [open, setOpen] = useState(false);
  const [sidebar, setSidebar] = useState(false);
  const drawerWidth = 240;
  const showSidebar = () => setSidebar(!sidebar);
  const SidebarData = [
    { title: "Chatroom1", path: "/Chatroom1", icon: <TagIcon /> },
    { title: "Chatroom2", path: "/Chatroom2", icon: <TagIcon /> },
  ];

  return (
    <AppBar position="sticky">
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2, display: { xs: "block" } }}
          onClick={showSidebar}
        >
          <MenuIcon />
        </IconButton>
        <Drawer
          open={sidebar}
          onClose={showSidebar}
          sx={{
            display: { xs: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              color: "inherit",
            },
          }}
          onClick={showSidebar}
        >
          &nbsp;
          <List>
            <h2>Channals</h2>
            <CssBaseline />
            <Divider />
            {SidebarData.map((item, index) => {
              return (
                <>
                  <ListItem disablePadding key={index} flex={1}>
                    <ListItemButton>
                      <Link
                        to={item.path}
                        style={{
                          textDecoration: "none",
                          display: "flex",
                          width: "100%",
                          color: "inherit",
                          margin: ".1rem",
                        }}
                      >
                        <div>{item.icon}</div>
                        <div
                          style={{
                            textDecoration: "none",
                            padding: "5px",
                          }}
                        >
                          {item.title}
                        </div>
                      </Link>
                    </ListItemButton>
                  </ListItem>
                </>
              );
            })}
          </List>
        </Drawer>

        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
        >
          LiveChat
        </Typography>
        <Search>
          <SearchIcon sx={{ p: 0.5 }} />
          <InputBase sx={{ color: "inherit" }} placeholder="Search…" />
        </Search>
        <Box
          sx={{ flexGrow: 1, display: "flex", justifyContent: "space-evenly" }}
        >
          <IconButton
            sx={{ display: { xs: "none", sm: "block" } }}
            size="large"
            aria-label="show 17 new notifications"
            color="inherit"
          >
            <Badge badgeContent={2} color="error">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <IconButton
            onClick={(e) => setOpen(true)}
            size="large"
            edge="end"
            aria-label="account of current user"
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
        </Box>
        <Paper elevation={24}>
          <Menu
            id="demo-positioned-menu"
            aria-labelledby="demo-positioned-button"
            open={open}
            onClose={(e) => setOpen(false)}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
          >
            <MenuItem>
              <Avatar sx={{ width: 24, height: 24, m: 0.5 }} /> Profile
            </MenuItem>
            <MenuItem>
              <Avatar sx={{ width: 24, height: 24, m: 0.5 }} /> My account
            </MenuItem>
            <Divider />
            <MenuItem>
              <ListItemIcon>
                <Settings fontSize="small" />
              </ListItemIcon>
              Settings
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <Logout fontSize="small" />
              </ListItemIcon>
              Logout
            </MenuItem>
          </Menu>
        </Paper>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
