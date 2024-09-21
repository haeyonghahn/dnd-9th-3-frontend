import Background from "@/foundations/Background";
import Tab from "./Tab";
import styled from "styled-components";

export default {
  title: "Components/Tab",
  component: Tab,
};

const TimeLine = () => {
  return (
    <TabItem>
      <p>TimeLine 🎉</p>
    </TabItem>
  );
};

const Save = () => {
  return (
    <TabItem>
      <p>Save 🎂</p>
    </TabItem>
  );
};

export const AllTypes = () => (
  <>
    <Background theme="dark">
      <Tab
        tabItem={[
          { index: 0, tabTitle: "타임라인", tabItem: <TimeLine /> },
          { index: 1, tabTitle: "저장", tabItem: <Save /> },
        ]}
      />
    </Background>
  </>
);

const TabItem = styled.div`
  margin-left: 3%;
`;
