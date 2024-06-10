import React, { useState } from 'react'
import TodoForm from './components/TodoForm'
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

    // Definisikan function deleteTodo
    const deleteTodo = (todoId) => {
      const updatedTodos = todos.filter((todo) => todo.id !== todoId)
      setTodos(updatedTodos)
    }

    // Definisikan function addTodo
    const addTodo = (todoTitle) => {
      if (todoTitle === '') {
        return // Tambahkan validasi jika ternyata tidak ada yang diketikkan sebagai title
      }

      // Buat data newTodo menggunakan nilai dari todoTitle
      const newTodo = {
        id: todos.length + 1,
        title: todoTitle,
        completed: false
      }

      // DefinisikanupdateTodos dalam format [{...}, {...}, {...}] di mana data new todo ditambahkan menggunakan method concat dan perbarui state todos
      const updateTodos = todos.concat(newTodo)
      setTodos(updateTodos)
    }

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>My Todo List</h1>
      <TodoForm addTodo={addTodo}/>
      {/* Teruskan function toggleCompleted ke 
      component Todos */}
      <Todos todos={todos} toggleCompleted={toggleCompleted} deleteTodo={deleteTodo}/>
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