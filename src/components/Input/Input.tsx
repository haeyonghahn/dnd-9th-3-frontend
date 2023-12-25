import { forwardRef } from "react";
import { InputBox, InputText, Label, Layout, Message } from "./Input.styled";
import Icon from "@/foundations/Icon";

type Status = "default" | "error" | "success";

interface IInputProps {
  title?: string;
  placeholder?: string;
  message?: string;
  status: Status;
  icon?: string;
  number?: number;
  theme?: string;
}

const Input = forwardRef(
  (
    { title, placeholder, message, status, icon, number, theme }: IInputProps,
    inputRef: React.ForwardedRef<HTMLInputElement>
  ) => {
    return (
      <Layout>
        <Label status={status}>{title}</Label>
        <InputBox theme={theme} status={status}>
          {icon && <Icon icon={icon} />}
          <InputText
            placeholder={placeholder}
            type={number ? "number" : "text"}
            ref={inputRef}
          ></InputText>
        </InputBox>
        <Message status={status}>{message}</Message>
      </Layout>
    );
  }
);

export default Input;
