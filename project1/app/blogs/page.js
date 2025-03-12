import Link from "next/link";
import Views from "@/components/Views";
import Likes from "@/components/Likes";
import Comments from "@/components/Comments";
import { Suspense } from "react";
import Loading from "@/components/Loading";

const Blogs = () => {
  console.log("Blogs Page");
  return (
    <>
      <nav>
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
      </nav>
      <div style={{position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)"}}>
        <h1>Welcome to Our Blog</h1>
       <div>
       <ol className="blog-links">
          <li>
            <Link href="/blogs/1">Blog 1</Link>
          </li>
          <li>
            <Link href="/blogs/2">Blog 2</Link>
          </li>
          <li>
            <Link href="/blogs/3">Blog 3</Link>
          </li>
        </ol>
        <Suspense fallback={<Loading children="views"/>}>
        <Views/>
        </Suspense>
        <Suspense fallback={<Loading children="Likes"/>}>
        <Likes/>
        </Suspense>
        <Suspense fallback={<Loading children="Comments"/>}>
        <Comments/>
        </Suspense>
       </div>
      </div>
    </>
  );
};

export default Blogs;