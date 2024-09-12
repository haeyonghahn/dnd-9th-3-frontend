import { colors } from "@/_shared/colors";
import styled from "styled-components";

export const Preview = styled.label`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  border: 3px dashed ${colors.gray500};
  cursor: pointer;
  &.active {
    background-color: ${colors.gray600};
    border-color: #111;
  }
`;

export const FileInput = styled.input`
  max-width: 100%;
  width: 100%;
  display: none;
`;
