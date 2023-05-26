import PropTypes from 'prop-types';

import { Modal as ModalComponent } from '@mui/material';
import { ModalContainer, CloseButton } from './styles';

const Modal = ({ children, open, onClose }) => {
  return (
    <ModalComponent
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <ModalContainer>
        <CloseButton onClick={() => onClose()} />
        {children}
      </ModalContainer>
    </ModalComponent>
  )
}

Modal.propTypes = {
  children: PropTypes.node,
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
