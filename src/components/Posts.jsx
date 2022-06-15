import React, { useState } from 'react'
import Post from './Post';
import AddPost from './AddPost';
import { firestore } from '../firebase';

const Posts = (props) => {
  const
    postArray = [
      {
        id: '1',
        title: 'A Very Hot Take',
        content:
          'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis suscipit repellendus modi unde cumque, fugit in ad necessitatibus eos sed quasi et! Commodi repudiandae tempora ipsum fugiat. Quam, officia excepturi!',
        user: {
          uid: '123',
          displayName: 'Bill Murray',
          email: 'billmurray@mailinator.com',
          photoURL: 'https://www.fillmurray.com/300/300',
        },
        stars: 1,
        comments: 47,
        createdAt: new Date(),
      }
    ];
  const [Posts,setPostArray] = useState(postArray);
  
  const pushToArray = newPost => {
  setPostArray([newPost,...Posts]);
  }
  return (
    <section className="Posts">
      <AddPost newpost={pushToArray} />
      {Posts.map((post) => <Post {...post} key={post.id} />)}
    </section>
  );
};

export default Posts;
