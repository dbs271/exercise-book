import styled from "styled-components";
import { BasicButton } from "../../components/Button/BasicButton";
import { flexCenter } from "../../styles/common";
import SearchBar from "./searchbar/SearchBar";
import TodoList from "./todo-list/TodoList";

const Todo = () => {
  // 투두 폼, 아이콘
  return (
    <S.Wrapper>
      <S.Container>
        <S.Title>My Todo List</S.Title>
        <S.SearchBox>
          <SearchBar />
        </S.SearchBox>
        <S.Content>
          <TodoList />
        </S.Content>
        <S.ButtonBox>
          <BasicButton>추가</BasicButton>
        </S.ButtonBox>
      </S.Container>
    </S.Wrapper>
  );
};

export default Todo;

const Wrapper = styled.div`
  height: calc(100vh - 60px);
  ${flexCenter}
  padding-bottom: 60px;
`;

const Container = styled.div`
  width: 560px;
  height: 100%;
  ${flexCenter};
  background-color: ${({ theme }) => theme.PALLETT.background.ivory};
  border-radius: 8px;
  position: relative;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  flex-direction: column;
`;

const Title = styled.h1`
  background-color: ${({ theme }) => theme.PALLETT.primary[300]};
  color: ${({ theme }) => theme.PALLETT.fontColor};
  height: 32px;
  width: 80%;
  padding-left: 32px;
  ${flexCenter};
  font-size: ${({ theme }) => theme.FONT_SIZE.large};
  position: absolute;
  top: 48px;
`;

const Content = styled.div`
  width: 100%;
  /* height: calc(100vh - 32px); */
  padding-bottom: 64px;
  overflow: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const SearchBox = styled.div`
  ${flexCenter}
  width: 360px;
  height: 48px;
  /* position: relative; */
  top: 128px;
`;

const ButtonBox = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;
  button {
    width: 100%;
    border-radius: 8px;
    :hover {
      opacity: 0.8;
    }
  }
`;

const S = {
  Container,
  Wrapper,
  Title,
  Content,
  SearchBox,
  ButtonBox,
};
