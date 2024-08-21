import { useState } from 'react';

function App() {
  const [todo, setTodo] = useState(null as any)

  function handleSubmit(event: any) {
    event.preventDefault();
    const taskId = event.target.elements.taskid.value;
    fetch(`${import.meta.env.VITE_CANISTER_URL}/todos`,{
      method: 'POST',
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({id: taskId})
    })
      .then(response => response.json()).then((json) => {
        setTodo(json)
      });
  }

  return (
    <main>
      <img src="/logo2.svg" alt="DFINITY logo" />
      <br />
      <br />
      <form action="#" onSubmit={handleSubmit}>
        <label htmlFor="taskid">Enter Task ID: &nbsp;</label>
        <input id="taskid" alt="Task ID" type="text" />
        <button type="submit">Fetch Task</button>
      </form>
      <section id="greeting">{todo && todo.title}</section>
    </main >
  );
}

export default App;
