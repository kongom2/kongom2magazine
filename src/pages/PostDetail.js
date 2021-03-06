import React from "react";
import Post from "../components/Post";
import CommentList from "../components/CommentList";
import CommentWrite from "../components/CommentWrite";

const PostDetail = () => {
  return (
    <React.Fragment>
      <Post></Post>
      <CommentWrite></CommentWrite>
      <CommentList></CommentList>
    </React.Fragment>
  );
};

export default PostDetail;
