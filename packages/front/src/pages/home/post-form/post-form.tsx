import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FormContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const FormErrorText = styled.p`
  color: #ff0000;
  margin: 0;
`;

const TextInput = styled.input`
  background-color: #ffffff;
  color: #333333;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  box-shadow: none;
  flex: 1;
  border: 1px solid #e6e6e6;
  transition: border 0.2s ease-in-out;

  &:focus {
    outline: none;
    border: 1px solid #333333;
  }
`;

const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  padding: 0.5rem;
`;

const CheckboxInput = styled.input`
  background-color: #ffffff;
  color: #333333;
  width: 1rem;
  height: 1rem;
`;

const SubmitButton = styled.button`
  background-color: #333333;
  color: #ffffff;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  box-shadow: none;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #555555;
  }

  &:focus {
    outline: none;
  }
`;

interface PostFormProps {
  title: string;
  completed: boolean;
  error: string;
  setTitle: (title: string) => void;
  setCompleted: (completed: boolean) => void;
  submit: () => void;
}

export const PostForm = ({
  title,
  completed,
  error,
  setTitle,
  setCompleted,
  submit,
}: PostFormProps) => (
  <Container>
    <FormContainer>
      <TextInput
        type="text"
        placeholder="Titleを入力"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <CheckboxLabel htmlFor="completed">
        <CheckboxInput
          id="completed"
          type="checkbox"
          checked={completed}
          onChange={(e) => setCompleted(e.target.checked)}
        />
        Completed
      </CheckboxLabel>
      <SubmitButton onClick={() => submit()}>Submit</SubmitButton>
    </FormContainer>
    {error && <FormErrorText>{error}</FormErrorText>}
  </Container>
);
