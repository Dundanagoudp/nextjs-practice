'use client'; // This makes the entire page a Client Component

import Comments from "@/components/Comments";
import Head from "next/head";  
import Link from "next/link";
import Header from "../compontest2/Header";
import { useState } from "react";

const About = () => {
  const [fruits, setFruits] = useState(["apple", "banana", "orange"]);  
  console.log('About Page');
  
  return (
    <>
      <Head>
        <title>About Us</title>
        <meta name="description" content="Learn about our company" />
      </Head>
      
      <Header/>
      
      <main className="container">
        <h1>About Us</h1>
        <p>We are a company dedicated to providing quality services.</p>
        <button onClick={() => setFruits(null)}>click me</button>
    {
      fruits.map((fruit, index) => (
        <p key={index}>{fruit}</p>
      ))
    }
        {/* <Comments /> */}
      </main>
    </>
  );
};

export default About;