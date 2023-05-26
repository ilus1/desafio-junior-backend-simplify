import { useContext } from 'react';
import AddIcon from '@mui/icons-material/Add';

import { ModalContext } from '../../contexts/ModalContext';
import Text from '../Text';
import { Container } from './styles';
import TaskForm from '../TaskForm';


const NewTaskButton = () => {
  const { setShowModal, setModalType } = useContext(ModalContext);

  const onHandleNewTask = () => {
    setShowModal(true);
    setModalType(<TaskForm onClose={() => setShowModal(false)} />);
  }

  return (
    <>
      <Container onClick={() => onHandleNewTask()}>
        <AddIcon />
        <Text text="Adicionar nova tarefa" />
      </Container>
    </>
  );
}

export default NewTaskButton;
