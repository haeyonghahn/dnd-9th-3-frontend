import { icons } from "@/_shared/icons";
import { Svg } from "./Icon.styled";

interface IIconProps {
  icon: string;
  block?: string;
  minX: string;
  minY: string;
  viewBoxWidth: string;
  viewBoxHeight: string;
}

const Icon = ({
  icon,
  block,
  minX,
  minY,
  viewBoxWidth,
  viewBoxHeight,
  ...props
}: IIconProps) => {
  return (
    <Svg
      viewBox={`${minX} ${minY} ${viewBoxWidth} ${viewBoxHeight}`}
      width="24"
      height="24"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      block={block}
      stroke="currentColor"
      {...props}
    >
      {icons[icon]}
    </Svg>
  );
};

export default Icon;
