import React from 'react'

export default async function Likes() {
      await new Promise((resolve) => {
            setTimeout(() => {
              resolve();
            }, 6000);
          })
  return (
    <div>
      5k Likes
    </div>
  )
}
