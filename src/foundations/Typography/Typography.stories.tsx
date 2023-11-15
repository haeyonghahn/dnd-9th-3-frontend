import styled from "styled-components";
import Typography from "./Typography";

export default {
  title: "Foundations/Typography",
  component: Typography,
};

export const AllTypes = () => (
  <Layout>
    <Row>
      <Info>
        <Typography text="H0" type="h0" />
      </Info>
      <Typography text="영화와 함께하는 여행" type="h0" />
    </Row>
    <Row>
      <Info>
        <Typography text="H1" type="h1" />
      </Info>
      <Typography text="영화와 함께하는 여행" type="h1" />
    </Row>
    <Row>
      <Info>
        <Typography text="H2" type="h2" />
      </Info>
      <Typography text="영화와 함께하는 여행" type="h2" />
    </Row>
    <Row>
      <Info>
        <Typography text="H3" type="h3" />
      </Info>
      <Typography text="영화와 함께하는 여행" type="h3" />
    </Row>
    <Row>
      <Info>
        <Typography text="Body0" type="body0" />
      </Info>
      <Typography text="영화와 함께하는 여행" type="body0" />
    </Row>
    <Row>
      <Info>
        <Typography text="Body1" type="body1" />
      </Info>
      <Typography text="영화와 함께하는 여행" type="body1" />
    </Row>
    <Row>
      <Info>
        <Typography text="Body2" type="body2" />
      </Info>
      <Typography text="영화와 함께하는 여행" type="body2" />
    </Row>
    <Row>
      <Info>
        <Typography text="Caption1" type="caption1" />
      </Info>
      <Typography text="영화와 함께하는 여행" type="caption1" />
    </Row>
    <Row>
      <Info>
        <Typography text="Caption2" type="caption2" />
      </Info>
      <Typography text="영화와 함께하는 여행" type="caption2" />
    </Row>
    <Row>
      <Info>
        <Typography text="Caption3" type="caption3" />
      </Info>
      <Typography text="영화와 함께하는 여행" type="caption3" />
    </Row>
  </Layout>
);

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
`;

const Info = styled.div`
  width: 100px;
`;
