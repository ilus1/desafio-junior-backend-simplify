import PropTypes from 'prop-types';
import { useState } from 'react';

import TaskInfo from '../TaskInfo';
import Modal from '../Modal';
import Priority from '../Priority';
import { Container, TaskName, Checked } from './styles';


const Task = ({ task }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { name, priority, accomplished } = task;

  const onClick = () => {
    setIsModalOpen(true);
    console.log('Clicou na tarefa');
  }

  return (
    <>
      <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <TaskInfo task={task} onClose={() => setIsModalOpen(false)} />
      </Modal>
      <Container onClick={() => onClick()}>
        {accomplished && <Checked />}
        <TaskName>{name}</TaskName>
        {priority && <Priority priority={priority} />}
      </Container>
    </>
  )
}

Task.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    accomplished: PropTypes.bool.isRequired,
    priority: PropTypes.shape({
      name: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default Task;
