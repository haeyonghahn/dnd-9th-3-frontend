import { fontWeight } from "@/_shared/typography";
import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  user-select: none;
`;

export const Header = styled.div`
  margin: 10% 0px 10% 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: ${fontWeight.semiBold};
  font-size: 18px;
`;

export const Title = styled.div`
  flex: 1;
  text-align: center;
  margin-left: 50px;
`;

export const SettingImage = styled.div`
  float: right;
  margin-right: 30px;
  cursor: pointer;
`;

export const LevelWrapper = styled.div`
  height: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const LevelTitle = styled.div`
  padding: 1px;
  border: 1px solid transparent; /* 기본 border를 투명하게 설정 */
  border-radius: 5px;
  margin: 20px 0px;
  width: fit-content;
  font-weight: 600;
  font-size: 12px;
  background-image: linear-gradient(#1c1d27, #1c1d27),
    /* 내부 배경 */ linear-gradient(to right, #ff59d0, #3cefa3); /* 그라데이션 색상 */
  background-origin: border-box;
  background-clip: content-box, border-box;
`;

export const LevelTitleText = styled.div`
  padding: 5px;
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

export const ProfileInfo = styled.div`
  display: flex;
  align-items: center;
`;

export const ProfileName = styled.div`
  padding-left: 10px;
`;
