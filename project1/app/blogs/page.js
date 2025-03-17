"use client";

import Link from "next/link";
import Views from "@/components/Views";
import Likes from "@/components/Likes";
import Comments from "@/components/Comments";
import { Suspense } from "react";
import Loading from "@/components/Loading";
import Button from "@/components/Button";

const Blogs = () => {
  console.log("Blogs Page");
  return (
    <>
      {/* <nav>
        <ul className="navbar">
          <li>
            <Link href="/" className="nav-link">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="nav-link">
              About
            </Link>
          </li>
          <li>
            <Link href="/services" className="nav-link">
              Services
            </Link>
          </li>
          <li>
            <Link href="/blogs" className="nav-link active">
              Blogs
            </Link>
          </li>
        </ul>
      </nav> */}
      <div style={{position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)"}}>
        <h1>Welcome to Our Blog</h1>
        {/* <Button/> */}
       <div>

        {/* <Suspense fallback={<Loading children="views"/>}>
        <Views/>
        </Suspense>
        <Suspense fallback={<Loading children="Likes"/>}>
        <Likes/>
        </Suspense>
        <Suspense fallback={<Loading children="Comments"/>}>
        <Comments/>
        </Suspense> */}
                <Likes/>
                <Comments/>
                <Views/>
       </div>
      </div>
    </>
  );
};

export default Blogs;