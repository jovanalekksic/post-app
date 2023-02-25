import React from "react";
import axios from "axios";
import OnePost from "./OnePost";
import { useState, useEffect } from "react";

const PostsPage = () => {
  const [posts, setPosts] = useState();
  useEffect(() => {
    if (posts == null) {
      axios.get("api/posts").then((res) => {
        console.log(res.data);
        setPosts(res.data.posts);
      });
    }
  }, [posts]);

  return (
    <div>
      <h3>Theese are all posts from database.</h3>
      {posts == null ? (
        <></>
      ) : (
        posts.map((post) => <OnePost post={post} key={post.id} />)
      )}
    </div>
  );
};

export default PostsPage;
