import styled from "styled-components";
import ImageBox from "./ImageBox";
import Typography from "@/foundations/Typography/Typography";

export default {
  title: "Components/ImageBox",
  component: ImageBox,
};

export const AllTypes = () => (
  <>
    <TypeBox>
      <Typography text="Dark ImageBox" type="h3" />
      <ImageBox
        icon="shopping"
        theme="dark"
        size="large"
        minX="0"
        minY="0"
        viewBoxHeight="48"
        viewBoxWidth="48"
      ></ImageBox>
      <ImageBox
        icon="travel"
        theme="dark"
        size="medium"
        minX="0"
        minY="0"
        viewBoxHeight="48"
        viewBoxWidth="48"
      ></ImageBox>
      <ImageBox
        icon="travel"
        theme="dark"
        size="small"
        minX="0"
        minY="0"
        viewBoxHeight="48"
        viewBoxWidth="48"
      ></ImageBox>
    </TypeBox>

    <TypeBox>
      <Typography text="Light ImageBox" type="h3" />
      <ImageBox
        icon="shopping"
        theme="light"
        size="large"
        minX="0"
        minY="0"
        viewBoxHeight="48"
        viewBoxWidth="48"
      ></ImageBox>
      <ImageBox
        icon="travel"
        theme="light"
        size="medium"
        minX="0"
        minY="0"
        viewBoxHeight="48"
        viewBoxWidth="48"
      ></ImageBox>
      <ImageBox
        icon="travel"
        theme="light"
        size="small"
        minX="0"
        minY="0"
        viewBoxHeight="48"
        viewBoxWidth="48"
      ></ImageBox>
    </TypeBox>
  </>
);

const TypeBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
`;
