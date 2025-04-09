"use client";


export default function Error({ error, reset }) {

  return (
    <div>
      <h1>Error</h1>
      <p>something went wrong in home page.</p>
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
