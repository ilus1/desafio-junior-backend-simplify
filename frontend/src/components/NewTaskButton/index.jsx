import { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';

import Text from '../Text';
import Modal from '../Modal';
import { Container } from './styles';
import TaskForm from '../TaskForm';


const NewTaskButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Container onClick={() => setIsModalOpen(true)}>
        <AddIcon />
        <Text text="Adicionar nova tarefa" />
      </Container>
      <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <TaskForm onClose={() => setIsModalOpen(false)} />
      </Modal>
    </>
  );
}

export default NewTaskButton;
