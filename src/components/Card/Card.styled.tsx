import styled from "styled-components";
import { fontSize, fontWeight } from "@/_shared/typography";
import { colors } from "@/_shared/colors";

interface CardProps {
  [key: string]: string;
}

interface IILayoutProps {
  theme: string;
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

export const Layout = styled.div<IILayoutProps>`
  position: relative;
  width: fit-content;
  text-align: center;
  flex-direction: column;
  align-items: center;
  background: ${(props) => bgColor[props.theme]};
  border-radius: 8px;
  display: flex;
`;

export const Title = styled.div<ITitleProps>`
  min-width: 240px;
  min-height: ${fontSize.h1};
  font-weight: ${fontWeight.semiBold};
  font-size: ${fontSize.h1};
  color: ${(props) => textColor[props.theme]};
  margin-bottom: 20px;
`;