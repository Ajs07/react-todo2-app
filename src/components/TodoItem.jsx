import React, {useContext} from 'react'
import { TodoContext } from '../App'

//1.  Menerima function toggleCompleted,deleteTodo sebagai sebuah prop
//2. Hapus toggleCompleted dan deleteTodo dari props
const TodoItem = ({ todo }) => {
  // Peroleh "toggleCompleted" dan "deleteTodo" dari TodoContext
  /*Memperoleh function toggleCompleted dan deleteTodo dari TodoContext menggunakan useContext.
  Hanya nilai yang ditentukan dalam value dari TodoContext.Provider yang dapat diperoleh dengan useContext. */
  const { toggleCompleted, deleteTodo } = useContext(TodoContext)
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
          <button style={styles.button} onClick={() => {
            deleteTodo(todo.id)}}>x</button>
        </div>
    )
}

const styles = {
  todoItem: {
    border: '2px solid #f4f4f4',
    fontSize: '24px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 20px',
  },
  checkbox: {
    height: '18px',
    width: '18px',
  },
  button: {
    backgroundColor: '#BB0000',
    color: '#fff',
    height: '30px',
    width: '30px',
    borderRadius: '100%',
    border: 'none',
    cursor: 'pointer',
    fontSize: '16px',
  },
}

export default TodoItem