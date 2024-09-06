interface IRecordImage {
  size?: string;
  isloading?: string;
  theme?: string;
  src?: string;
  name?: string;
}

const RecordImage = ({ size, isloading, theme, src, name }: IRecordImage) => {
  let avatarFigure = <></>;
  if (isloading === "true") {
    avatarFigure = <></>;
  } else if (src) {
    avatarFigure = <img src={src} alt={name}></img>;
  }
  return <></>;
};

export default RecordImage;
