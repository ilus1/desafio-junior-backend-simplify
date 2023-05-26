import PropTypes from 'prop-types';
import { useContext } from 'react';

import TaskInfo from '../TaskInfo';
import Priority from '../Priority';
import ModalContext from '../../contexts/ModalContext';
import { Container, TaskName, Checked, InfoContainer } from './styles';
import TaskActions from '../TaskActions';


const Task = ({ task }) => {
  const { name, priority, accomplished } = task;
  const { setShowModal, setModalType } = useContext(ModalContext);

  const onClick = () => {
    setShowModal(true);
    setModalType(<TaskInfo task={task} onClose={() => setShowModal(false)} />)
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
