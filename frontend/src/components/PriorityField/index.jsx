import { useContext } from 'react';
import PropTypes from 'prop-types';

import Priorityform from '../PriorityForm';
import { ModalContext } from '../../contexts/ModalContext';
import { Container, Label, Select, AddButton } from './styles';

const PriorityField = ({ label, value, onChange, choices }) => {
  const { setShowModal, setModalType } = useContext(ModalContext);
  const onHandleNewPriority = () => {
    setShowModal(true);
    setModalType(<Priorityform onClose={() => setShowModal(false)} />);
  }

  return (
    <>
      <Container>
        <Label>{label}</Label>
        <Select value={value} onChange={(e) => onChange(e.target.value)}>
          <option value={null}>Selecione</option>
          {choices && choices.map((priority) => (
            <option key={priority.id} value={priority.id}>{priority.name}</option>
          ))}
        </Select>
        <AddButton onClick={() => onHandleNewPriority()}/>
      </Container>
    </>
  )
}

PriorityField.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  choices: PropTypes.array.isRequired,
  onClose: PropTypes.func.isRequired,
}

export default PriorityField;
