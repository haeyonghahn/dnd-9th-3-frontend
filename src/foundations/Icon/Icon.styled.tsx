import styled from "styled-components";

interface ISvgProps {
  block?: string;
}

export const Svg = styled.svg<ISvgProps>`
  display: ${(props) => (props.block ? "block" : "inline-block")};
  stroke-width: 0.1;
  stroke-linecap: round;
  stroke-linejoin: round;
  cursor: pointer;
`;
