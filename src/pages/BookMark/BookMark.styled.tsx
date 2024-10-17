import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

export const ImageBox = styled.div`
  height: 200px;
  width: 100%;

  img {
    height: 100%;
    width: 100%;
    display: block;
    object-fit: cover;
  }
`;
