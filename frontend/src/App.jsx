import './App.css'
import TaskColumn from './components/TaskColumn'
import { TasksProvider } from './contexts/TasksContext'
import { ModalProvider } from './contexts/ModalContext'

function App() {
  return (
    <TasksProvider>
      <ModalProvider>
        <div style={{ display: 'flex', justifyContent: 'space-around', width: '100%'}}>
          <TaskColumn />
        </div>
      </ModalProvider>
    </TasksProvider>
  )
}

export default App
