import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  width: 70%;
  height: 30px;
  border: none;
  border-radius: 5px;
`;

export const Label = styled.label`
  font-size: 14px;
  margin-right: 10px;
`;

export const Select = styled.select`
  height: 20px;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 0 15px;
  font-size: 16px;
  color: #444;
`;
