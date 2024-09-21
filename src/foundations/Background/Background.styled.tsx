import { colors } from "@/_shared/colors";
import styled from "styled-components";

interface BgColorProps {
  [key: string]: string;
}

const textColor: BgColorProps = {
  dark: colors.white,
  light: colors.black,
};

const bgColor: BgColorProps = {
  dark: colors.black,
  light: colors.white,
};

export const Layout = styled.div<{ theme: string }>`
  padding: 5rem;
  border-radius: 12px;
  background-color: ${(props) => bgColor[props.theme]};
  color: ${(props) => textColor[props.theme]};
`;
