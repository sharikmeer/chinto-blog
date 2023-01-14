import React from "react";
import PostItem from "../PostItem";

const posts = [
  {
    date: "April 29, 2021",
    tag: "WRITING",
    title: "Design Messy",
    body: "As designers we are too often worried about how we are perceived, and that means we present the clean version of our work. But that means we don’t share the journey, and isn’t that the best part?",
    link: "#",
  },
  {
    date: "April 29, 2021",
    tag: "WRITING",
    title: "Design Messy",
    body: "As designers we are too often worried about how we are perceived, and that means we present the clean version of our work. But that means we don’t share the journey, and isn’t that the best part?",
    link: "#",
  },
  {
    date: "April 29, 2021",
    tag: "WRITING",
    title: "Design Messy",
    body: "As designers we are too often worried about how we are perceived, and that means we present the clean version of our work. But that means we don’t share the journey, and isn’t that the best part?",
    link: "#",
  },
];
const Posts = () => {
  return (
    <main className="posts-wrapper">
      <h2 className="main-header">RECENT POSTS</h2>
      {posts.map((post) => (<PostItem {...post} />))}
    </main>
  );
};

export default Posts;
