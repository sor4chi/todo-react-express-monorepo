import { MdArrowBack } from 'react-icons/md';
import { useParams } from 'react-router';
import styled from 'styled-components';
import { HEADER_HEIGHT } from '../../constants/styles';
import { TodoDisplay } from './todo-display/todo-display';
import { useTodoDisplay } from './todo-display/use-todo-display';

export const Detail = () => {
  const params = useParams();

  if (!params.id || isNaN(Number(params.id))) return <div>Not found</div>;

  const { todo, loading } = useTodoDisplay(Number(params.id));
  if (loading) return <div>Loading...</div>;
  if (!todo) return <div>Not found</div>;

  return (
    <Container>
      <SectionHeader>
        <h1>Detail</h1>
        <p>ID: {todo.id}</p>
      </SectionHeader>
      <TodoDisplay todo={todo} />
      <BackButton onClick={() => history.back()}>
        <MdArrowBack />
        Back
      </BackButton>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  max-width: 800px;
  margin: 0 auto;
  height: calc(100vh - ${HEADER_HEIGHT});
  position: relative;
`;

const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

const BackButton = styled.button`
  position: absolute;
  bottom: 2rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  font-size: 1.25rem;
  border: 1px solid #e6e6e6;
  border-radius: 0.25rem;
  background-color: #ffffff;
  color: #333333;
  cursor: pointer;

  &:hover {
    background-color: #e6e6e6;
  }
`;
