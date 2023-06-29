import styled from "styled-components";
import { flexCenter } from "../../../styles/common";
import { BsCheckLg } from "react-icons/bs";
import { MdDelete } from "react-icons/md";
import { BiSolidPencil } from "react-icons/bi";

const OneTodo = (props) => {
  const { state, title, content } = props.todo;
  return (
    <S.Wrapper>
      <S.Header>
        <S.StateBox state={state}>
          <BsCheckLg />
        </S.StateBox>
        <S.Title state={state}>
          {title}{" "}
          <div>
            <BiSolidPencil /> <MdDelete />
          </div>{" "}
        </S.Title>
      </S.Header>
      <S.Content state={state}>{content}</S.Content>
    </S.Wrapper>
  );
};

export default OneTodo;

const Wrapper = styled.li`
  width: 100%;
  background-color: ${({ theme }) => theme.PALLETT.background.ivory};
  border: 1px solid #999;
  margin: 16px 0;
  list-style: none;
  border-radius: 8px;
  background-color: ${({ state, theme }) =>
    state ? theme.PALLETT.gray[100] : theme.PALLETT.white};
`;

const Header = styled.div`
  border-bottom: 1px dotted #999;
  ${flexCenter}
  padding: 8px 16px;
  height: 48px;
`;

const Title = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
  text-decoration: ${({ state }) => (state ? "line-through" : "none")};
  & svg {
    cursor: pointer;
    margin-left: 16px;
    :hover {
      transform: scale(1.2);
    }
  }
`;

const StateBox = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-right: 8px;
  ${flexCenter};
  color: ${({ state }) => (state ? "#32CB371" : "#999")};
  cursor: pointer;
  :hover {
    transform: scale(1.2);
  }
`;

const Content = styled.div`
  padding: 16px;
  text-decoration: ${({ state }) => (state ? "line-through" : "none")};
  & textarea {
    width: 100%;
    height: 100%;
    border: 1px dotted #999;
    outline: none;
    resize: none;
  }
`;

const S = {
  Wrapper,
  Header,
  Content,
  Title,
  StateBox,
};
