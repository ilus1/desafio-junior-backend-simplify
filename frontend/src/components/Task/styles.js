import styled from 'styled-components';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

export const Container = styled.div`
  display: flex;
  align-items: center;
  background: #FFFFFF;

  width: 90%;
  min-height: 30px;
  margin: 10px 30px;
  border-radius: 15px;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.25);
  transition: 0.2s;
  opacity: 0.7;

  &:hover {
    opacity: 1;
    box-shadow: 3px 3px 4px rgba(0, 0, 0, 0.25);
  }

  cursor: pointer;
`;

export const TaskName = styled.div`
  font-size: 14px;
  font-weight: bold;
  color: #000000;

  margin: 0 20px;
`;

export const Checked = styled(CheckCircleOutlineIcon)`
  color: #00FF00;

  margin-left: 10px;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
`
