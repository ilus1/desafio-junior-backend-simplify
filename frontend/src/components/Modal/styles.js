import styled from 'styled-components';

export const ModalContainer = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  left: calc(50% - 300px);
  top: calc(50% - 250px);

  width: 500px;
  height: 400px;
  padding: 30px;

  background: white;
  border-radius: 30px;
  border: none;

  &:select {
    border: none;
  }
`;
