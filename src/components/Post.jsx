import React from "react";

import moment from "moment";
import { Typography } from "@mui/material";

const Post = (props) => {
  const { content, user, createdAt } = props;
  return (
    <>
      <div
        style={{
          backgroundColor: "#90e0ef",
          margin: ".5rem",
          padding: "0 2rem",
          width: "fit-content",
          borderRadius: "10px ",
          clipPath: "polygon(100% 0, 100% 100%, 8% 100%, 8% 11%, 0 0)",
        }}
      >
        <Typography variant="caption" display="block" gutterBottom>
          {user}
        </Typography>

        <Typography variant="body1" gutterBottom sx={{ paddingLeft: "1rem" }}>
          {content}
        </Typography>
        <Typography variant="caption" gutterBottom>
          {moment(createdAt).calendar()}
        </Typography>
      </div>
    </>
  );
};

export default Post;
