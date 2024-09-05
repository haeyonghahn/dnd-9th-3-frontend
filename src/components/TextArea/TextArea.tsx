import { forwardRef } from "react";
import {
  InputBox,
  InputText,
  Label,
  Layout,
  Message,
  MessageBox,
} from "./TextArea.styled";
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
  theme?: string;
  value?: string;
  handleChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const TextArea = forwardRef(
  (
    {
      title,
      placeholder,
      message,
      status,
      icon,
      icondirection,
      theme,
      value,
      handleChange,
    }: IInputProps,
    inputRef: React.ForwardedRef<HTMLTextAreaElement>
  ) => {
    return (
      <Layout>
        <Label status={status}>{title}</Label>
        <InputBox theme={theme} status={status} icondirection={icondirection}>
          {icon && <Icon icon={icon} />}
          <InputText
            placeholder={placeholder}
            ref={inputRef}
            onChange={(event) => handleChange(event)}
            value={value || ""}
          ></InputText>
        </InputBox>
        <MessageBox>
          {status === "error" ? (
            <Icon icon="warning" />
          ) : (
            <Message status={status}></Message>
          )}
          <Message status={status}>{message}</Message>
        </MessageBox>
      </Layout>
    );
  }
);

export default TextArea;
