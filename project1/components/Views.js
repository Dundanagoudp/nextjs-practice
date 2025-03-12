import React from 'react'

export default async function Views() {
await new Promise((resolve) => {
  setTimeout(() => {
    resolve();
  }, 5000);
})

  return (
    <div>
      20K Views
    </div>
  )
}
