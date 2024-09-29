import React, { useState } from 'react'
import Nginput from './Components/Nginput'
import List from './Components/List'
import './index.css'

function App() {
  const [todos, setTodos] = useState([])

  const addTodos = (data) => {
    data ? setTodos((prevData) => [...prevData, data]) : alert('Isi todonya dulu dong..')
  }

  const hapusTodos = (index) => {
    const newTodos = todos.filter((_,i) => i != index)
    setTodos(newTodos)
  }

  return (
    <div className='container-center'>
      <Nginput onSubmit={addTodos}/>
      <List datas={todos} deleteTodos={hapusTodos}/>
    </div>
  )
}

export default App