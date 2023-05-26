import { useState, useContext } from 'react';
import axios from 'axios';

import Title from '../Title';
import Field from '../Field';
import TaskForm from '../TaskForm';
import ModalContext from '../../contexts/ModalContext';
import { Container, SaveButton } from './styles';

const PriorityForm = () => {
  const [name, setName] = useState('');
  const [color, setColor] = useState('');
  const { setModalType } = useContext(ModalContext);

  const savePriority = () => {
    axios.post(`http://localhost:8080/priority`, {
      name,
      color,
    }).then(response => {
      console.log(response.data);
    }).catch(error => {
      console.log(error);
    });

    setModalType(<TaskForm />)
  }

  return (
    <Container>
      <Title title="Nova prioridade" />
      <Field label="Nome:" value={name} onChange={(name) => setName(name)} placeholder="Digite o nome da prioridade" />
      <Field label="Cor:" value={color} onChange={(color) => setColor(color)} placeholder="Descrição da tarefa" />
      <SaveButton onClick={() => savePriority()}>Salvar</SaveButton>
    </Container>
  )
}

export default PriorityForm;
