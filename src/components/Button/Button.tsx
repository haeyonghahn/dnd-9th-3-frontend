import { Layout } from "./Button.styled";

interface IButtonProps {
  width: string;
  disabled?: boolean;
  isloading?: string;
  theme?: string;
  cancel?: string;
  onClick?: () => void;
  text?: string;
  none?: string;
  fontSize?: string;
  bordercolor?: string;
  color?: string;
  backgroundcolor?: string;
}

const Button = ({
  width,
  disabled,
  isloading,
  theme,
  cancel,
  onClick,
  text,
  none,
  fontSize,
  bordercolor,
  color,
  backgroundcolor,
}: IButtonProps): React.JSX.Element => {
  return (
    <Layout
      width={width}
      disabled={disabled}
      isloading={isloading}
      theme={theme}
      cancel={cancel}
      onClick={onClick}
      none={none}
      fontSize={fontSize}
      bordercolor={bordercolor}
      color={color}
      backgroundcolor={backgroundcolor}
    >
      {text}
    </Layout>
  );
};

export default Button;
