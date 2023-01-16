import styled from 'styled-components';
import { Todo } from '../../../types/todo';

interface TodoDisplayProps {
  todo: Todo;
}

export const TodoDisplay = ({ todo }: TodoDisplayProps) => (
  <Container>
    <Status>
      <StatusIcon completed={todo.completed} />
      <span>{todo.completed ? 'Completed' : 'In progress'}</span>
    </Status>
    <Title>{todo.title}</Title>
  </Container>
);

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  max-width: 800px;
  margin: 0 auto;
  width: 100%;
`;

const Status = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: 400;
  margin: 0;
`;

const IN_PROGRESS_COLOR_WEAK = `#c5a90c`;
const IN_PROGRESS_COLOR_STRONG = `#d8b13c`;
const COMPLETED_COLOR_WEAK = `#0a9e03`;
const COMPLETED_COLOR_STRONG = `#16cd0c`;

const StatusIcon = styled.div<{ completed: boolean }>`
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  --color-in-progress-weak: ${({ completed }) =>
    completed ? COMPLETED_COLOR_WEAK : IN_PROGRESS_COLOR_WEAK};
  --color-in-progress-strong: ${({ completed }) =>
    completed ? COMPLETED_COLOR_STRONG : IN_PROGRESS_COLOR_STRONG};
  border: 2px solid #ffffff;
  box-sizing: border-box;
  animation: pulse 3s infinite;

  @keyframes pulse {
    0% {
      background-color: var(--color-in-progress-weak);
      box-shadow: 0px 0px 4px 2px var(--color-in-progress-weak);
    }
    50% {
      background-color: var(--color-in-progress-strong);
      box-shadow: 0px 0px 4px 2px var(--color-in-progress-strong);
    }
    100% {
      background-color: var(--color-in-progress-weak);
      box-shadow: 0px 0px 4px 2px var(--color-in-progress-weak);
    }
  }
`;
