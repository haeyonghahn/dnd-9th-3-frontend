import styled from "styled-components";

export const Input = styled.input`
  width: 100%;
  margin: 0;
  &[type="range"]::-webkit-slider-thumb {
    -webkit-appearance: none;
    visibility: hidden;
  }
  &[type="range"]::-moz-range-thumb {
    visibility: hidden;
  }
`;
