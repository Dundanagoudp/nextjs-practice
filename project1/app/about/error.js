"use client";


export default function Error({ error, reset }) {

  return (
    <div>
      <h1>Error</h1>
      <p>There was an error loading the blog.</p>
      <button
        onClick={() => {   
                  reset();      
        }}
      >
        Try Again
      </button>
    </div>
  );
}
