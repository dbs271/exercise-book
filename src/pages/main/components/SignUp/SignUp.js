import { BasicButton } from "../../../../components/Button/BasicButton";
import * as S from "../style";

const SignUp = ({ setIsLogin }) => {
  const onMoveLogin = () => {
    setIsLogin(true);
  };

  return (
    <S.Form>
      <S.InputBox>
        <label>이메일</label> <input placeholder="이메일" />
      </S.InputBox>
      <S.InputBox>
        <label>비밀번호</label> <input placeholder="비밀번호" />
      </S.InputBox>
      <S.InputBox>
        <label>비밀번호 확인</label> <input placeholder="비밀번호 확인" />
      </S.InputBox>
      <BasicButton onClick={onMoveLogin}>회원가입</BasicButton>
    </S.Form>
  );
};

export default SignUp;
