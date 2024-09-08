import { fontSize, fontWeight } from "@/_shared/typography";
import styled, { css } from "styled-components";

interface ITextProps {
  [key: string]: string;
}

interface ITextWeightProps {
  [key: string]: number;
}

interface IText {
  type: string;
  textover?: string;
  textoverwidth?: string;
  color?: string;
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

const textWeight: ITextWeightProps = {
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

export const Text = styled.div<IText>`
  font-weight: ${(props) => textWeight[props.type]};
  font-size: ${(props) => textSize[props.type]};
  ${(props) =>
    props.textover === "true"
      ? css`
          width: ${props.textoverwidth};
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        `
      : ""};
  color: ${(props) => props.color};
`;
