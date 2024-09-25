import styled from "styled-components";

export const Wrapper = styled.div<{ showcontrol: string }>`
  width: 100%;
  height: ${(props) => (props.showcontrol === "true" ? 16 : 7)}px;
  position: absolute;
  bottom: 0;
  left: 0;
`;
