const Todos = async () => {


  const slowresponse = await  fetch("https://procodrr.vercel.app/?sleep=4000");
  const data = await slowresponse.json();
  console.log(data);

  const response = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=10");
  const todos = await response.json();
  console.log(todos);

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Welcome to Our Todos</h1>
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
    </div>
  );
};

export default Todos;
