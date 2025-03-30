import Header from "@/app/compontest2/Header";
import Link from "next/link";

export const dynamicParams = false; // Ensures only pre-defined params are used
export const revalidate = 10; // Enables ISR (Incremental Static Regeneration)

export async function generateStaticParams() {
  // SSG - Statically generates pages for these blog IDs
  return [
    { blogID: "1" },
    { blogID: "2" },
    { blogID: "3" },
    { blogID: "4" },
    { blogID: "5" },
  ];
}

// Blog page component (SSG)
const Blog = async ({ params }) => {
  const { blogID } = params; // Correct destructuring

    // if(blogID % 2 === 0) {

    //   throw new Error("Blog ID should be odd");

    // }

    const randomNumber = Math.random();
   console.log(randomNumber);
   
    if(randomNumber < 0.5) {
      throw new Error("Error occured");
    }
   
  return (
    <>
      <Header />
      <div >
        <h1>Welcome to Our Blog {blogID}</h1>
        <h2>Blog ID: {blogID}</h2>
        <h3>Date: {new Date().toLocaleString()}</h3>
        <p>This is blog {blogID} page.</p>
      </div>
    </>
  );
};

export default Blog;
