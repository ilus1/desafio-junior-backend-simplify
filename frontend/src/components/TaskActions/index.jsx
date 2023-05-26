import Proptypes from 'prop-types';
import { useContext } from 'react';

import Taskform from '../TaskForm';
import ConfirmationModal from '../ConfirmationModal';
import ModalContext from '../../contexts/ModalContext';
import { Container, EditButton, DeleteButton } from './styles';

const TaskActions = ({ task }) => {
  const { id } = task;
  const { setShowModal, setModalType } = useContext(ModalContext);

  const handleEditTask = (e) => {
    e.stopPropagation();
    setModalType(<Taskform task={task} onClose={() => setShowModal(false)}/>)
    setShowModal(true);
  }

  const handleDeleteTask = (e) => {
    e.stopPropagation();
    setModalType(<ConfirmationModal taskId={id} onClose={() => setShowModal(false)}/>)
    setShowModal(true);
  }

  return (
    <Container>
      <EditButton onClick={(e) => handleEditTask(e)} />
      <DeleteButton onClick={(e) => handleDeleteTask(e)} />
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
