// import Posts from './Posts';
import React from "react";
import Box from "@mui/material/Box";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Chatroom1 from "./pages/Chatroom1";
import Chatroom2 from "./pages/Chatroom2";
import Welcome from "./components/Welcome";
const App = () => {
  return (
    <Box>
      <Navbar />
      <Routes>
        <Route index path="/" element={<Welcome />} />
        <Route path="/Chatroom1" element={<Chatroom1 />} />
        <Route path="/Chatroom2" element={<Chatroom2 />} />
        <Route component={Error} />
      </Routes>
    </Box>
  );
};
export default App;
