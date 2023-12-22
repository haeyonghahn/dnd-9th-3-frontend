import { DefaultTheme } from "styled-components";
import { colors } from "./_shared/colors";

export const darkTheme: DefaultTheme = {
  bgColor: colors.black,
  textColor: colors.white,
};

export const lightTheme: DefaultTheme = {
  bgColor: colors.white,
  textColor: colors.black,
};
