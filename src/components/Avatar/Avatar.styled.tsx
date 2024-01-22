import { colors } from "@/_shared/colors";
import loadings from "@/_shared/animations/loadings";
import styled, { css } from "styled-components";

interface IObjectProps {
  [key: string]: string;
}

interface IAvatarProps {
  size: string;
  isloading?: string;
  theme: string;
}

const fontSize: IObjectProps = {
  extraLarge: "3rem",
  large: "1.25rem",
  medium: "0.875rem",
  small: "0.625rem",
};

const sizeNum: IObjectProps = {
  extraLarge: "100px",
  large: "40px",
  medium: "28px",
  small: "20px",
};

export const Image = styled.figure<IAvatarProps>`
  display: inline-block;
  object-fit: cover;

  height: ${(props) => sizeNum[props.size]};
  width: ${(props) => sizeNum[props.size]};
  min-width: ${(props) => sizeNum[props.size]};
  margin: 0;
  border-radius: 50%;

  background-color: ${colors.gray100};

  line-height: ${(props) => sizeNum[props.size]};
  user-select: none;
  text-transform: uppercase;
  user-select: none;

  img {
    width: 100%;
    height: auto;
    display: block;
    object-fit: cover;
    border-radius: 50%;
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

export const Initial = styled.div<IAvatarProps>`
  text-align: center;
  color: ${colors.gray800};
  user-select: none;
  font-size: ${(props) => fontSize[props.size]};
  line-height: "100px";
`;
