import React from 'react';

import moment from 'moment';

const Post = (props) => {
  const { title, content, user,createdAt, stars, comments } = props;
  return (
    <article className="Post">
      <div className="Post--content">
        <h3>{title}</h3>
        <div>{content}</div>
      </div>
      <div className="Post--meta">
        <div>
          <p>
            <span role="img" aria-label="star">
              ⭐️
            </span>
            {stars}
          </p>
          <p>
            <span role="img" aria-label="comments">
              🙊
            </span>
            {comments}
          </p>
        
          <p>Posted by {user.displayName}</p>
          <p>{moment(createdAt).calendar()}</p>
        </div>
        <div>
          <button className="star">Star</button>
          <button className="delete">Delete</button>
        </div>
      </div>
    </article>
  );
};

export default Post;
