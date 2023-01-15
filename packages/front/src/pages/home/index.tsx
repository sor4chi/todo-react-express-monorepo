import { PostForm } from './post-form/post-form';
import { usePostForm } from './post-form/use-post-form';

export const Home = () => {
  const { todos, setTodos, loading, error: todoListError } = useTodoList();
  const {
    title,
    completed,
    setTitle,
    setCompleted,
    submit,
    error: postFormError,
  } = usePostForm(todos, setTodos);

  return (
    <Container>
      <h1>Todo</h1>
      <PostForm
        title={title}
        completed={completed}
        error={postFormError}
        setTitle={setTitle}
        setCompleted={setCompleted}
        submit={submit}
      />
      <TodoList todos={todos} loading={loading} error={todoListError} />
    </Container>
  );
};

import styled from 'styled-components';
import { useTodoList } from './todo-list/use-todo-list';
import { TodoList } from './todo-list/todo-list';
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  max-width: 800px;
  margin: 0 auto;
`;
