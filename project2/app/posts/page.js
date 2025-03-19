"use client";

import { useEffect, useState } from "react";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=10");
      const data = await response.json();
      setPosts(data);
    }
    fetchPosts();
  }, []); // Added dependency array to run effect only once

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Welcome to Our Blog</h1>
      <div>
        {posts.map((post) => (
          <div
            key={post.id}
            style={{
              border: "1px solid #ddd",
              padding: "15px",
              margin: "10px auto",
              maxWidth: "600px",
              borderRadius: "8px",
              boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
            }}
          >
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Posts;
