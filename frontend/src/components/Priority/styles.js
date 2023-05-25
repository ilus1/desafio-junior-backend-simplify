import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-left: auto;
`;

export const PriorityName = styled.div`
  font-size: 14px;
  font-weight: bold;
  color: #000000;

  padding: 3px 10px;
  border-radius: 15px;
  height: fit-content;
  background: ${props => props.color};
`;
