import loadings from "@/_shared/animations/loadings";
import { colors } from "@/_shared/colors";
import { fontSize, fontWeight } from "@/_shared/typography";
import styled, { css } from "styled-components";

interface LayoutProps {
  width: string;
  disabled?: boolean;
  isloading?: string;
  cancel?: string;
  theme?: string;
  none?: string;
  fontSize?: string;
  bordercolor?: string;
  color?: string;
  backgroundcolor?: string;
}

export const Layout = styled.button<LayoutProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  width: ${(props) => props.width};
  height: 42px;

  border-radius: 8px;
  border: none;
  background: ${(props) =>
    props.backgroundcolor ? props.backgroundcolor : colors.green50};

  color: ${(props) => (props.color ? props.color : colors.black)};
  font-family: "Pretendard";
  font-style: normal;
  font-weight: ${fontWeight.semiBold};
  font-size: ${(props) => (props.fontSize ? props.fontSize : fontSize.h3)};
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
      : css`
          &:hover {
            background: linear-gradient(
                0deg,
                rgba(0, 0, 0, 0.25),
                rgba(0, 0, 0, 0.25)
              ),
              ${colors.green50};
          }
          &:active {
            background: linear-gradient(
                0deg,
                rgba(0, 0, 0, 0.25),
                rgba(0, 0, 0, 0.25)
              ),
              ${colors.green150};
          }
        `};

  ${(props) =>
    props.isloading === "true"
      ? css`
          backdrop-filter: blur(4px);
          cursor: progress;
          ${props.theme === "dark" ? loadings.dark : loadings.light}
        `
      : null}
  ${(props) =>
    props.cancel === "true"
      ? css`
          border: 1px solid ${colors.gray200};
          color: ${colors.white};
          background-color: ${colors.gray500};
          &:hover {
            background: linear-gradient(
              0deg,
              rgba(0, 0, 0, 0.25),
              rgba(0, 0, 0, 0.25)
            );
            background-color: ${colors.gray500};
          }
        `
      : null};
  ${(props) =>
    props.none === "true"
      ? css`
          border: 1px solid
            ${props.bordercolor ? props.bordercolor : colors.gray200};
          background-color: ${props.backgroundcolor
            ? props.backgroundcolor
            : props.theme === "dark"
            ? colors.black
            : colors.green50};
          color: ${props.color ? props.color : colors.white};
          &:hover {
            background: linear-gradient(
              0deg,
              rgba(0, 0, 0, 0.25),
              rgba(0, 0, 0, 0.25)
            );
            background-color: ${props.backgroundcolor
              ? props.backgroundcolor
              : props.theme === "dark"
              ? ""
              : colors.green150};
          }
        `
      : null};
`;
