import styled from 'styled-components';
import { MdCheck, MdClose } from 'react-icons/md';
import { Todo } from '../../../types/todo';

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
  deleteTodo: (id: number) => void;
}

export const TodoList = ({
  todos,
  loading,
  error,
  updateCompleted,
  deleteTodo,
}: TodoListProps) => {
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
          <TodoItem
            key={todo.id + 'item'}
            todo={todo}
            toggleCompleted={() => updateCompleted(todo.id, !todo.completed)}
            remove={() => deleteTodo(todo.id)}
          />
          {i !== todos.length - 1 && <Line key={i + 'line'} />}
        </>
      ))}
    </Container>
  );
};

interface TodoItemProps {
  todo: Todo;
  toggleCompleted: () => void;
  remove: () => void;
}

const TodoItem = ({ todo, toggleCompleted, remove }: TodoItemProps) => (
  <TodoItemContainer>
    <span>{todo.title}</span>
    <ButtonsContainer>
      <CompletedToggleButton onClick={() => toggleCompleted()}>
        {todo.completed && <MdCheck size={24} />}
      </CompletedToggleButton>
      <DeleteButton onClick={() => remove()}>
        <MdClose size={24} />
      </DeleteButton>
    </ButtonsContainer>
  </TodoItemContainer>
);

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

const ButtonsContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

const FOCUS_COLOR = '#8cb6f5';

const CompletedToggleButton = styled.button`
  background-color: #ffffff;
  border-radius: 50%;
  border: 1px solid #e6e6e6;
  color: #333333;
  width: 2rem;
  height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: none;
  cursor: pointer;

  &:focus {
    outline: 1px solid ${FOCUS_COLOR};
  }

  svg {
    stroke: #333333;
  }
`;

const DeleteButton = styled.button`
  background-color: #333333;
  border-radius: 50%;
  color: #ffffff;
  width: 2rem;
  height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: none;
  border: none;
  cursor: pointer;

  &:focus {
    outline: 1px solid ${FOCUS_COLOR};
  }

  svg {
    stroke: #ffffff;
  }
`;
