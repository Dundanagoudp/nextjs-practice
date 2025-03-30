"use client";

import Link from "next/link";
import Views from "@/components/Views";
import Likes from "@/components/Likes";
import Comments from "@/components/Comments";
import { Suspense } from "react";
import Loading from "@/components/Loading";
import Button from "@/components/Button";
import Header from "@/app/compontest2/Header";
const Blogs = () => {
  console.log("Blogs Page");
  return (
    <>
            {/* <Header/> */}
      <div style={{position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)"}}>
        <h1>Welcome to Our Blog</h1>

       <div>

               
                <Likes/>
                <Comments/>
                <Views/>
       </div>
      </div>
    </>
  );
};

export default Blogs;