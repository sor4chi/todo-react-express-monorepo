import styled from 'styled-components';
import { MdCheck, MdClose } from 'react-icons/md';
import { Todo } from '../../../types/todo';
import { Link } from 'react-router-dom';
import { ACCENT_COLOR } from '../../../constants/styles';

interface TodoItemProps {
  todo: Todo;
  toggleCompleted: () => void;
  remove: () => void;
}

export const TodoItem = ({ todo, toggleCompleted, remove }: TodoItemProps) => (
  <TodoItemContainer>
    <Title>
      <Link to={`/todo/${todo.id}`}>{todo.title}</Link>
    </Title>
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

const Title = styled.span`
  font-size: 1.5rem;
  font-weight: 500;
  flex: 1;

  a {
    color: #333333;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
      color: ${ACCENT_COLOR};
    }
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

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
    outline: 1px solid ${ACCENT_COLOR};
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
    outline: 1px solid ${ACCENT_COLOR};
  }

  svg {
    stroke: #ffffff;
  }
`;
