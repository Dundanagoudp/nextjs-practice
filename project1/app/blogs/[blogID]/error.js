"use client";

import { useRouter } from "next/navigation";
import { startTransition } from "react";

export default function Error({ error, reset }) {
  const router = useRouter();

  return (
    <div>
      <h1>Error</h1>
      <p>There was an error loading the blog.</p>
      <button
        onClick={() => {
            startTransition(() => {
                  router.refresh();
                  reset();  
            })
         
        }}
      >
        Try Again
      </button>
    </div>
  );
}
