import Link from "next/link";
import Header from "./compontest2/Header";

export const dynamic = 'force-dynamic';

const Home = () => {

  const randomNumber = Math.random();
  console.log(randomNumber);

  if (randomNumber < 0.5) {
    throw new Error("Error occurred on client-side");
  }

  return (
    <>
       <Header />
      <div>
        <h1>Home Page</h1>
        <p>Welcome to our website!</p>
      </div>
    </>
  );
};

export default Home;