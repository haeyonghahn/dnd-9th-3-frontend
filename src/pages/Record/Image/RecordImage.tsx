import Icon from "@/foundations/Icon";
import Typography from "@/foundations/Typography";

interface IRecordImage {
  isloading?: string;
  src?: string;
  name?: string;
}

const RecordImage = ({ isloading, src, name }: IRecordImage) => {
  let avatarFigure = null;
  if (isloading === "true") {
    avatarFigure = <></>;
  } else if (src) {
    avatarFigure = <img src={src} alt={name}></img>;
  }
  return (
    <>
      {avatarFigure ? (
        avatarFigure
      ) : (
        <>
          <Icon icon="plusCircle" />
          <Typography text="사진 추가" type="h3" color="#575860" />
        </>
      )}
    </>
  );
};

export default RecordImage;
