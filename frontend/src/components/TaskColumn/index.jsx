import PropTypes from 'prop-types';

import NewTaskButton from '../NewTaskButton';
import { Container, Header } from './styles';

const TaskColumn = ({ title, children }) => (
  <Container>
    <Header>{title}</Header>
    {children}
    <NewTaskButton />
  </Container>
);

TaskColumn.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};

TaskColumn.defaultProps = {
  children: null,
};

export default TaskColumn;
