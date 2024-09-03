import { icons } from "@/_shared/icons";
import { Svg } from "./Icon.styled";

interface IIconProps {
  icon: string;
  block?: string;
  minX?: string;
  minY?: string;
  width?: string;
  height?: string;
  viewBoxWidth?: string;
  viewBoxHeight?: string;
  fill?: string;
}

const Icon = ({
  icon,
  block,
  minX = "0",
  minY = "0",
  width = "24",
  height = "24",
  viewBoxWidth = "24",
  viewBoxHeight = "24",
  fill,
  ...props
}: IIconProps) => {
  return (
    <Svg
      viewBox={`${minX} ${minY} ${viewBoxWidth} ${viewBoxHeight}`}
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      block={block}
      stroke="currentColor"
      {...props}
    >
      {icons[icon](fill)}
    </Svg>
  );
};

export default Icon;
