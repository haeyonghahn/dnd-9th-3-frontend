import { DefaultTheme } from "styled-components";
import { colors } from "./_shared/colors";

export const darkTheme: DefaultTheme = {
  bgColor: colors.black,
  textColor: colors.white,
  hoverColor: colors.gray850,
};

export const lightTheme: DefaultTheme = {
  bgColor: colors.white,
  textColor: colors.black,
  hoverColor: colors.gray200,
};
