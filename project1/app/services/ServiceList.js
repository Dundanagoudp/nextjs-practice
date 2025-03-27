
import ServiceItem from "./ServiceItem"

export default function ServiceList({children}) {

  return (
   <>
   <h3>Service List</h3>
   <ul className="services-list">{children}</ul>
   </>
  )
}
