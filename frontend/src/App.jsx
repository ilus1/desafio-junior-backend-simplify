import './App.css'

import TaskColumn from './components/TaskColumn'
import Task from './components/Task'

function App() {

  return (
    <div style={{ display: 'flex', justifyContent: 'space-around', width: '100%'}}>
      <TaskColumn title="Lista de tarefas">
        <Task task={{ id: 1, name: 'Tarefa 1', description: 'Descrição da tarefa 1', accomplished: true }} />
        <Task task={{ id: 2, name: 'Tarefa 2', description: 'Descrição da tarefa 2', accomplished: false }} />
        <Task task={{ id: 3, name: 'Tarefa 3', description: 'Descrição da tarefa 3', accomplished: false, priority: { name: 'Alta', color: '#F00000'} }} />
      </TaskColumn>
    </div>
  )
}

export default App
