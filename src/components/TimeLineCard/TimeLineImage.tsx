import { Image } from "./TimeLineImage.styled";

interface ITimeLineImageProps {
  theme?: string;
  isloading?: string;
  src?: string;
}

const TimeLineImage = ({
  isloading,
  src
}: ITimeLineImageProps) => {
  let avatarFigure = <></>;
  if (isloading === "true") {
    avatarFigure = <></>;
  } else if (src) {
    avatarFigure = <img src={src}></img>;
  }
  return (
    <>
      <Image>
        {avatarFigure}
      </Image>
    </>
  );
};

export default TimeLineImage;