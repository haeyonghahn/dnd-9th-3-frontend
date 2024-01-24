import { Text } from "./Typography.styled";

interface ITypographyProps {
  text: string;
  type: string;
  textover?: string;
  textoverwidth?: string;
}

function Typography({ text, type, textover, textoverwidth }: ITypographyProps) {
  return <Text type={type} textover={textover} textoverwidth={textoverwidth}>{text}</Text>;
}

export default Typography;
