import { loadings } from "@/_shared/animations";
import { fontSize, fontWeight } from "@/_shared/typography";
import styled, { css } from "styled-components";

interface LoadingProps {
  isloading: string;
}

export const Container = styled.div`
  position: absolute;
  top: calc(4vh + 25px);
  height: 80%;
  padding: 0 3%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: ${fontSize.body0};
  font-weight: ${fontWeight.semiBold};
  color: white;
  margin: 0% 0% 2% 0%;
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  z-index: 1;
`;

export const ProfileName = styled.div`
  padding-left: 10px;
`;

export const Contents = styled.div`
  width: 100%;
  z-index: 1;
`;

export const PlaceWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Place = styled.div<LoadingProps>`
  display: flex;
  align-items: center;
  background-color: rgba(128, 118, 118, 0.5);
  padding: 5px;
  border-radius: 10px;
  ${(props) =>
    props.isloading === "true"
      ? css`
          backdrop-filter: blur(4px);
          width: 50px;
          cursor: progress;
          ${loadings.dark}
        `
      : null}
`;

export const PlaceName = styled.div`
  padding-left: 3px;
`;

export const BookMark = styled.div`
  cursor: pointer;
`;

export const DescriptWrapper = styled.div`
  width: 100%;
`;

export const Title = styled.div<LoadingProps>`
  margin-top: 20px;
  ${(props) =>
    props.isloading === "true"
      ? css`
          backdrop-filter: blur(4px);
          width: 100px;
          height: 20px;
          cursor: progress;
          ${loadings.dark}
        `
      : null}
`;

export const Description = styled.div<LoadingProps>`
  margin-top: 10px;
  white-space: nowrap; /* 텍스트가 줄바꿈 없이 한 줄로 유지되도록 설정 */
  overflow: hidden; /* 넘치는 텍스트를 숨김 */
  text-overflow: ellipsis; /* 넘치는 텍스트를 '...'로 처리 */
  ${(props) =>
    props.isloading === "true"
      ? css`
          backdrop-filter: blur(4px);
          width: 170px;
          height: 30px;
          cursor: progress;
          ${loadings.dark}
        `
      : null}
`;

export const Ellipse = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
  text-align: center;
`;

export const Image = styled.img`
  height: 100%;
  width: 100%;
  display: block;
  object-fit: cover;
`;
