import { Layout } from "./Button.styled";

interface IButtonProps {
  width: string;
  isloading?: string;
  disabled?: boolean;
  text?: string;
}

const Button = ({
  width,
  isloading,
  text,
  disabled,
}: IButtonProps): React.JSX.Element => {
  return (
    <Layout width={width} disabled={disabled} isloading={isloading}>
      {text}
    </Layout>
  );
};

export default Button;
