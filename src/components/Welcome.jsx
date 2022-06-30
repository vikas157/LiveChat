import { Box, Stack, Typography } from "@mui/material";
import React from "react";

const Welcome = () => {
  return (
    <Box>
      <Stack
        sx={{
          height: "88vh",
          width: "98vw",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="h6" component="h6">
          Welcome to LiveChat
        </Typography>

        <p>Go to the Chatrooms to chat with Friends.</p>
      </Stack>
      {/* <Modal
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
      </Modal> */}
    </Box>
  );
};

export default Welcome;
