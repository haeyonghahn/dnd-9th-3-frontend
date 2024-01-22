import { Image, Initial } from "./Avatar.styled";
import AvatarBase from "./AvatarBase";

interface Avatar {
  size: string;
  isloading?: string;
  theme: string;
  username?: string;
  src?: string;
}

const Avatar = ({ size, isloading, theme, src, username }: Avatar) => {
  let avatarFigure = <AvatarBase image="user" />;
  if (isloading === "true") {
    avatarFigure = <></>;
  } else if (src) {
    avatarFigure = <img src={src} alt={username}></img>;
  } else if (username) {
    avatarFigure = <Initial size={size}>{username.substring(0, 1)}</Initial>;
  }
  return (
    <>
      <Image size={size} isloading={isloading} theme={theme}>
        {avatarFigure}
      </Image>
    </>
  );
};

export default Avatar;
