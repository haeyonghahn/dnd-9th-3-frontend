import styled from "styled-components";
import { colors } from "@/_shared/colors";
import { fontSize } from "@/_shared/typography";

export default {
  title: "Foundations/Color",
};

interface IColorProps {
  [key: string]: string;
}

const colorData: IColorProps = colors;

export const AllTypes = () => (
  <>
    <Layout>
      {Object.keys(colorData).map((key) => (
        <ColorBox key={key}>
          <Color style={{ backgroundColor: colorData[key] }}></Color>
          <Name>{key}</Name>
          <Meta>{colorData[key]}</Meta>
        </ColorBox>
      ))}
    </Layout>
  </>
);

const Layout = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
`;

const ColorBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
`;

const Color = styled.div`
  width: 120px;
  height: 120px;
`;

const Name = styled.div`
  color: ${colors.titleLine};
  font-size: ${fontSize.h3};
`;

const Meta = styled.div`
  color: ${colors.titleLine};
  font-size: ${fontSize.h3};
`;
