import styled from 'styled-components';
import { HEADER_HEIGHT } from '../../constants/styles';

export const Header = () => {
  return (
    <HeaderContainer>
      <LogoContainer>
        <Logo src="/monica.svg" alt="logo" />
        <span>Todo App</span>
      </LogoContainer>
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

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const Logo = styled.img`
  height: 2rem;
`;
