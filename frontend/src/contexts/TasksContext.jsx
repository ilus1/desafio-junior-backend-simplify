import { createContext, useEffect, useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";

export const TasksContext = createContext({});

export function TasksProvider({ children }) {
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
    <TasksContext.Provider value={{ tasks, setTasks }}>
      {children}
    </TasksContext.Provider>
  )
}

TasksProvider.propTypes = {
  children: PropTypes.node.isRequired
}
