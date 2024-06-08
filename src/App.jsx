import React, { useState } from 'react'
import Todos from './components/Todos'

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: 'Finish Progate React Course',
      completed: false,
    },
    {
      id: 2,
      title: 'Have lunch with Guru Domba',
      completed: false,
    },
    {
      id: 3,
      title: 'Study React with Ninja Ken',
      completed: false,
    },
  ])

    // Definisikan function toggleCompleted di sini
    const toggleCompleted = (todoId) => {
      // updatedTodos mendapatkan todos saat ini dan mengambil kembali data satu per satu dengan method map.
      const updateTodos = todos.map((todo) => {
        if (todo.id === todoId) {
          todo.completed = !todo.completed // memperbarui nilai completed yang berlawanan
        }
        return todo
      })
      setTodos(updateTodos)
    }

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>My Todo List</h1>
      {/* Teruskan function toggleCompleted ke component Todos */}
      <Todos todos={todos} toggleCompleted={toggleCompleted} />
    </div>
  )
}

const styles = {
  container: {
    textAlign: 'center',
    padding: '12px',
  },
  title: {
    fontSize: '36px',
  },
}

export default App