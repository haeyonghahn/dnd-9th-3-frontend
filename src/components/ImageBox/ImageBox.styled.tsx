import styled from "styled-components";
import { colors } from "@/_shared/colors";

interface IImageBoxWrapperProps {
  [key: string]: string;
}

interface IImageBoxProps {
  theme: string;
  size: string;
}

const bgColor: IImageBoxWrapperProps = {
  dark: colors.black,
  light: colors.gray50,
};

const imageWidth: IImageBoxWrapperProps = {
  large: "400px",
  medium: "300px",
  small: "220px",
};

const imageHeight: IImageBoxWrapperProps = {
  large: "200px",
  medium: "150px",
  small: "110px",
};

const borderRadius: IImageBoxWrapperProps = {
  large: "12px",
  medium: "8px",
  small: "8px",
};

export const ImageBoxWrapper = styled.figure<IImageBoxProps>`
  display: flex;
  width: ${(props) => imageWidth[props.size]};
  height: ${(props) => imageHeight[props.size]};
  margin: 0;
  border-radius: ${(props) => borderRadius[props.size]};

  background: ${(props) => bgColor[props.theme]};

  align-items: center;
  justify-content: center;

  overflow: hidden;
  transition: 0.3s;

  svg {
    width: 33%;
    height: 33%;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
