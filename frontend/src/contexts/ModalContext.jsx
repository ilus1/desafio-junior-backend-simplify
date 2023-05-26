import { createContext, useState } from "react";
import PropTypes from 'prop-types';

import Modal from "../components/Modal";

export const ModalContext = createContext({});

export function ModalProvider({ children }) {
  const [showModal, setShowModal] = useState(false)
  const [modalType, setModalType] = useState(null)

  return (
    <ModalContext.Provider value={{ showModal, setShowModal, modalType, setModalType }}>
      <Modal open={showModal} onClose={() => setShowModal(false)}>
        {modalType}
      </Modal>
      {children}
    </ModalContext.Provider>
  )
}

ModalProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export default ModalContext;
