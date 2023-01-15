import styled from 'styled-components';

export const HeaderContainer = styled.header`
  background-color: #000;
  color: #fff;
  padding: 1rem;
`;

export const Header = () => {
  return (
    <HeaderContainer>
      <h1>Header</h1>
    </HeaderContainer>
  );
};
