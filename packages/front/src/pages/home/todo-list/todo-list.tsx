import styled from 'styled-components';
import { Todo } from '../types';

const Container = styled.div`
  margin: 1rem 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Skeleton = styled.div`
  width: 100%;
  height: 5rem;
  border-radius: 0.5rem;
  position: relative;
  overflow: hidden;
  background: #e6e6e6;

  &::before {
    content: '';
    display: block;
    height: 100%;
    width: 100%;
    background: linear-gradient(90deg, #e6e6e6 0%, #f5f5f5 50%, #e6e6e6 100%);
    position: absolute;
    top: 0;
    left: 0;
    animation: skeleton 1.2s linear infinite;
  }

  @keyframes skeleton {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(100%);
    }
  }
`;

interface TodoListProps {
  todos: Todo[];
  loading: boolean;
  error: string;
  updateCompleted: (id: number, completed: boolean) => void;
}

export const TodoList = ({ todos, loading, error }: TodoListProps) => {
  if (loading) {
    return (
      <Container>
        <Skeleton />
        <Skeleton />
        <Skeleton />
      </Container>
    );
  }

  if (error) return <Container>{error}</Container>;

  return (
    <Container>
      {todos.map((todo, i) => (
        <>
          <TodoItem key={todo.id + 'item'} todo={todo} />
          {i !== todos.length - 1 && <Line key={i + 'line'} />}
        </>
      ))}
    </Container>
  );
};

const TodoItem = ({ todo }: { todo: Todo }) => {
  return (
    <TodoItemContainer>
      <span>{todo.title}</span>
      <p>{todo.completed ? '✅' : '❌'}</p>
    </TodoItemContainer>
  );
};

const TodoItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
`;

const Line = styled.div`
  width: 100%;
  height: 1px;
  background: #e6e6e6;
`;
