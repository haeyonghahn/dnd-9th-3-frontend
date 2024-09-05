import { forwardRef } from "react";
import {
  Label,
  Layout,
  Message,
  MessageBox,
  TextAreaBox,
  TextAreaText,
} from "./TextArea.styled";
import Icon from "@/foundations/Icon";

type Status = "default" | "error" | "success";
type IconDirection = "left" | "right";

interface IInputProps {
  title?: string;
  placeholder?: string;
  message?: string;
  messageBoxShow?: boolean;
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
      messageBoxShow = true,
      status,
      icon,
      icondirection,
      theme,
      value,
      handleChange,
    }: IInputProps,
    textAreaRef: React.ForwardedRef<HTMLTextAreaElement>
  ) => {
    return (
      <Layout>
        <Label status={status}>{title}</Label>
        <TextAreaBox
          theme={theme}
          status={status}
          icondirection={icondirection}
        >
          {icon && <Icon icon={icon} />}
          <TextAreaText
            placeholder={placeholder}
            ref={textAreaRef}
            onChange={(event) => handleChange(event)}
            value={value || ""}
          ></TextAreaText>
        </TextAreaBox>
        {messageBoxShow ? (
          <MessageBox>
            {status === "error" ? (
              <Icon icon="warning" />
            ) : (
              <Message status={status}></Message>
            )}
            <Message status={status}>{message}</Message>
          </MessageBox>
        ) : null}
      </Layout>
    );
  }
);

export default TextArea;
