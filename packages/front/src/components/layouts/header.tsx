import styled from 'styled-components';

export const Header = () => {
  return (
    <HeaderContainer>
      <h1>Header</h1>
    </HeaderContainer>
  );
};

export const HeaderContainer = styled.header`
  background-color: #000;
  color: #fff;
  padding: 1rem;
`;
