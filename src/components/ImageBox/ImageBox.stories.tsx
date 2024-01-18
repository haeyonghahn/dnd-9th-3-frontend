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
      <ImageBox icon="shopping" theme="dark" size="large"></ImageBox>
      <ImageBox icon="travel" theme="dark" size="medium"></ImageBox>
      <ImageBox icon="travel" theme="dark" size="small"></ImageBox>
    </TypeBox>

    <TypeBox>
      <Typography text="Light ImageBox" type="h3" />
      <ImageBox icon="shopping" theme="light" size="large"></ImageBox>
      <ImageBox icon="travel" theme="light" size="medium"></ImageBox>
      <ImageBox icon="travel" theme="light" size="small"></ImageBox>
    </TypeBox>
  </>
);

const TypeBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
`;
