import { updateMember } from "@/api/login";
import { userAtom } from "@/atoms/user";
import Button from "@/components/Button";
import Spinner from "@/components/Spinner";
import { useRouter } from "@/hooks/useRouter";
import { User } from "@/types/user";
import { getAccessTokenFromLocalStorage } from "@/utils/accessTokenHandler";
import { useCallback, useEffect } from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import TypeIt from "typeit-react";

const Welcome = () => {
  const { routeTo } = useRouter();
  const userProfile = useRecoilValue<User | null>(userAtom);
  const styles = {
    svg: {
      marginTop: "10%",
    } as React.CSSProperties,
    ex: {
      height: "86px",
    } as React.CSSProperties,
    text: {
      display: "inline",
    } as React.CSSProperties,
  };
  const fetchUpdateMember = useCallback(async () => {
    if (userProfile) {
      await updateMember(getAccessTokenFromLocalStorage(), userProfile);
      routeTo("/my/record");
    }
  }, []);
  const handleClick = () => {
    fetchUpdateMember();
  };

  useEffect(() => {
    if (
      !userProfile?.name ||
      !userProfile?.interests ||
      userProfile?.interests.length < 3
    ) {
      routeTo("/onboarding");
    }
  }, []);
  return (
    <>
      {!userProfile?.name ||
      !userProfile?.interests ||
      userProfile?.interests.length < 3 ? (
        <Spinner />
      ) : (
        <div className="non-logged-in-body">
          <div style={styles.ex}>
            <TypeIt>
              <h3 style={styles.text}>
                환영합니다! <br></br>
                굳잉과 함께 굳이데이 기록을 남겨보세요.
              </h3>
            </TypeIt>
          </div>
          <WelcomeImageBox>
            <svg
              width="800"
              height="500"
              viewBox="0 0 285 265"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={styles.svg}
            >
              <path
                d="M14.8066 111.713L13.5502 110.324L13.9911 108.494L12.2497 109.244L10.6406 108.252L10.839 110.148L9.40625 111.36L11.2578 111.757L11.9632 113.498L12.911 111.867L14.8066 111.713Z"
                fill="white"
              />
              <path
                d="M93.5573 158.989C93.5573 160.297 92.4588 206.051 92.4588 206.051C92.4588 206.051 91.3604 160.297 91.3604 158.989C91.3604 157.681 91.8597 156.625 92.4588 156.625C93.083 156.625 93.5573 157.681 93.5573 158.989Z"
                fill="url(#paint0_linear_2007_50793)"
              />
              <path
                d="M23.8191 217.582C23.8191 218.89 22.7206 264.644 22.7206 264.644C22.7206 264.644 21.6221 218.89 21.6221 217.582C21.6221 216.274 22.1214 215.218 22.7206 215.218C23.3447 215.218 23.8191 216.274 23.8191 217.582Z"
                fill="url(#paint1_linear_2007_50793)"
              />
              <path
                d="M263.317 207.44C263.317 208.497 262.418 245.875 262.418 245.875C262.418 245.875 261.52 208.497 261.52 207.44C261.52 206.384 261.919 205.529 262.418 205.529C262.918 205.504 263.317 206.384 263.317 207.44Z"
                fill="url(#paint2_linear_2007_50793)"
              />
              <path
                d="M203.801 173.785C203.801 174.842 202.903 212.22 202.903 212.22C202.903 212.22 202.004 174.842 202.004 173.785C202.004 172.729 202.403 171.849 202.903 171.849C203.402 171.874 203.801 172.729 203.801 173.785Z"
                fill="url(#paint3_linear_2007_50793)"
              />
              <path
                d="M58.0206 77.2134C58.0206 78.2494 57.183 79.087 56.147 79.087C55.111 79.087 54.2734 78.2494 54.2734 77.2134C54.2734 76.1774 55.111 75.3398 56.147 75.3398C57.183 75.3398 58.0206 76.1995 58.0206 77.2134Z"
                fill="white"
              />
              <path
                d="M188.905 2.83453C188.905 3.87052 188.068 4.70813 187.032 4.70813C185.996 4.70813 185.158 3.87052 185.158 2.83453C185.158 1.79855 185.996 0.960938 187.032 0.960938C188.068 0.960937 188.905 1.79855 188.905 2.83453Z"
                fill="white"
              />
              <path
                d="M159.48 144.492C159.48 145.528 158.642 146.365 157.606 146.365C156.57 146.365 155.732 145.528 155.732 144.492C155.732 143.456 156.57 142.618 157.606 142.618C158.642 142.618 159.48 143.456 159.48 144.492Z"
                fill="white"
              />
              <path
                d="M261.394 89.7291C261.394 90.7651 260.556 91.6027 259.52 91.6027C258.484 91.6027 257.646 90.7651 257.646 89.7291C257.646 88.6931 258.484 87.8555 259.52 87.8555C260.556 87.8555 261.394 88.6931 261.394 89.7291Z"
                fill="white"
              />
              <path
                d="M3.74719 195.235C3.74719 196.271 2.90958 197.109 1.8736 197.109C0.837608 197.109 0 196.271 0 195.235C0 194.199 0.837608 193.361 1.8736 193.361C2.90958 193.383 3.74719 194.221 3.74719 195.235Z"
                fill="white"
              />
              <path
                d="M214.08 107.842L215.733 108.746L217.431 107.886L217.078 109.759L218.4 111.082L216.527 111.324L215.667 113L214.852 111.302L213 110.994L214.367 109.693L214.08 107.842Z"
                fill="white"
              />
              <path
                d="M117.854 207.957L119.508 208.861L121.205 208.001L120.852 209.853L122.175 211.197L120.301 211.44L119.442 213.115L118.648 211.418L116.774 211.109L118.141 209.809L117.854 207.957Z"
                fill="white"
              />
              <path
                d="M280.212 171.358L281.866 172.262L283.541 171.402L283.188 173.276L284.533 174.621L282.659 174.841L281.8 176.516L280.984 174.819L279.11 174.51L280.499 173.21L280.212 171.358Z"
                fill="white"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M172.104 63.7768C172.104 66.4638 177.083 68.6421 183.225 68.6421C189.366 68.6421 194.345 66.4638 194.345 63.7768C194.345 61.0897 189.366 58.9115 183.225 58.9115C177.083 58.9115 172.104 61.0897 172.104 63.7768ZM164.776 81.4685C162.876 83.3685 164.856 88.4293 169.199 92.7722C173.542 97.1151 178.602 99.0954 180.502 97.1954C182.403 95.2954 180.422 90.2345 176.079 85.8917C171.736 81.5488 166.676 79.5684 164.776 81.4685ZM142.217 99.9184C142.217 93.7766 144.395 88.7978 147.082 88.7978C149.769 88.7978 151.948 93.7766 151.948 99.9184C151.948 106.06 149.769 111.039 147.082 111.039C144.395 111.039 142.217 106.06 142.217 99.9184ZM129.39 81.4694C127.49 79.5694 122.429 81.5497 118.086 85.8926C113.743 90.2355 111.763 95.2963 113.663 97.1963C115.563 99.0964 120.624 97.116 124.967 92.7731C129.31 88.4302 131.29 83.3694 129.39 81.4694ZM110.94 68.6421C104.799 68.6421 99.8198 66.4638 99.8198 63.7768C99.8198 61.0897 104.799 58.9115 110.94 58.9115C117.082 58.9115 122.061 61.0897 122.061 63.7768C122.061 66.4638 117.082 68.6421 110.94 68.6421ZM113.663 30.3563C111.763 32.2563 113.743 37.3172 118.086 41.66C122.429 46.0029 127.49 47.9833 129.39 46.0833C131.29 44.1832 129.309 39.1224 124.967 34.7795C120.624 30.4366 115.563 28.4563 113.663 30.3563ZM142.217 27.6343C142.217 21.4926 144.395 16.5137 147.082 16.5137C149.769 16.5137 151.948 21.4926 151.948 27.6343C151.948 33.7761 149.769 38.755 147.082 38.755C144.395 38.755 142.217 33.7761 142.217 27.6343ZM180.503 30.3561C178.603 28.4561 173.542 30.4364 169.199 34.7793C164.856 39.1222 162.876 44.1831 164.776 46.0831C166.676 47.9831 171.737 46.0028 176.08 41.6599C180.422 37.317 182.403 32.2561 180.503 30.3561Z"
                fill="url(#paint4_linear_2007_50793)"
              />
              <path
                d="M144.664 79.7366C145.601 81.8456 148.59 81.8576 149.544 79.7562L153.371 71.3282C153.64 70.7368 154.115 70.2633 154.707 69.996L163.083 66.2143C165.183 65.2666 165.183 62.2855 163.083 61.3377L154.707 57.556C154.115 57.2888 153.64 56.8153 153.371 56.2239L149.544 47.7959C148.59 45.6945 145.601 45.7065 144.664 47.8155L140.935 56.2043C140.667 56.8076 140.185 57.2905 139.583 57.56L131.142 61.3338C129.031 62.2777 129.031 65.2744 131.142 66.2183L139.583 69.9921C140.185 70.2616 140.667 70.7444 140.935 71.3478L144.664 79.7366Z"
                fill="url(#paint5_angular_2007_50793)"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M43.4371 153.281C41.606 153.281 40.1217 156.674 40.1217 160.859C40.1217 165.045 41.606 168.437 43.4371 168.437C45.2682 168.437 46.7525 165.045 46.7525 160.859C46.7525 156.674 45.2682 153.281 43.4371 153.281ZM26.3859 136.23C26.3859 134.399 22.993 132.915 18.8077 132.915C14.6224 132.915 11.2296 134.399 11.2296 136.23C11.2296 138.061 14.6224 139.546 18.8077 139.546C22.993 139.546 26.3859 138.061 26.3859 136.23ZM40.1217 111.602C40.1217 107.416 41.606 104.023 43.4371 104.023C45.2682 104.023 46.7525 107.416 46.7525 111.602C46.7525 115.787 45.2682 119.18 43.4371 119.18C41.606 119.18 40.1217 115.787 40.1217 111.602ZM75.644 136.23C75.644 134.399 72.2512 132.915 68.0659 132.915C63.8806 132.915 60.4878 134.399 60.4878 136.23C60.4878 138.061 63.8806 139.546 68.0659 139.546C72.2512 139.546 75.644 138.061 75.644 136.23Z"
                fill="url(#paint6_linear_2007_50793)"
              />
              <path
                d="M45.0847 125.354C44.4459 123.917 42.4091 123.908 41.7589 125.34L39.1508 131.084C38.9678 131.487 38.6444 131.809 38.241 131.992L32.5328 134.569C31.1022 135.214 31.1022 137.246 32.5328 137.892L38.241 140.469C38.6444 140.651 38.9678 140.973 39.1508 141.376L41.7589 147.12C42.4091 148.552 44.4459 148.544 45.0847 147.106L47.6254 141.39C47.8081 140.979 48.1364 140.65 48.5472 140.466L54.2988 137.894C55.7373 137.251 55.7373 135.209 54.2988 134.566L48.5472 131.994C48.1364 131.811 47.8081 131.481 47.6254 131.07L45.0847 125.354Z"
                fill="url(#paint7_angular_2007_50793)"
              />
              <path
                d="M238.573 162.244C239.127 163.491 240.895 163.498 241.459 162.255L244.053 156.544C244.212 156.194 244.492 155.914 244.842 155.756L250.52 153.193C251.761 152.633 251.761 150.87 250.52 150.309L244.842 147.746C244.492 147.588 244.212 147.308 244.053 146.959L241.459 141.247C240.895 140.005 239.127 140.012 238.573 141.259L236.045 146.947C235.886 147.304 235.602 147.589 235.245 147.749L229.523 150.307C228.275 150.865 228.275 152.637 229.523 153.195L235.245 155.754C235.602 155.913 235.886 156.199 236.045 156.556L238.573 162.244Z"
                fill="url(#paint8_angular_2007_50793)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_2007_50793"
                  x1="92.4588"
                  y1="156.625"
                  x2="92.4588"
                  y2="206.051"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="white" />
                  <stop offset="1" stopColor="white" stopOpacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_2007_50793"
                  x1="22.7206"
                  y1="215.218"
                  x2="22.7206"
                  y2="264.644"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="white" />
                  <stop offset="1" stopColor="white" stopOpacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint2_linear_2007_50793"
                  x1="262.418"
                  y1="205.528"
                  x2="262.418"
                  y2="245.875"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="white" />
                  <stop offset="1" stopColor="white" stopOpacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint3_linear_2007_50793"
                  x1="202.903"
                  y1="171.849"
                  x2="202.903"
                  y2="212.22"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="white" />
                  <stop offset="1" stopColor="white" stopOpacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint4_linear_2007_50793"
                  x1="147.083"
                  y1="119.065"
                  x2="147.083"
                  y2="6.70443"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0.21875" stopColor="#FF91DD" />
                  <stop offset="0.817708" stopColor="#3DEFA3" />
                </linearGradient>
                <radialGradient
                  id="paint5_angular_2007_50793"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(147.082 63.776) rotate(90) scale(21.402)"
                >
                  <stop stopColor="#FF59D0" />
                  <stop offset="0.510417" stopColor="white" />
                  <stop offset="1" stopColor="#3CEFA3" />
                </radialGradient>
                <linearGradient
                  id="paint6_linear_2007_50793"
                  x1="11.2296"
                  y1="168.437"
                  x2="64.7501"
                  y2="114.917"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0.368658" stopColor="#FF91DD" />
                  <stop offset="0.780533" stopColor="#3CEFA3" />
                </linearGradient>
                <radialGradient
                  id="paint7_angular_2007_50793"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(43.4366 136.23) rotate(90) scale(14.5843)"
                >
                  <stop stopColor="#FF59D0" />
                  <stop offset="0.510417" stopColor="white" />
                  <stop offset="1" stopColor="#3CEFA3" />
                </radialGradient>
                <radialGradient
                  id="paint8_angular_2007_50793"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(240.003 151.751) rotate(90) scale(13.7103)"
                >
                  <stop stopColor="#FF59D0" />
                  <stop offset="0.510417" stopColor="white" />
                  <stop offset="1" stopColor="#3CEFA3" />
                </radialGradient>
              </defs>
            </svg>
          </WelcomeImageBox>
          <ButtonBox>
            <Button
              width="-webkit-fill-available"
              text="굳잉 시작하기"
              onClick={() => handleClick()}
            />
          </ButtonBox>
        </div>
      )}
    </>
  );
};

export const WelcomeImageBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ButtonBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5%;
  width: -webkit-fill-available;
`;

export default Welcome;
