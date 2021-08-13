import React from 'react'
import './App.css'
import Todo from './components/todo'
function App() {
  const todos = [
    { id: 1, title: "bring grocery", completed: false },
    { id: 2, title: "wash Dishes", completed: true },
  ]
  return (
    <div className="App">
      {
        todos.map((x) => {
          return (<Todo todo={x} />)
        })
      }
    </div>
  );
}

export default App;