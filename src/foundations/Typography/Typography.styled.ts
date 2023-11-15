import { fontSize, fontWeight } from "@/_shared/typography";
import styled from "styled-components";

interface ITextProps {
  [key: string]: string;
}

const textSize: ITextProps = {
  h0: fontSize.h0,
  h1: fontSize.h1,
  h2: fontSize.h2,
  h3: fontSize.h3,
  body0: fontSize.body0,
  body1: fontSize.body1,
  body2: fontSize.body2,
};

const textWeight: ITextProps = {
  h0: fontWeight.semiBold,
  h1: fontWeight.semiBold,
  h2: fontWeight.semiBold,
  h3: fontWeight.semiBold,
  body0: fontWeight.regular,
  body1: fontWeight.semiBoldRegular,
  body2: fontWeight.semiBoldRegular,
  caption1: fontWeight.regular,
  caption2: fontWeight.regular,
  caption3: fontWeight.semiBold,
};

export const Text = styled.div<{ type: string }>`
  font-weight: ${(props) => textWeight[props.type]};
  font-size: ${(props) => textSize[props.type]};
`;
