import { ImageBoxWrapper } from "./ImageBox.styled";
import Icon from "@/foundations/Icon";

interface IImageBoxProps {
  icon: string;
  theme: string;
  size: string;
}

const ImageBox = ({ icon, theme, size }: IImageBoxProps) => {
  let imageContent = (
    <Icon icon={icon} minX="0" minY="0" viewBoxWidth="48" viewBoxHeight="48" />
  );
  return (
    <>
      <ImageBoxWrapper theme={theme} size={size}>
        {imageContent}
      </ImageBoxWrapper>
    </>
  );
};

export default ImageBox;
