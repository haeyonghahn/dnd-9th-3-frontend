import Logo from "@/foundations/Logo/Logo";
import { ImageBoxWrapper } from "./ImageBox.styled";

interface IImageBoxProps {
  isLoading: string;
}

const ImageBox = ({ isLoading, ...props }: IImageBoxProps) => {
  let imageContent = <Logo />;
  return <ImageBoxWrapper>{imageContent}</ImageBoxWrapper>;
};
