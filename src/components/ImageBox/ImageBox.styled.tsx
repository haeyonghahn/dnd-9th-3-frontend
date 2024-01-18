import styled from "styled-components";

export const ImageBoxWrapper = styled.figure`
  display: flex;
  width: 400px;
  height: 150;
  margin: 0;
  border: 8px;
  background: ${(props) => props.theme.bgColor};

  align-items: center;
  justify-content: center;

  overflow: hidden;
  transition: 0.3s;

  svg {
    width: 33%;
    height: 33%;
    filter: blur(5px);
  }
`;
