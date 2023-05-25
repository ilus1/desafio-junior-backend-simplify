import PropTypes from 'prop-types';

import { Container, Input, Label } from './styles';

const Field = ({ value, onChange, placeholder, label }) => {

  return (
    <Container>
      <Label>{label}</Label>
      <Input value={value} onChange={(e) => onChange(e.target.value)} placeholder={placeholder} />
    </Container>
  );
}

Field.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  label: PropTypes.string.isRequired,
}

export default Field;
