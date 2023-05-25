import { useEffect, useState } from 'react'
import axios from 'axios'

import './App.css'
import TaskColumn from './components/TaskColumn'
import Task from './components/Task'

function App() {
  const [tasks, setTasks] = useState(null)

  useEffect(() => {
    axios.get('http://localhost:8080/task')
      .then(response => {
        setTasks(response.data)
      })
      .catch(error => {
        console.log(error)
      })
  }, [])

  return (
    <div style={{ display: 'flex', justifyContent: 'space-around', width: '100%'}}>
      <TaskColumn title="Lista de tarefas">
        {tasks && tasks.map(task => (
          <Task key={task.id} task={task} />
        ))}
      </TaskColumn>
    </div>
  )
}

export default App
