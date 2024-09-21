import styled from "styled-components";

export const SettingWrapper = styled.div`
  margin-top: 5%;
  margin-bottom: 5%;
`;

export const SettingHeaderWrapper = styled.div`
  margin-top: 5%;
  text-align: center;
`;

export const SettingHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 5%;
  align-items: center;
  position: relative;
`;

export const IconWrapper = styled.div`
  position: absolute;
  left: 10px;
`;

export const TitleWrapper = styled.div`
  flex: 1;
  text-align: center;
`;

export const SettingIndicator = styled.div`
  height: 2px;
  width: 100%;
  margin-top: 20px;
  background-color: #282932;
`;

export const SettingBox = styled.div`
  height: 80px;
  width: calc(100% - 10%);
  background-color: #282932;
  margin-left: 5%;
  margin-right: 5%;
  border-radius: 10px;
  margin-bottom: 5%;
`;

export const SettingContent = styled.div`
  height: 100%;
  padding-left: 5%;
  padding-top: 40px;
  padding-bottom: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const SwitchWrapper = styled.div`
  padding-right: 20px;
`;
