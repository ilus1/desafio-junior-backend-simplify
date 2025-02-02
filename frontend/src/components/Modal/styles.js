import styled from 'styled-components';
import CloseIcon from '@mui/icons-material/Close';

export const ModalContainer = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  left: calc(50% - 140px);
  top: calc(50% - 200px);

  width: 270px;
  height: 200px;
  padding: 30px;

  background: white;
  border-radius: 30px;
  border: none;

  &:select {
    border: none;
  }
`;

export const CloseButton = styled(CloseIcon)`
  cursor: pointer;
  position: absolute;
  right: 20px;
  top: 20px;

  &:hover {
    color: #FF0000;
  }
`;
