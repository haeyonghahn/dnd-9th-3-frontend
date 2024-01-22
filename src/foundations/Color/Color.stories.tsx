import styled from "styled-components";
import { colors } from "@/_shared/colors";

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
  flex-basis: 0;
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
  color: black;
  font-weight: bold;
  font-size: 0.875rem;
`;

const Meta = styled.div`
  color: gray;
  font-size: 0.75rem;
`;
