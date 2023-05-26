import { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import Title from '../Title';
import Field from '../Field';
import { sortByName } from '../../utils/sortUtils';
import ModalContext from '../../contexts/ModalContext';
import { TasksContext } from '../../contexts/TasksContext';
import StatusField from '../StatusField';
import PriorityField from '../PriorityField';
import { Container, SaveButton } from './styles';

const TaskForm = ({ task, onClose }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState(false);
  const [priority, setPriority] = useState(null);
  const [priorities, setPriorities] = useState([]);

  const { setShowModal } = useContext(ModalContext);
  const { tasks, setTasks } = useContext(TasksContext);

  useEffect(() => {
    axios.get('http://localhost:8080/priority')
      .then(response => {
        setPriorities(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    if (task) {
      setName(task.name);
      setDescription(task.description && task.description);
      setPriority(task.priority ? task.priority.id : false);
      setStatus(task.accomplished);
    }
  }, [task]);


  const editTask = () => {
    axios.put(`http://localhost:8080/task/${task.id}`, {
      name,
      description,
      priority: priorities.find(p => p.id === priority),
      accomplished: status,
    }).then(response => {
      setTasks(tasks.map(t => t.id === task.id ? response.data : t).sort(sortByName));
    }).catch(error => {
      console.log(error);
    });

    setShowModal(false);
  }

  const saveTask = () => {
    const newTask = {
      name,
      description,
      priority: priorities.find(p => p.id === priority),
      accomplished: status,
    }

    axios.post('http://localhost:8080/task', {
      ...newTask,
    }).then(response => {
      setTasks([...tasks, response.data].sort(sortByName));
    }).catch(error => {
      console.log(error);
    });

    setShowModal(false);
  }

  return (
    <Container>
      <Title title={task ? "Editar Tarefa" : "Nova tarefa"} />
      <Field label="Nome:" value={name} onChange={(name) => setName(name)} placeholder="Digite o nome da tarefa" />
      <Field label="Descrição:" value={description} onChange={(desc) => setDescription(desc)} placeholder="Descrição da tarefa" />
      <PriorityField label="Prioridade:" choices={priorities} value={priority} onChange={(priority) => setPriority(priority)} onClose={onClose}/>
      <StatusField label="Finalizada" value={status} onChange={() => setStatus(!status)} />
      <SaveButton onClick={() => task ? editTask() : saveTask()}>Salvar</SaveButton>
    </Container>
  )
}

TaskForm.propTypes = {
  task: PropTypes.object,
  onClose: PropTypes.func.isRequired,
}

TaskForm.defaultProps = {
  task: null,
}

export default TaskForm;
