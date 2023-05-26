import PropTypes from 'prop-types';
import { useState } from 'react';

import TaskInfo from '../TaskInfo';
import Modal from '../Modal';
import Priority from '../Priority';
import { Container, TaskName, Checked, InfoContainer } from './styles';
import TaskActions from '../TaskActions';


const Task = ({ task }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { name, priority, accomplished } = task;

  const onClick = () => {
    setIsModalOpen(true);
  }

  return (
    <>
      <Container>
        <InfoContainer onClick={() => onClick()}>
          {accomplished && <Checked />}
          <TaskName>{name}</TaskName>
          {priority && <Priority priority={priority} />}
        </InfoContainer>
        <TaskActions task={task} />
      </Container>
      <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <TaskInfo task={task} onClose={() => setIsModalOpen(false)} />
      </Modal>
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
