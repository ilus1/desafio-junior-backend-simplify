import PropTypes from 'prop-types';

import { Container, Label, Select } from './styles';

const PriorityField = ({ label, value, onChange, choices }) => {
  return (
    <Container>
      <Label>{label}</Label>
      <Select value={value} onChange={(e) => onChange(e.target.value)}>
        <option value={null}>Selecione</option>
        {choices && choices.map((priority) => (
          <option key={priority.id} value={priority.id}>{priority.name}</option>
        ))}
      </Select>
    </Container>
  )
}

PriorityField.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  choices: PropTypes.array.isRequired,
}

export default PriorityField;
