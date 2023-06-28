import { useState } from "react";
import styled from "styled-components";
import { flexCenter } from "../../styles/common";
import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignUp/SignUp";

const Main = () => {
  const [isLogin, setIsLogin] = useState(false);

  const handleLogin = (e) => {
    const { innerText } = e.target;
    if (innerText === "LOGIN") return setIsLogin(true);
    setIsLogin(false);
  };

  return (
    <S.Container>
      <S.Header>
        <S.LoginBox isLogin={isLogin} onClick={handleLogin}>
          LOGIN
        </S.LoginBox>
        <S.SignUpBox isLogin={isLogin} onClick={handleLogin}>
          SIGNUP
        </S.SignUpBox>
      </S.Header>
      {isLogin ? <SignIn /> : <SignUp setIsLogin={setIsLogin} />}
    </S.Container>
  );
};
export default Main;

const Container = styled.div`
  width: 100%;
  height: calc(100vh - 60px);
  ${flexCenter};
  flex-direction: column;
`;

const Header = styled.div`
  width: 360px;
  height: 48px;
  display: flex;
  background-color: ${({ theme }) => theme.PALLETT.primary[300]};

  div {
    width: 50%;
    cursor: pointer;
    ${flexCenter}
    :hover {
      opacity: 0.7;
    }
  }
`;

const LoginBox = styled.div`
  background-color: ${({ theme, isLogin }) =>
    isLogin ? "#FF8989" : "#FCAEAE"};
  border: 1px solid #999;
`;

const SignUpBox = styled.div`
  background-color: ${({ theme, isLogin }) =>
    isLogin ? "#FCAEAE" : "#FF8989"};
  border: 1px solid #999;
`;

const S = {
  Container,
  Header,
  LoginBox,
  SignUpBox,
};
