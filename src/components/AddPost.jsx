import React, { useState } from "react";
import "../firebase";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import { Container, Box } from "@mui/material";

const AddPost = ({ name, newpost }) => {
  /* const [title, setTitle] = useState(); */

  const [content, setContent] = useState();

  const add = (event) => {
    event.preventDefault();
    const post = {
      id: Date.now().toString(),
      content,
      user: name,
      createdAt: new Date(),
    };
    newpost(post);
    /* setTitle(""); */
    setContent("");
  };
  return (
    <form
      onSubmit={add}
      className="AddPost"
      style={{
        display: "flex",

        backgroundColor: "gray",
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        width: "100%",
      }}
    >
      {/* <input
        type="text"
        name="title"
        placeholder="Title"
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      /> */}
      <TextField
        variant="filled"
        sx={{ flexGrow: 5, marginBottom: ".1rem" }}
        type="text"
        name="content"
        placeholder="Type here...."
        value={content}
        onChange={(e) => {
          setContent(e.target.value);
        }}
      />
      <Button variant="contained" type="submit">
        <SendIcon sx={{ pr: ".5rem", flexGrow: 1, m: 0 }} />
        Send
      </Button>
    </form>
  );
};

export default AddPost;
