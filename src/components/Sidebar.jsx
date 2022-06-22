import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  Toolbar,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React, { useState } from "react";

const Sidebar = () => {
  const [sidebar, setsidebar] = useState(useMediaQuery("(min-width:600px)"));
  return (
    <Box flex={1.3} sx={{ display: { xs: "none", sm: "flex" } }}>
      {/* <Paper sx={{ width: 320, maxWidth: "100%", height: "100vh" }}>
        <MenuList open={false}>
          <MenuItem>Channels</MenuItem>
          <MenuItem sx={{ ml: 2 }}>#Welcome</MenuItem>
          <MenuItem sx={{ ml: 2 }}>#Promotions</MenuItem>
          <MenuItem sx={{ ml: 2 }}>#Discussion</MenuItem>
        </MenuList>
      </Paper> */}
      <Drawer variant="permanent" anchor="left">
        <Toolbar> </Toolbar>
        <Divider />
        <List>
          <ListItem disablePadding>Channels</ListItem>
        </List>
        <Divider />
      </Drawer>
    </Box>
  );
};

export default Sidebar;
