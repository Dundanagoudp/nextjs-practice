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
