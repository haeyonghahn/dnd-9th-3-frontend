import { forwardRef } from "react";
import {
  InputBox,
  InputText,
  Label,
  Layout,
  Message,
  MessageBox,
} from "./Input.styled";
import Icon from "@/foundations/Icon";

type Status = "default" | "error" | "success";
type IconDirection = "left" | "right";

interface IInputProps {
  title?: string;
  placeholder?: string;
  message?: string;
  status: Status;
  icon?: string;
  icondirection?: IconDirection;
  number?: number;
  theme?: string;
}

const Input = forwardRef(
  (
    {
      title,
      placeholder,
      message,
      status,
      icon,
      icondirection,
      number,
      theme,
    }: IInputProps,
    inputRef: React.ForwardedRef<HTMLInputElement>
  ) => {
    return (
      <Layout>
        <Label status={status}>{title}</Label>
        <InputBox theme={theme} status={status} icondirection={icondirection}>
          {icon && <Icon icon={icon} />}
          <InputText
            placeholder={placeholder}
            type={number ? "number" : "text"}
            ref={inputRef}
          ></InputText>
        </InputBox>
        <MessageBox>
          {status === "error" ? <Icon icon="warning" /> : null}
          <Message status={status}>{message}</Message>
        </MessageBox>
      </Layout>
    );
  }
);

export default Input;
