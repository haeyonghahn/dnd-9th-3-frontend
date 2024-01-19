import { ImageBoxWrapper } from "./ImageBox.styled";
import Icon from "@/foundations/Icon";

const ImageBox = ({ icon, 
  theme, 
  size = "large", 
  minX, 
  minY, 
  viewBoxWidth, 
  viewBoxHeight }: ImageBoxElement) => {

  let imageContent = (
    <Icon icon={icon} 
      minX={minX} 
      minY={minY} 
      viewBoxWidth={viewBoxWidth} 
      viewBoxHeight={viewBoxHeight} />
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
