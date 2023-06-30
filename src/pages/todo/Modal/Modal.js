import styled from "styled-components";
import { flexCenter } from "../../../styles/common";

const TodoModal = ({ onClose, addTodo }) => {
  return (
    <S.Container>
      <S.Form onSubmit={addTodo}>
        <S.Title>
          <span>ADD Modal</span>
          <button type="button" onClick={onClose}>
            x
          </button>
        </S.Title>
        <S.Content>
          <input placeholder="제목을 입력해주세요." name="title" />
          <textarea
            placeholder="할 일을 입력해주세요"
            name="content"
          ></textarea>
        </S.Content>
        <S.Button type="submit">추가</S.Button>
      </S.Form>
    </S.Container>
  );
};

export default TodoModal;

const Container = styled.div`
  z-index: 9;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
`;

const Form = styled.form`
  width: 480px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${({ theme }) => theme.PALLETT.white};
  border-radius: 8px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  padding: 32px;
`;

const Title = styled.div`
  font-size: ${({ theme }) => theme.FONT_SIZE.large};
  ${flexCenter};
  justify-content: space-between;

  & > button {
    border: none;
    cursor: pointer;
    :hover {
      transform: scale(1.2);
    }
  }
`;

const Content = styled.div`
  ${flexCenter};
  margin-top: 16px;
  flex-direction: column;

  & > input {
    width: 100%;
    height: 40px;
    border: none;
    outline: none;
    border-radius: 8px;
    padding: 0 16px;
    margin-bottom: 16px;
  }
  & > textarea {
    width: 100%;
    height: 200px;
    border: none;
    outline: none;
    border-radius: 8px;
    padding: 16px;
  }
`;

const Button = styled.button`
  display: block;
  width: 80%;
  height: 64px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.PALLETT.primary[300]};
  color: ${({ theme }) => theme.PALLETT.fontColor};
  margin: 0 auto;
  cursor: pointer;
  :hover {
    background-color: transparent;
    color: ${({ theme }) => theme.PALLETT.primary[300]};
  }
`;

const S = {
  Container,
  Form,
  Content,
  Title,
  Button,
};
