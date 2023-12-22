import { colors } from "@/_shared/colors";
import styled from "styled-components";

interface IBgColorProps {
  [key: string]: string;
}

const textColor: IBgColorProps = {
  dark: colors.white,
  light: colors.black,
};

const bgColor: IBgColorProps = {
  dark: colors.black,
  light: colors.white,
};

export const Layout = styled.div<{ theme: string }>`
  padding: 5rem;
  border-radius: 12px;
  background-color: ${(props) => bgColor[props.theme]};
  color: ${(props) => textColor[props.theme]};
`;
