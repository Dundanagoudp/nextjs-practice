import SlowComponents2s from "@/components/SlowComponents2s";
import SlowComponents3s from "@/components/SlowComponents3s";
import TodoItems from "@/components/TodoItems";
import { Suspense } from "react";

const Todos = async () => {
 

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Welcome to Our Todos</h1>
    <Suspense fallback="loding todos.." >
      <TodoItems />
      </Suspense> 
      <Suspense fallback={<div>loding slow components2..</div>} >
      <SlowComponents2s />
      </Suspense> 
      <Suspense fallback={<div>loding slow components3..</div>} >
      <SlowComponents3s />
      </Suspense>
           
    </div>

    
  );
};

export default Todos;
