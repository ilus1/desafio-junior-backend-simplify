import Proptypes from 'prop-types';

import { Container, EditButton, DeleteButton } from './styles';

const TaskActions = ({ task }) => {
  const { id } = task;

  const handleEditTask = (e) => {
    e.stopPropagation();
    console.log('Editando tarefa: ', id);
  }

  const handleDeleteTask = (e) => {
    e.stopPropagation();
    console.log('Deletando tarefa: ', id);
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
