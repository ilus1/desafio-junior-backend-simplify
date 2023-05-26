import Proptypes from 'prop-types';
import { useState } from 'react';

import Modal from '../Modal';
import Taskform from '../TaskForm';
import { Container, EditButton, DeleteButton } from './styles';

const TaskActions = ({ task }) => {
  const [showModal, setShowModal] = useState(false);
  const [modalStyle, setModalStyle] = useState(null);
  const { id } = task;

  const handleEditTask = (e) => {
    e.stopPropagation();
    console.log('Editando tarefa: ', id);
    setModalStyle(<Taskform task={task} onClose={() => setShowModal(false)}/>)
    setShowModal(true);
  }

  const handleDeleteTask = (e) => {
    e.stopPropagation();
    console.log('Deletando tarefa: ', id);
  }

  return (
    <Container>
      <EditButton onClick={(e) => handleEditTask(e)} />
      <DeleteButton onClick={(e) => handleDeleteTask(e)} />
      { showModal && (
        <Modal open={showModal} onClose={() => setShowModal(false)}>
          {modalStyle}
        </Modal>
      )}
    </Container>
  )
}

TaskActions.propTypes = {
  task: Proptypes.shape({
    id: Proptypes.number.isRequired,
    name: Proptypes.string.isRequired,
    description: Proptypes.string,
    accomplished: Proptypes.bool.isRequired,
    priority: Proptypes.shape({
      name: Proptypes.string.isRequired,
      color: Proptypes.string.isRequired,
    }),
  }).isRequired,
};

export default TaskActions;
