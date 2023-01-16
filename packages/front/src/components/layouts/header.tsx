import styled from 'styled-components';
import { HEADER_HEIGHT } from '../../constants/styles';

export const Header = () => {
  return (
    <HeaderContainer>
      <span>Header</span>
    </HeaderContainer>
  );
};

export const HeaderContainer = styled.header`
  background-color: #333;
  color: #fff;
  height: ${HEADER_HEIGHT};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
`;
