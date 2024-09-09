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

type IconDirection = "left" | "right";

interface IInputProps {
  title?: string;
  placeholder?: string;
  message?: string;
  messageBoxShow?: boolean;
  status: Status;
  icon?: string;
  icondirection?: IconDirection;
  fill?: string;
  minX?: string;
  minY?: string;
  viewBoxWidth?: string;
  viewBoxHeight?: string;
  width?: string;
  height?: string;
  number?: number;
  theme?: string;
  value?: string;
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
      icon,
      icondirection,
      fill,
      minX,
      minY,
      viewBoxWidth,
      viewBoxHeight,
      width,
      height,
      number,
      theme,
      value,
      handleChange,
      handleClick,
    }: IInputProps,
    inputRef: React.ForwardedRef<HTMLInputElement>
  ) => {
    return (
      <Layout>
        <Label status={status}>{title}</Label>
        <InputBox theme={theme} status={status} icondirection={icondirection}>
          {icon && (
            <Icon
              onClick={handleClick}
              icon={icon}
              fill={fill}
              minX={minX}
              minY={minY}
              viewBoxWidth={viewBoxWidth}
              viewBoxHeight={viewBoxHeight}
              width={width}
              height={height}
            />
          )}
          <InputText
            placeholder={placeholder}
            type={number ? "number" : "text"}
            ref={inputRef}
            onChange={(event) => handleChange(event)}
            value={value || ""}
          ></InputText>
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
