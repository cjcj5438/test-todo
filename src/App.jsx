import { useState } from 'react'
import './App.css'

function App() {
  console.log('AA13 debug')
  const [todos, setTodos] = useState([])
  const [inputValue, setInputValue] = useState('')
  const aa12MissingVar = '修复成功 - 未定义变量已正确定义'

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
        <div className="smoke-banner">
          🤖 AA SWARM SMOKE - AUTOMATED TESTING 🤖
        </div>
        <h1>Todo List</h1>
        <p className="hint-text">AA direct swarm ok.</p>
        <div className="aa10-retry-review">
          🔄 AA10 Retry Review Reset: 请重新审查并确认修改内容
        </div>

        <div className="aa12-repair-loop">
          🚨 AA12 Repair Loop Test: {aa12MissingVar} - 这里故意引用未定义变量制造错误
        </div>

        <div className="aa13-repair-loop">
          AA13 repair loop passed.
        </div>

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
        <div className="version-info">v1.0.0</div>
      </div>
    </div>
  )
}

export default App
