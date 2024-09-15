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
import { Status } from "@/types/status";

interface IInputProps {
  title?: string;
  placeholder?: string;
  message?: string;
  messageBoxShow?: boolean;
  status: Status;
  leftIcon?: string;
  leftfill?: string;
  leftminX?: string;
  leftminY?: string;
  leftviewBoxWidth?: string;
  leftviewBoxHeight?: string;
  leftwidth?: string;
  leftheight?: string;
  rightIcon?: string;
  rightfill?: string;
  rightminX?: string;
  rightminY?: string;
  rightviewBoxWidth?: string;
  rightviewBoxHeight?: string;
  rightwidth?: string;
  rightheight?: string;
  number?: number;
  theme?: string;
  value?: string;
  disabled?: boolean;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleClick?: () => void;
}

const Input = forwardRef(
  (
    {
      title,
      placeholder,
      message,
      messageBoxShow = true,
      status,
      leftIcon,
      leftfill,
      leftminX,
      leftminY,
      leftviewBoxWidth,
      leftviewBoxHeight,
      leftwidth,
      leftheight,
      rightIcon,
      rightfill,
      rightminX,
      rightminY,
      rightviewBoxWidth,
      rightviewBoxHeight,
      rightwidth,
      rightheight,
      number,
      theme,
      value,
      disabled = false,
      handleChange,
      handleClick,
    }: IInputProps,
    inputRef: React.ForwardedRef<HTMLInputElement>
  ) => {
    return (
      <Layout>
        <Label status={status}>{title}</Label>
        <InputBox theme={theme} status={status}>
          {leftIcon && (
            <>
              <Icon
                onClick={handleClick}
                icon={leftIcon}
                fill={leftfill}
                minX={leftminX}
                minY={leftminY}
                viewBoxWidth={leftviewBoxWidth}
                viewBoxHeight={leftviewBoxHeight}
                width={leftwidth}
                height={leftheight}
              />
            </>
          )}
          <InputText
            placeholder={placeholder}
            type={number ? "number" : "text"}
            ref={inputRef}
            onChange={(event) => handleChange(event)}
            value={value || ""}
            disabled={disabled}
          ></InputText>
          {rightIcon && (
            <>
              <Icon
                onClick={handleClick}
                icon={rightIcon}
                fill={rightfill}
                minX={rightminX}
                minY={rightminY}
                viewBoxWidth={rightviewBoxWidth}
                viewBoxHeight={rightviewBoxHeight}
                width={rightwidth}
                height={rightheight}
              />
            </>
          )}
        </InputBox>
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

export default Input;
