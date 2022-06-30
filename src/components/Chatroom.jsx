import React, { useState } from "react";
import Post from "./Post";
import AddPost from "./AddPost";
import {
  Box,
  Button,
  Modal,
  TextField,
  Typography,
  Container,
} from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 300,

  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
};
const Chatroom = (props) => {
  const [open, setOpen] = useState(true);
  const [name, setName] = useState("");
  const handleModel = (event) => {
    event.preventDefault();
    setOpen(!open);
  };
  const postArray = [
    {
      /* id: "1",
      content: "this is a post",
      user: name,
      createdAt: new Date(), */
    },
  ];
  const [Posts, setPostArray] = useState(postArray);

  const pushToArray = (newPost) => {
    setPostArray([newPost, ...Posts]);
  };
  return (
    <>
      <Modal
        open={open}
        // onClose={handleModel}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          &nbsp;&nbsp;
          <Typography id="modal-modal-title" variant="h5" component="h6">
            Login
          </Typography>
          &nbsp;
          <form
            style={{ display: "flex", flexDirection: "column" }}
            onSubmit={handleModel}
          >
            <Box sx={{ display: "flex", alignItems: "flex-end", mt: "2rem" }}>
              <AccountCircle sx={{ color: "action.active", mr: 1, my: 0.5 }} />
              <TextField
                required
                id="name"
                name="name"
                label="UserName"
                variant="standard"
                type="text"
                onChange={(event) => setName(event.target.value)}
                value={name}
              />
            </Box>

            <Button
              sx={{ mt: "2rem", mb: "5rem", pr: ".5rem" }}
              type="submit"
              variant="contained"
            >
              Login
            </Button>
          </form>
        </Box>
      </Modal>
      <Container
        className="Posts"
        maxWidth="md"
        sx={{
          bgcolor: "#caf0f8",
          height: "95vh",
          overflow: "scroll",
          mb: "5vh",
        }}
      >
        {Posts.map((post) => <Post {...post} key={post.id} />).reverse()}
        <AddPost name={name} newpost={pushToArray} />
      </Container>
    </>
  );
};

export default Chatroom;
