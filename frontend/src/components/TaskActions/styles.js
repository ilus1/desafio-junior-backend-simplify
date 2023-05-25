import styled from 'styled-components';
import CreateIcon from '@mui/icons-material/Create';
import DeleteIcon from '@mui/icons-material/Delete';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  margin-right: 10px;
  margin-left: auto;
`;

export const EditButton = styled(CreateIcon)`
  border-radius: 50%;
  &:hover {
    background-color: #e4e4e4;
  }
`;

export const DeleteButton = styled(DeleteIcon)`
  border-radius: 50%;
  &:hover {
    background-color: #e4e4e4;
  }
`;
