import Background from "@/foundations/Background";
import styled from "styled-components";
import Typography from "@/foundations/Typography/Typography";
import OnboardCard from "./OnboardCard";
import { RecoilRoot } from "recoil";

export default {
  title: "Components/OnboardCard",
  component: OnboardCard,
};

export const AllTypes = () => (
  <>
    <RecoilRoot>
      <Background theme="dark">
        <TypeBox>
          <CardBox>
            <OnboardCard
              interestCode="1"
              icon="shopping"
              theme="dark"
              title="쇼핑"
            />
            <Typography text="Default" type="h0" />
          </CardBox>
          <CardBox>
            <OnboardCard
              interestCode="2"
              icon="travel"
              theme="dark"
              title="여행"
            />
          </CardBox>
        </TypeBox>
      </Background>
      <Background theme="light">
        <TypeBox>
          <CardBox>
            <OnboardCard
              interestCode="1"
              icon="shopping"
              theme="light"
              title="쇼핑"
            />
            <Typography text="Default" type="h0" />
          </CardBox>
          <CardBox>
            <OnboardCard
              interestCode="2"
              icon="travel"
              theme="light"
              title="여행"
            />
          </CardBox>
        </TypeBox>
      </Background>
    </RecoilRoot>
  </>
);

const TypeBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  padding: 1rem;
`;

const CardBox = styled.div`
  display: flex;
  gap: 2rem;
`;
