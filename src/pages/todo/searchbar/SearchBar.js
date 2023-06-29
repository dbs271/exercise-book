import styled from "styled-components";
import { flexCenter } from "../../../styles/common";
import { BiSearchAlt } from "react-icons/bi";

const SearchBar = () => {
  return (
    <S.Container>
      <S.InputBox>
        <input placeholder="search" />
        <Button>
          <BiSearchAlt />
        </Button>
      </S.InputBox>
    </S.Container>
  );
};

export default SearchBar;

const Container = styled.div`
  width: 100%;
  ${flexCenter};
`;

const InputBox = styled.div`
  position: relative;
  width: 100%;
  height: 64px;
  ${flexCenter};
  input {
    border: none;
    outline: none;
    border-bottom: 1px solid #999;
    background-color: ${({ theme }) => theme.PALLETT.background.ivory};
  }
`;

const Button = styled.button`
  background-color: ${({ theme }) => theme.PALLETT.background.ivory};
  cursor: pointer;
  :hover {
    transform: scale(1.2);
  }
`;

const S = {
  Container,
  InputBox,
  Button,
};
