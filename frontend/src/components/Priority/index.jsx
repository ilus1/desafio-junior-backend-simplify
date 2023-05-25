import PropTypes from 'prop-types';

import Text from '../Text'
import { Container, PriorityName } from './styles';

const Priority = ({ priority }) => {
  const { name, color, } = priority || {};

  return (
    <Container>
      <Text text="Prioridade:" />
      { name
        ? <PriorityName color={color}>{name}</PriorityName>
        : <Text text="Não definida" />
      }
    </Container>
  )
}

Priority.propTypes = {
  priority: PropTypes.shape({
    name: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
  }).isRequired,
};

export default Priority;
