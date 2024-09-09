import styled from "styled-components";

export const RecordPlaceContainer = styled.div`
  height: 100vh;
`;

export const RecordPlaceHeaderWrapper = styled.div`
  margin-top: 5%;
  text-align: center;
`;

export const RecordPlaceIndicator = styled.div`
  height: 2px;
  width: 100%;
  margin-top: 20px;
  background-color: #282932;
`;

export const RecordPlaceInputBox = styled.div`
  width: calc(100% - 10%);
  margin-top: 3%;
  margin-bottom: 3%;
  margin-left: 5%;
  margin-right: 5%;
`;

export const RecordPlaceBox = styled.div`
  width: calc(100% - 10%);
  margin-left: 5%;
  margin-right: 5%;
  height: 70%;
  overflow: auto; // 스크롤을 자동으로 추가
`;

export const RecordPlaceContent = styled.div`
  display: flex;
  justify-content: center;
`;

export const RecordPlaceCard = styled.div`
  display: flex;
  justify-content: left;
  flex-direction: column;
  margin-bottom: 5%;
`;

export const RecordPlaceCardDescription = styled.div`
  margin-top: 2%;
`;

export const RecordCardIndicator = styled.div`
  margin-top: 3%;
  height: 1px;
  background-color: #282932;
`;
