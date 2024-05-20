import { useEffect, useState } from "react";
import { colors } from "../colors";
import { useRouter } from "@/hooks/useRouter";

interface IBasicProps {
  [key: string]: () => JSX.Element;
}

const sidebar: IBasicProps = {
  mygooding: (): JSX.Element => {
    const [color, setColor] = useState(colors.gray650);
    const { currentPath } = useRouter();

    const handleColor = () => {
      if (currentPath === "/my/record") {
        setColor(colors.white);
      } else {
        setColor(colors.gray650);
      }
    };
    useEffect(() => {
      console.log("/my/record");
      handleColor();
    });
    return (
      <>
        <svg
          width="20"
          height="21"
          viewBox="0 0 20 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="10" cy="5" r="5" fill={color} />
          <path
            d="M0 19C0 15.6863 2.68629 13 6 13H14C17.3137 13 20 15.6863 20 19V20C20 20.5523 19.5523 21 19 21H1C0.447715 21 0 20.5523 0 20V19Z"
            fill={color}
          />
        </svg>
      </>
    );
  },
  record: (): JSX.Element => {
    const [color, setColor] = useState(colors.gray650);
    const { currentPath } = useRouter();

    const handleColor = () => {
      if (currentPath === "/record") {
        setColor(colors.white);
      } else {
        setColor(colors.gray650);
      }
    };
    useEffect(() => {
      console.log("/record");
      handleColor();
    });
    return (
      <>
        <svg
          width="21"
          height="20"
          viewBox="0 0 21 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_3737_22116)">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10.5 20C16.0228 20 20.5 15.5228 20.5 10C20.5 4.47715 16.0228 0 10.5 0C4.97715 0 0.5 4.47715 0.5 10C0.5 15.5228 4.97715 20 10.5 20ZM10.0398 5.01334C10.2182 4.62059 10.7768 4.62283 10.952 5.017L12.2622 7.96485C12.3123 8.07762 12.4023 8.16786 12.515 8.21823L15.4791 9.54355C15.8737 9.71996 15.8737 10.28 15.4791 10.4565L12.515 11.7818C12.4023 11.8321 12.3123 11.9224 12.2622 12.0351L10.952 14.983C10.7768 15.3772 10.2182 15.3794 10.0398 14.9867L8.69787 12.0315C8.64768 11.921 8.55899 11.8325 8.44835 11.7825L5.50943 10.4557C5.11707 10.2786 5.11707 9.72142 5.50943 9.54429L8.44835 8.21749C8.55899 8.16754 8.64768 8.07905 8.69787 7.96852L10.0398 5.01334Z"
              fill={color}
            />
          </g>
          <defs>
            <clipPath id="clip0_3737_22116">
              <rect
                width="20"
                height="20"
                fill={color}
                transform="translate(0.5)"
              />
            </clipPath>
          </defs>
        </svg>
      </>
    );
  },
  feed: (): JSX.Element => {
    const [color, setColor] = useState(colors.gray650);
    const { currentPath } = useRouter();

    const handleColor = () => {
      if (currentPath === "/feed") {
        setColor(colors.white);
      } else {
        setColor(colors.gray650);
      }
    };
    useEffect(() => {
      console.log("/feed");
      handleColor();
    });
    return (
      <>
        <svg
          width="19"
          height="18"
          viewBox="0 0 19 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="0.5" width="18" height="3" rx="1" fill={color} />
          <rect x="0.5" y="15" width="18" height="3" rx="1" fill={color} />
          <rect x="0.5" y="5" width="18" height="8" rx="1" fill={color} />
        </svg>
      </>
    );
  },
};

export default sidebar;
