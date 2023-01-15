import styled from 'styled-components';

export const Detail = () => {
  return (
    <Container>
      <h1>Detail</h1>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  max-width: 800px;
  margin: 0 auto;
`;
