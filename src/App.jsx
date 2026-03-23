import { useState } from 'react'
import './App.css'

function App() {
  const [todos, setTodos] = useState([])
  const [inputValue, setInputValue] = useState('')

  const handleAddTodo = (e) => {
    e.preventDefault()
    if (inputValue.trim()) {
      setTodos([
        ...todos,
        {
          id: Date.now(),
          text: inputValue.trim(),
          completed: false
        }
      ])
      setInputValue('')
    }
  }

  const handleToggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ))
  }

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const completedCount = todos.filter(todo => todo.completed).length
  const totalCount = todos.length

  return (
    <div className="app">
      <div className="todo-container">
        <h1>Todo List</h1>

        <form onSubmit={handleAddTodo} className="add-form">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Add a new todo..."
            className="todo-input"
          />
          <button type="submit" className="add-btn">Add</button>
        </form>

        {totalCount > 0 && (
          <div className="stats">
            <span>Total: {totalCount}</span>
            <span>Completed: {completedCount}</span>
            <span>Remaining: {totalCount - completedCount}</span>
          </div>
        )}

        <ul className="todo-list">
          {todos.map(todo => (
            <li key={todo.id} className={`todo-item ${todo.completed ? 'completed' : ''}`}>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => handleToggleTodo(todo.id)}
                className="todo-checkbox"
              />
              <span className="todo-text">{todo.text}</span>
              <button
                onClick={() => handleDeleteTodo(todo.id)}
                className="delete-btn"
              >
                ×
              </button>
            </li>
          ))}
        </ul>

        {todos.length === 0 && (
          <p className="empty-state">No todos yet. Add your first todo above!</p>
        )}
      </div>
    </div>
  )
}

export default App
