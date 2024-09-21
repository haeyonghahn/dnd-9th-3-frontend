import styled, { css } from "styled-components";
import { colors } from "@/_shared/colors";
import { loadings } from "@/_shared/animations";

interface ImageProps {
  theme?: string;
  isloading?: string;
  src?: string;
}

export const Image = styled.figure<ImageProps>`
  display: inline-block;
  object-fit: cover;

  height: 100%;
  width: 100%;
  margin: 0;

  background-color: ${colors.gray100};

  img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
  }

  svg {
    position: relative;
    height: 100%;
    width: 100%;
    vertical-align: top;
  }

  ${(props) =>
    props.isloading === "true"
      ? css`
          backdrop-filter: blur(4px);
          cursor: progress;
          ${props.theme === "dark" ? loadings.dark : loadings.light}
        `
      : null}
`;
