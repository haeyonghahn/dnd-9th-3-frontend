import { colors } from "@/_shared/colors";
import { fontSize, fontWeight } from "@/_shared/typography";
import styled from "styled-components";

type Status = "default" | "error" | "success";
type IconDirection = "left" | "right";

interface IInputBoxProps {
  theme?: string;
  status: string;
  icondirection?: IconDirection;
}

interface ILabelProps {
  status: Status;
}

interface IMessageProps {
  status: string;
}

interface IColorProps {
  [key: string]: string;
}

const hoverColor: IColorProps = {
  default: colors.green50,
  error: colors.error,
};

const messageColor: IColorProps = {
  default: colors.inputTextClor,
  error: colors.error,
};

const insetColor: IColorProps = {
  default: colors.green50,
  error: colors.errorOpacity200,
};

const isDarkFocusColor: IColorProps = {
  default: colors.gray850,
  error: colors.errorOpacity100,
};

const isWhiteFocusColor: IColorProps = {
  default: colors.gray50,
  error: colors.errorOpacity100,
};

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const InputBox = styled.div<IInputBoxProps>`
  display: flex;
  align-items: center;
  flex-direction: ${(props) =>
    props.icondirection === "right" ? "row-reverse" : ""};
  box-sizing: border-box;
  height: 42px;
  padding: 0 16px;
  border: 1px solid
    ${(props) =>
      props.status === "error"
        ? colors.error
        : props.theme === "dark"
        ? colors.gray850
        : colors.gray50};
  border-radius: 6px;
  background-color: ${(props) =>
    props.theme === "dark" ? colors.gray850 : colors.gray50};

  transition: 0.4s;

  &:hover {
    border: 1px solid ${(props) => hoverColor[props.status]};
  }

  &:focus-within {
    box-shadow: 0 0 0 3px
        ${(props) =>
          props.theme === "dark"
            ? isDarkFocusColor[props.status]
            : isWhiteFocusColor[props.status]},
      inset 0 0 0 1px ${(props) => insetColor[props.status]};
  }
`;

export const InputText = styled.input`
  width: 100%;
  margin-left: 8px;
  margin-right: 8px;
  border: none;
  background: transparent;

  font-size: ${fontSize.body1};
  font-weight: ${fontWeight.semiBoldRegular};
  color: ${colors.white};
  outline: none;
`;

export const Label = styled.label<ILabelProps>`
  font-size: ${fontSize.h2};
  font-weight: ${fontWeight.semiBold};
  color: ${(props) => props.theme.textColor};
`;

export const MessageBox = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 6px;
  height: 30px;
`;

export const Message = styled.div<IMessageProps>`
  font-size: ${fontSize.body1};
  font-weight: ${fontWeight.semiBoldRegular};
  color: ${(props) => messageColor[props.status]};
`;
