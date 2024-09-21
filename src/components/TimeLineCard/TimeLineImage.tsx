import { Image } from "./TimeLineImage.styled";

interface TimeLineImageProps {
  theme?: string;
  isloading?: string;
  src?: string;
}

const TimeLineImage = ({ isloading, src }: TimeLineImageProps) => {
  let avatarFigure = <></>;
  if (isloading === "true") {
    avatarFigure = <></>;
  } else if (src) {
    avatarFigure = <img src={src}></img>;
  }
  return (
    <>
      <Image>{avatarFigure}</Image>
    </>
  );
};

export default TimeLineImage;
