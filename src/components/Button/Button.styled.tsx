import loadings from "@/_shared/animations/loadings";
import { colors } from "@/_shared/colors";
import styled, { css } from "styled-components";

interface ILayoutProps {
  width: string;
  disabled?: boolean;
  isloading?: string;
}

export const Layout = styled.button<ILayoutProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  width: ${(props) => props.width};
  height: 42px;
  padding: 0px 42px;

  border-radius: 8px;
  border: none;
  background: ${colors.green50};

  color: "#1C1D27";
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  text-align: center;
  text-decoration: none;

  transition: 0.2s;
  user-select: none; // 사용자가 텍스트를 선택할 수 있는지 지정
  cursor: pointer;

  ${(props) =>
    props.disabled
      ? css`
          background: #3e4049;
          color: #a4a6aa;
          cursor: not-allowed;
        `
      : null};

  ${(props) =>
    props.isloading === "true"
      ? css`
          backdrop-filter: blur(4px);
          cursor: progress;
          ${loadings.dark}
        `
      : null}
`;
