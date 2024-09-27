import Background from "@/foundations/Background";
import Video from "./Video";
import styled from "styled-components";

export default {
  title: "Components/Video",
  component: Video,
};

export const AllTypes = () => (
  <>
    <Background theme="dark">
      <Container>
        <Video src="images/nature.mp4" />
      </Container>
    </Background>
  </>
);

const Container = styled.div`
  position: relative;
  width: 30%;
  height: 30%;
`;