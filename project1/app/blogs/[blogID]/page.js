"use client"; // Ensure this runs on the client-side

import Header from "@/app/compontest2/Header";
import { useEffect } from "react";

const Blog = ({ params }) => {
  const { blogID } = params;

  useEffect(() => {
    const randomNumber = Math.random();
    console.log(randomNumber);
    
    if (randomNumber < 0.5) {
      throw new Error("Error occurred on client-side");
    }
  }, []);

  return (
    <>
      <Header />
      <div>
        <h1>Welcome to Our Blog {blogID}</h1>
        <h2>Blog ID: {blogID}</h2>
        <h3>Date: {new Date().toLocaleString()}</h3>
        <p>This is blog {blogID} page.</p>
      </div>
    </>
  );
};

export default Blog;
