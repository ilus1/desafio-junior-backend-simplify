import PropTypes from 'prop-types';
import { useContext } from 'react';

import { TasksContext } from '../../contexts/TasksContext';
import NewTaskButton from '../NewTaskButton'
import Title from '../Title';
import Task from '../Task';
import { Container } from './styles';

const TaskColumn = () => {
  const { tasks } = useContext(TasksContext);

  return (
    <Container>
      <Title title="Lista de tarefas" />
        {tasks && tasks.map(task => (
          <Task key={task.id} task={task} />
        ))}
      <NewTaskButton />
    </Container>
  );
}

TaskColumn.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};

TaskColumn.defaultProps = {
  children: null,
};

export default TaskColumn;
