import { useContext } from 'react';
import Proptypes from 'prop-types';
import axios from 'axios';

import { sortByName } from '../../utils/sortUtils';
import { TasksContext } from '../../contexts/TasksContext';
import Title from '../Title';
import Text from '../Text';
import { ButtonsContainer, CancelButton, ConfirmButton, Container } from './styles';

const ConfirmationModal = ({ taskId, onClose }) => {
  const { tasks, setTasks } = useContext(TasksContext);

  const handleCancel = () => {
    onClose();
  }

  const handleConfirm = () => {
    axios.delete(`http://localhost:8080/task/${taskId}`)
      .then(() => {
        console.log('Tarefa excluída com sucesso!');
        setTasks(tasks.filter(t => t.id !== taskId).sort(sortByName));
      })
      .catch((err) => {
        console.log('Erro ao excluir tarefa: ', err);
      })
    onClose();
  }

  return (
    <Container>
      <Title title="Excluir tarefa" />
      <Text text="Tem certeza que deseja excluir esta tarefa?" />
      <ButtonsContainer>
        <ConfirmButton onClick={() => handleConfirm()}>Confirmar</ConfirmButton>
        <CancelButton onClick={() => handleCancel()}>Cancelar</CancelButton>
      </ButtonsContainer>
    </Container>
  )
}

ConfirmationModal.propTypes = {
  onClose: Proptypes.func.isRequired,
  taskId: Proptypes.string.isRequired,
};

export default ConfirmationModal;
