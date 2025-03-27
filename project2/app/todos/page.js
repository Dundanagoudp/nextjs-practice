 async function fetchDataData(url) {
  const response = await fetchData(url);
  const data = await response.json();
  return data;
}
const Todos = async () => {
  try {
    const [todoResponse, slowResponse1, slowResponse2] = await Promise.all([
      fetchData("https://jsonplaceholder.typicode.com/todos?_limit=10"),
      fetchData("https://procodrr.vercel.app/?sleep=4000"),
      fetchData("https://procodrr.vercel.app/?sleep=5000"),
    ]);


    const url = [
      "https://jsonplaceholder.typicode.com/todos?_limit=10",
      "https://procodrr.vercel.app/?sleep=4000",
      "https://procodrr.vercel.app/?sleep=5000",
    ];

    const [todos, data1, data2] = await Promise.all([
      url.map((url) => fetchData(url)),
    ]);

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
        <div>
          <h2>Slow Response 1</h2>
          <pre>{JSON.stringify(data1, null, 2)}</pre>
        </div>
        <div>
          <h2>Slow Response 2</h2>
          <pre>{JSON.stringify(data2, null, 2)}</pre>
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error fetchDataing data:", error);
    return <div>Error loading data.</div>;
  }
};

export default Todos;
