import Video from "../Video";
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
  } else if (src?.endsWith(".mp4")) {
    avatarFigure = <Video src={src} />;
  } else {
    avatarFigure = (
      <Image>
        <img src={src}></img>
      </Image>
    );
  }
  return <>{avatarFigure}</>;
};

export default TimeLineImage;
