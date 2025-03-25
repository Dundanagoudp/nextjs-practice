
const SlowComponents3s= async()=> {
      const slowresponse = await  fetch("https://procodrr.vercel.app/?sleep=5000");
      const data = await slowresponse.json();
      console.log(data);
  return (
    <div>
      {JSON.stringify(data)}
    </div>
  )
}

export default SlowComponents3s
