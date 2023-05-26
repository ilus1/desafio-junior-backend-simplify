import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import Title from '../Title';
import Field from '../Field';
import StatusField from '../StatusField';
import PriorityField from '../PriorityField';
import { Container, SaveButton } from './styles';

const TaskForm = ({ task, onClose }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState(false);
  const [priority, setPriority] = useState(null);
  const [priorities, setPriorities] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/priority')
      .then(response => {
        setPriorities(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const saveTask = () => {
    console.log(priority)
    axios.post('http://localhost:8080/task', {
      name,
      description,
      priority: priorities.find(p => p.id === priority),
      accomplished: status,
    }).then(response => {
      console.log(response);
    }).catch(error => {
      console.log(error);
    });

    onClose();
  }

  return (
    <Container>
      <Title title={ task ? "Editar Tarefa" : "Nova tarefa"} />
      <Field label="Nome" value={name} onChange={(name) => setName(name)} placeholder="Digite o nome da tarefa" />
      <Field label="Descrição" value={description} onChange={(desc) => setDescription(desc)} placeholder="Descrição da tarefa" />
      <StatusField label="Finalizada" value={status} onChange={() => setStatus(!status)} />
      <PriorityField label="Prioridade" choices={priorities} value={priority} onChange={(priority) => setPriority(priority)} />
      <SaveButton onClick={() => saveTask()}>Salvar</SaveButton>
    </Container>
  )
}

TaskForm.propTypes = {
  task: PropTypes.object,
  onClose: PropTypes.func.isRequired,
}

export default TaskForm;
