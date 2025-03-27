
export default function ServiceItem({serviceName}) {

      if(typeof window === "undefined"){
            console.log("running service item");
      } else{
            console.log("running clinet service item");
      }
        return (
            <>
            <p style={{display:"none"}}>Service Item</p>
            <li>{serviceName}</li>
            </>
        )    
      }

