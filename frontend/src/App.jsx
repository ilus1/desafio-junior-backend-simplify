import { useEffect, useState } from 'react'
import axios from 'axios'

import './App.css'
import TaskColumn from './components/TaskColumn'
import { TasksProvider } from './contexts/TasksContext'

function App() {
  return (
    <TasksProvider>
      <div style={{ display: 'flex', justifyContent: 'space-around', width: '100%'}}>
        <TaskColumn />
      </div>
    </TasksProvider>
  )
}

export default App
