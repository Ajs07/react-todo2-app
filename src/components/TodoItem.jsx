import React from 'react'

// Menerima function toggleCompleted sebagai sebuah prop
const TodoItem = ({ todo, toggleCompleted }) => {
  // Mendefinisikan getTodoTitleStyle di sini
  // Cara dilakukan untuk mendefinisikan sebuah function untuk mengubah CSS
  const getTodoTitleStyle = () => {
    if (todo.completed === true) {
      return {textDecoration: 'line-through'}
    } else {
      return {textDecoration: 'none'}
    }
  }

    return (
        <div style={styles.todoItem}>
          {/* Menambahkan Checkbox lalu Panggil function getTodoTitleStyle.*/}
          <input type="checkbox" style={styles.checkbox} onChange={() => 
          // memberikan id dari todo sebagai argument  
          toggleCompleted(todo.id)}/>
          <p style={getTodoTitleStyle()}>{todo.title}</p>
        </div>
    )
}

// Menuliskan sebuah object berisikan property CSS langsung di dalam JSX
const styles = {
    todoItem: {
      border: '2px solid #f4f4f4',
      fontSize: '24px',
      // Tambahkan styles di bawah ini
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    // Tambahkan styles di bawah ini
    checkbox: {
      marginRight: '10px',
      height: '18px',
      width: '18px',
    },
  }

export default TodoItem