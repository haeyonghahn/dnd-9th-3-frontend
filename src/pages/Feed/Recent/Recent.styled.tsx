import styled from "styled-components";

export const RecentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 75vh;
  justify-content: space-between;
`;

export const FeedLocationWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const FeedLocation = styled.div`
  display: flex;
  align-items: center;
  background-color: rgba(128, 118, 118, 0.5);
  padding: 5px;
  border-radius: 10px;
`;

export const FeedLocationName = styled.div`
  padding-left: 3px;
`;

export const FeedTitle = styled.div`
  margin-top: 20px;
`;

export const FeedDescription = styled.div`
  margin-top: 10px;
  white-space: nowrap; /* 텍스트가 줄바꿈 없이 한 줄로 유지되도록 설정 */
  overflow: hidden; /* 넘치는 텍스트를 숨김 */
  text-overflow: ellipsis; /* 넘치는 텍스트를 '...'로 처리 */
`;

export const BookMark = styled.div`
  cursor: pointer;
`;

export const EllipseWrapper = styled.div`
  margin-top: 10px;
  text-align: center;
`;
