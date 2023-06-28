import { useNavigate } from "react-router-dom";
import { BasicButton } from "../../../../components/Button/BasicButton";
import * as S from "../style";

const SignIn = () => {
  const navigate = useNavigate();

  const onMoveTodo = () => {
    navigate("/todo/3");
  };

  return (
    <S.Form>
      <S.InputBox>
        <label>이메일</label> <input placeholder="이메일" />
      </S.InputBox>
      <S.InputBox>
        <label>비밀번호</label> <input placeholder="비밀번호" />
      </S.InputBox>
      <BasicButton onClick={onMoveTodo}>로그인</BasicButton>
    </S.Form>
  );
};
export default SignIn;
