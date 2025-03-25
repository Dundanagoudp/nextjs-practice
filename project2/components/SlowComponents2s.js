
const SlowComponents2s= async()=> {
      const slowresponse = await  fetch("https://procodrr.vercel.app/?sleep=4000");
      const data = await slowresponse.json();
      console.log(data);
  return (
      <div>
      {JSON.stringify(data)}
    </div>
  )
}

export default SlowComponents2s