import { avatar } from "@/_shared/icons";

interface AvatarBaseProps {
  image: string;
}

const AvatarBase = ({ image }: AvatarBaseProps) => {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {avatar[image]}
    </svg>
  );
};

export default AvatarBase;
