import { colors } from "@/_shared/colors";
import styled from "styled-components";

export const Box = styled.div`
  height: 100%;
  min-width: 250px;
  background-color: ${colors.black};
  margin-right: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  &:last-child {
    margin-right: 0px;
  }
`;

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

export const Input = styled.input`
  max-width: 100%;
  width: 100%;
  display: none;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  &.hide {
    display: none;
  }
`;

export const Vide = styled.video`
  width: 100%;
  height: 100%;
  &.hide {
    display: none;
  }
`;
