import { Text } from "./Typography.styled";

interface ITypographyProps {
  text: string;
  type: string;
  textover?: string;
  textoverwidth?: string;
  color?: string;
}

function Typography({
  text,
  type,
  textover,
  textoverwidth,
  color,
}: ITypographyProps) {
  return (
    <Text
      type={type}
      textover={textover}
      textoverwidth={textoverwidth}
      color={color}
    >
      {text}
    </Text>
  );
}

export default Typography;
