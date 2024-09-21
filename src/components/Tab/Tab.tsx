import { useDomWidth } from "@/hooks/useDomWidth";
import {
  Container,
  Divider,
  DividerWrapper,
  TabItem,
  Wrapper,
} from "./Tab.styled";
import { useEffect, useRef, useState } from "react";

interface TabItemProps {
  index: number;
  tabTitle: string;
  tabItem: React.ReactNode;
}

interface TabProps {
  tabItem: TabItemProps[];
}

const Tab: React.FC<TabProps> = ({ tabItem }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const tabRefs = useRef<(HTMLDivElement | null)[]>([]);
  const width = useDomWidth(tabRefs.current[activeIndex]);
  const [left, setLeft] = useState(0);
  const handleTab = (index: number) => {
    setActiveIndex(index);
    if (tabRefs.current[index]) {
      setLeft(tabRefs.current[index].offsetLeft);
    }
  };

  useEffect(() => {
    if (tabRefs.current[0]) {
      setLeft(tabRefs.current[0].offsetLeft);
    }
  }, []);
  return (
    <>
      <Container>
        <Wrapper>
          {tabItem.map((section, index) => {
            return (
              <TabItem
                ref={(el) => (tabRefs.current[index] = el)}
                key={index}
                isactive={index === activeIndex ? "true" : "false"}
                onClick={() => handleTab(index)}
              >
                {section.tabTitle}
              </TabItem>
            );
          })}
        </Wrapper>
        <DividerWrapper>
          <Divider activeindex={activeIndex} width={width} left={left} />
        </DividerWrapper>
        {tabItem[activeIndex].tabItem}
      </Container>
    </>
  );
};

export default Tab;
