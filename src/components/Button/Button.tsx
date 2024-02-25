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
}

const Button = ({
  width,
  disabled,
  isloading,
  theme,
  cancel,
  onClick,
  text,
  none
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
    >
      {text}
    </Layout>
  );
};

export default Button;
