import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
`;

export const ConfirmButton = styled.button`
  margin-top: 20px;
  padding: 5px 20px;
  height: 40px;
  background-color: #4da71e;
  color: #fff;

  font-weight: bold;
  font-size: 16px;

  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.2s;
`;

export const CancelButton = styled.button`
  margin-top: 20px;
  padding: 5px 20px;
  height: 40px;
  background-color: #9a9d99;
  color: #fff;

  font-weight: bold;
  font-size: 16px;

  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.2s;
`;
