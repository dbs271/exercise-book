import styled from "styled-components";

export const BasicButton = styled.button`
  width: 360px;
  height: 40px;
  cursor: pointer;
  background-color: ${({ theme }) => theme.PALLETT.primary[300]};
  border: 1px solid #999;
`;
