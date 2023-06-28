import styled from "styled-components";
import { flexCenter } from "../../../styles/common";

export const Form = styled.form`
  width: 360px;
  display: ${flexCenter};
  background-color: #fff;
  flex-direction: column;
  padding-top: 32px;
  border-left: 1px solid #999;
  border-right: 1px solid #999;
`;

export const InputBox = styled.div`
  position: relative;
  width: 80%;
  height: 48px;
  ${flexCenter}
  margin-bottom: 16px;
  margin-left: 16px;
  input {
    width: 100%;
    border: 1px solid #999;
    border-radius: 4px;
    height: 100%;
    text-align: center;
  }

  label {
    position: absolute;
    left: 16px;
    top: -8px;
    background-color: ${({ theme }) => theme.PALLETT.background.white};
    font-size: ${({ theme }) => theme.FONT_SIZE.small};
    z-index: 1;
    padding: 0 4px;
  }
`;
