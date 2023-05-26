import PropTypes from 'prop-types';

import { Container, Label, Input } from './styles';

const StatusField = ({ label, value, onChange }) => {

  return (
    <Container>
      <Label>{label}</Label>
      <Input type="checkbox" value={value} onChange={onChange} checked={value} />
    </Container>
  );
}

StatusField.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
}

export default StatusField;
