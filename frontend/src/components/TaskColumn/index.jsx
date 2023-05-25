import PropTypes from 'prop-types';
import { Container, Header } from './styles';

const TaskColumn = ({ title, children }) => (
  <Container>
    <Header>{title}</Header>
    {children}
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
