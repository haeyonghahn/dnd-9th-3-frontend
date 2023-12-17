import { Svg } from "./IconSocial.styled";
interface IconSocialProps {
  icon: JSX.Element;
}

const IconSocial: React.FC<IconSocialProps> = ({ icon }) => {
  return (
    <>
      <Svg
        width="324"
        height="47"
        viewBox="0 0 324 47"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {icon}
      </Svg>
    </>
  );
};

export default IconSocial;
