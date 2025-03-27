import Comments from "@/components/Comments";
import Head from "next/head";  
import Link from "next/link";
import Header from "../compontest2/Header";

const About = () => {
  console.log('About Page');
  return (
    <>
      <Head>
        <title>About Us</title>
        <meta name="description" content="Learn about our company" />
      </Head>
      
      <Header/>
      
      <main className="container">  {/* Added semantic main tag */}
        <h1>About Us</h1>
        <p>We are a company dedicated to providing quality services.</p>
        <Comments />
      </main>
    </>
  );
};

export default About;