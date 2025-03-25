
const TodoItems= async()=> {

      const response = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=10");
      const todos = await response.json();
      console.log(todos);
  return (
      <div>
      {todos.map((todo) => (
        <div
          key={todo.id}
          style={{
            border: "1px solid #ddd",
            padding: "15px",
            margin: "10px auto",
            maxWidth: "600px",
            borderRadius: "8px",
            boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
          }}
        >
          <h3>{todo.title}</h3>
          <p>Completed: {todo.completed ? "Yes" : "No"}</p>
        </div>
      ))}
    </div>
  )
}

export default TodoItems