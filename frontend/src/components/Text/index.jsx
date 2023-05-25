import PropTypes from 'prop-types';

import { Container } from './styles';

const Text = ({ text }) => (
  <Container>
    {text}
  </Container>
)

Text.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Text;
