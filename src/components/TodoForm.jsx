import { useState } from "react"

const TodoForm = ({ addTodo }) => {
  // Mendefinisikan state title menggunakan useState dan mengatur nilai awal menjadi string kosong ('').
  const [title, setTitle] = useState('')

  // Definisikan function handleSubmit dengan method-nya adalah preventDefault() yang menghentikan semua fitur browser dalam membatalkan event-event.
  const handleSubmit = (event) => {
    event.preventDefault()
    addTodo(title) 
    setTitle('')// teruskan "title sebagai argument"
  }

  const handleChangeTitle = (event) => {
    setTitle(event.target.value)
  }

  return (
    <div style={styles.container}>
      <form
        // Panggil function handleSubmit dengan argument "event"
        onSubmit={(event) => {
          handleSubmit(event)
        }}
      >
        <input
          type="text"
          placeholder="Add your Todo"
          style={styles.formInput}
          onChange={(event) => {handleChangeTitle(event)}}
          value={title}
        />
        <button style={styles.button}>Add Todo</button>
      </form>
    </div>
  )
}

const styles = {
  container: {
    marginBottom: '32px',
  },
  formInput: {
    height: '66px',
    width: '40%',
    fontSize: '16px',
    padding: '0 16px',
  },
  button: {
    height: '72px',
    fontSize: '16px',
  },
}

export default TodoForm