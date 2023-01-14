import React from "react";

const PostItem = ({ date, tag, title, body, link }) => {
  return (
    <article className="post-item">
      <p className="date">{date}</p>
      <h5 className="tag">{tag}</h5>
      <h3 className="title">{title}</h3>
      <p className="body">
        {body}
      </p>
      <a href="#">Read Post</a>
    </article>
  );
};

export default PostItem;
