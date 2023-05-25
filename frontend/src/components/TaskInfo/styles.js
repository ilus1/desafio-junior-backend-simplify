import styled from 'styled-components';

import CloseIcon from '@mui/icons-material/Close';

export const Container = styled.div`
  width: 100%;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 20px;

  width: 100%;
  padding: 10px;
  margin: 10px 0 20px 0;
`;

export const Body = styled.div`

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
