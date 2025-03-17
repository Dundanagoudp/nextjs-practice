// "use client";

import { useState } from "react";

export default function Likes() {
const [likesCount, setLikesCount] = useState(0);
console.log(useState);
console.log(likesCount);

// console.log(window);
// if(typeof localStorage !== "undefined"){
//   console.log(localStorage);
// }
// console.log(Object);

console.log("Likes Page");


  return (
    <div  onClick={() => setLikesCount((prev)=> prev + 1)}>
      {likesCount} Likes
    </div>
  )
}


// server component executes on the server


