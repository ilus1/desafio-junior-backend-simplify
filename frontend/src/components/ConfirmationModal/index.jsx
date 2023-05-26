import Proptypes from 'prop-types';
import axios from 'axios';

import Title from '../Title';
import Text from '../Text';
import { ButtonsContainer, CancelButton, ConfirmButton, Container } from './styles';

const ConfirmationModal = ({ taskId, onClose }) => {
  const handleCancel = () => {
    onClose();
  }

  const handleConfirm = () => {
    axios.delete(`http://localhost:8080/task/${taskId}`)
      .then(() => {
        console.log('Tarefa excluída com sucesso!');
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
