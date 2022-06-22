// import Posts from './Posts';
import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Navbar from "./Navbar";

const App = () => {
  return (
    <Box>
      <Navbar />
      <Stack direction="row">
        <Sidebar />

        <Feed />
      </Stack>
    </Box>
  );
};

export default App;
