import { Text } from "./Typography.styled";

interface ITypographyProps {
  text: string;
  type: string;
}

function Typography({ text, type }: ITypographyProps) {
  return <Text type={type}>{text}</Text>;
}

export default Typography;
