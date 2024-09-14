import styled, { css } from "styled-components";
import { fontSize, fontWeight } from "@/_shared/typography";
import { colors } from "@/_shared/colors";

interface CardProps {
  [key: string]: string;
}

interface IILayoutProps {
  theme: string;
  disabled?: boolean;
}

interface ITitleProps {
  theme: string;
}

const bgColor: CardProps = {
  dark: colors.gray850,
  light: colors.gray50,
};

const textColor: CardProps = {
  dark: colors.white,
  light: colors.black,
};

const hoverColor: CardProps = {
  dark: colors.gray900,
  light: colors.gray50,
};

export const Layout = styled.div<IILayoutProps>`
  position: relative;
  width: 90%;
  text-align: center;
  flex-direction: column;
  align-items: center;
  background: ${(props) => bgColor[props.theme]};
  border-radius: 8px;
  display: flex;
  user-select: none;
  cursor: pointer;
  justify-content: center;
  ${(props) =>
    props.disabled
      ? css`
          cursor: not-allowed;
        `
      : css`
          &:hover {
            outline: ${colors.green50} solid 1px;
            background: linear-gradient(
                0deg,
                rgba(0, 0, 0, 0.25),
                rgba(0, 0, 0, 0.25)
              ),
              ${hoverColor[props.theme]};
          }
        `};
  &.selected {
    outline: ${colors.green50} solid 1px;
  }
`;

export const Title = styled.div<ITitleProps>`
  font-weight: ${fontWeight.semiBold};
  font-size: ${fontSize.h1};
  color: ${(props) => textColor[props.theme]};
  margin: 5px 10px 5px 10px;
`;
